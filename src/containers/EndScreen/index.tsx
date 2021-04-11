import {AnswerModel, QuestionModel} from '../../core/models/question.model';
import {selections} from '../../core/store/selections/selections.selector';
import {questions} from '../../core/store/quiz/quiz.selector';
import {useDispatch, useSelector} from 'react-redux';
import {IDK} from '../../core/config/constants';
import {RESET_QUIZ} from '../../core/store/store.reducer';
import React from 'react';

const EndScreen = (): JSX.Element => {

    const dispatch = useDispatch();
    const questions$ = useSelector(questions);
    const selections$ = useSelector(selections);

    const selectionByIndex = (index: number): string[] => {
        return selections$[index];
    }

    const correctAnswersByIndex = (index: number): string[] => {
        return questions$[index].answers
            .filter((answer: AnswerModel) => answer.isCorrect)
            .map((answer: AnswerModel) => answer.text);
    }

    const resultByIndex = (index: number) => {
        const selection = selectionByIndex(index);
        const correctAnswers = correctAnswersByIndex(index);
        const allCorrectInSelection = correctAnswers.every((text: string) => selection.includes(text));
        const allSelectedInCorrect = selection.every((text: string) => correctAnswers.includes(text));

        return selection[0] === IDK ? 0
            : allCorrectInSelection && allSelectedInCorrect ? 1
                : allCorrectInSelection && !allSelectedInCorrect ? -1
                    : !allCorrectInSelection && !allSelectedInCorrect ? -1 : 0
    }

    const total = () => {
        const total = questions$.reduce((total: number, question: QuestionModel, index: number) =>
            total + resultByIndex(index), 0);
        return total > 0 ? total : 0;
    }

    const handleReset = () => {
        dispatch({type: RESET_QUIZ});
    }

    return (
        <div className='flex flex-col gap-4'>

            <div className='text-sm font-medium uppercase text-indigo-500'>
                Quiz Termminé
            </div>

            <div className='text-2xl font-medium'>
                Votre score final: {total()}
            </div>

            <div className='flex flex-col gap-2'>
                {
                    questions$.map((question: QuestionModel, index: number) =>
                        <div key={index} className='flex items-center justify-between gap-10 px-6 py-4 bg-gray-100 rounded'>
                            <span className='font-medium'>{question.question}</span>
                            <span className='font-medium'>{resultByIndex(index)}</span>
                        </div>
                    )
                }
            </div>
            <button
                onClick={handleReset}
                className='py-4 bg-green-500 text-white'>
                Recommencer
            </button>
        </div>
    );
};

export default EndScreen;