import * as actions from './quiz.actions';
import quizDefault from './quiz.default';
import {QuizModel} from './quiz.model';
import {AnyAction} from 'redux';

const quizReducer = (state: QuizModel = quizDefault, action: AnyAction): QuizModel => {
    switch (action.type) {
        case actions.START_QUIZ: {
            return {...state, started: true};
        }
        case actions.PATCH_QUESTIONS: {
            return {...state, questions: action.payload};
        }
        case actions.INCREMENT_CURRENT_INDEX: {
            return {...state, currentIndex: state.currentIndex + 1}
        }
        default: {
            return state;
        }
    }
}

export default quizReducer;