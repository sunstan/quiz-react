import {QuizModel} from './quiz/quiz.model';

export interface StoreModel {
    readonly selections: string[][];
    readonly quiz: QuizModel;
}