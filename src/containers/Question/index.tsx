import {
    currentAnswers,
    currentIndex,
    currentIsMultiple,
    currentQuestion,
    isLastQuestion,
    quizLength
} from '../../core/store/quiz/quiz.selector';
import {ADD_SELECTION} from '../../core/store/selections/selections.actions';
import {INCREMENT_CURRENT_INDEX} from '../../core/store/quiz/quiz.actions';
import {AnswerModel} from '../../core/models/question.model';
import {useDispatch, useSelector} from 'react-redux';
import Answer from '../../components/Answer';
import React, {useState} from 'react';
import {IDK} from '../../core/config/constants';

const Question = (): JSX.Element => {

    const dispatch = useDispatch();

    const quizLength$ = useSelector(quizLength);
    const currentIndex$ = useSelector(currentIndex);
    const currentAnswers$ = useSelector(currentAnswers);
    const currentIsMultiple$ = useSelector(currentIsMultiple)
    const isLastQuestion$ = useSelector(isLastQuestion);
    const currentQuestion$ = useSelector(currentQuestion);

    const [selection, setSelection] = useState<string[]>([]);

    const handleNext = () => {
        if (selection.length <= 0) return;
        dispatch({type: ADD_SELECTION, payload: selection});
        dispatch({type: INCREMENT_CURRENT_INDEX});
        setSelection([]);
    }

    return (
        <div className='flex flex-col gap-4'>

            <div className='text-sm font-medium uppercase text-indigo-500'>
                Question {currentIndex$ + 1} / {quizLength$}
            </div>

            <div className='text-2xl font-medium'>
                {currentQuestion$.question}
            </div>

            {
                currentIsMultiple$ &&
                <div className='italic text-gray-500'>Plusieurs choix possibles</div>
            }

            <div className='flex flex-col gap-2'>

                {
                    currentAnswers$.map((answer: AnswerModel, i: number) =>
                        <Answer
                            key={i}
                            text={answer.text}
                            selection={selection}
                            setSelection={setSelection}/>)
                }

                <Answer
                    text={IDK}
                    selection={selection}
                    setSelection={setSelection}/>
            </div>

            <button onClick={handleNext}
                    disabled={selection.length <= 0}
                    className='py-4 bg-green-500 text-white disabled:bg-gray-300'>
                {
                    isLastQuestion$
                        ? 'Valider et terminer'
                        : 'Valider et passer à la question suivante'
                }
            </button>

        </div>
    );
};

export default Question;