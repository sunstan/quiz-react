import {StoreModel} from '../store.model';

export const selections = (store: StoreModel): string[][] => {
    return store.selections;
}