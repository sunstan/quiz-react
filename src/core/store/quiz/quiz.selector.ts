import {AnswerModel, QuestionModel} from '../../models/question.model';
import {StoreModel} from '../store.model';
import {QuizModel} from './quiz.model';
import * as _ from 'lodash';

export const quiz = (store: StoreModel): QuizModel => {
    return store.quiz
};

export const currentIndex = (store: StoreModel): number => {
    return store.quiz.currentIndex;
}

export const quizLength = (store: StoreModel): number => {
    return store.quiz.questions.length;
}

export const isStarted = (store: StoreModel): boolean => {
    return store.quiz.started;
}

export const isEnded = (store: StoreModel): boolean => {
    return store.quiz.currentIndex >= store.quiz.questions.length;
}

export const isLastQuestion = (store: StoreModel): boolean => {
    return store.quiz.currentIndex === store.quiz.questions.length - 1;
}

export const currentIsMultiple = (store: StoreModel): boolean => {
    const currentIndex = store.quiz.currentIndex;
    const currentQuestion = store.quiz.questions[currentIndex];
    return currentQuestion.answers.filter((answer: AnswerModel) => answer.isCorrect).length > 1
}

export const currentQuestion = (store: StoreModel): QuestionModel => {
    const currentIndex = store.quiz.currentIndex;
    return store.quiz.questions[currentIndex];
}

export const questions = (store: StoreModel): QuestionModel[] => {
    return store.quiz.questions;
}

export const currentAnswers = (store: StoreModel): AnswerModel[] => {
    const currentIndex = store.quiz.currentIndex;
    const currentQuestion = store.quiz.questions[currentIndex];
    return _.shuffle(currentQuestion.answers);
}