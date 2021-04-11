export const ADD_SELECTION = 'ADD_SELECTION';

export const addSelection = (payload: string[]) => ({
    type: ADD_SELECTION,
    payload,
})