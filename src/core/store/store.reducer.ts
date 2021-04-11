import {selectionsReducer} from './selections/selections.reducer';
import {AnyAction, combineReducers} from 'redux';
import quizReducer from './quiz/quiz.reducer';
import {StoreModel} from './store.model';

export const RESET_QUIZ = 'RESET_QUIZ';

const reducers = combineReducers({
    selections: selectionsReducer,
    quiz: quizReducer,
});

export const storeReducer = (state: StoreModel, action: AnyAction) => {
    if (action.type === RESET_QUIZ) state = {
        quiz: {...state.quiz, started: false, currentIndex: 0},
        selections: [],
    };
    return reducers(state, action);
}