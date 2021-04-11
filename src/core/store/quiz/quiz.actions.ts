import {QuestionModel} from '../../models/question.model';

export const START_QUIZ = 'START_QUIZ';
export const PATCH_QUESTIONS = 'PATCH_QUESTIONS';
export const INCREMENT_CURRENT_INDEX = 'INCREMENT_CURRENT_INDEX';

export const startQuiz = () => ({
    type: START_QUIZ,
});

export const patchQuestions = (payload: QuestionModel[]) => ({
    type: PATCH_QUESTIONS,
    payload,
});

export const incrementCurrentIndex = () => ({
    type: INCREMENT_CURRENT_INDEX,
});
