import * as actions from './selections.actions';
import {AnyAction} from 'redux';

export const selectionsReducer = (state: string[][] = [], action: AnyAction) => {
    switch (action.type) {
        case actions.ADD_SELECTION: {
            const {payload} = action;
            return [...state, payload];
        }
        default: {
            return state;
        }
    }
}