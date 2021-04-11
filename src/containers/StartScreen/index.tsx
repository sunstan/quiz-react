import {useDispatch} from 'react-redux';
import {START_QUIZ} from '../../core/store/quiz/quiz.actions';
import React from 'react';

const StartScreen = (): JSX.Element => {

    const dispatch = useDispatch();

    const handleStart = () => dispatch({type: START_QUIZ});

    return (
        <div className='flex flex-col gap-4'>
            <div className='text-2xl font-medium'>Quiz</div>
            <button
                onClick={handleStart}
                className='py-4 bg-green-500 text-white'>
                Commencer
            </button>
        </div>
    );
};

export default StartScreen;