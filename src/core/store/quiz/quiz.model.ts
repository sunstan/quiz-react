import {QuestionModel} from '../../models/question.model';

export interface QuizModel {
    readonly started: boolean;
    readonly currentIndex: number;
    readonly questions: QuestionModel[];
}