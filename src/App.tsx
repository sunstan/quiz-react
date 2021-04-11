import {isEnded, isStarted} from './core/store/quiz/quiz.selector';
import StartScreen from './containers/StartScreen';
import EndScreen from './containers/EndScreen';
import Question from './containers/Question';
import {useSelector} from 'react-redux';
import React from 'react';

const App = (): JSX.Element => {

    const isStarted$ = useSelector(isStarted);
    const isEnded$ = useSelector(isEnded);

    return (
        <div className='w-full h-screen flex items-center justify-center bg-indigo-500'>
            <div className='container mx-auto p-8 max-w-2xl'>
                <div className='w-full p-10 bg-white rounded shadow'>
                    {isStarted$
                        ? isEnded$
                            ? <EndScreen/>
                            : <Question/>
                        : <StartScreen/>
                    }
                </div>
            </div>
        </div>
    );
};

export default App;
