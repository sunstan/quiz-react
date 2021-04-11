export interface QuestionModel {
    readonly question: string;
    readonly answers: AnswerModel[];
}

export interface AnswerModel {
    readonly text: string;
    readonly isCorrect: boolean;
}