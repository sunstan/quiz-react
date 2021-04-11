import {PATCH_QUESTIONS} from './core/store/quiz/quiz.actions';
import {ReactNode, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {env} from './core/environments/environment';

interface Props {
    readonly children: ReactNode;
}

const Initializer = ({children}: Props): JSX.Element => {

    const dispatch = useDispatch();
    const [error, setError] = useState<boolean>(false);
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        fetch(env.hostApi + '/data.json')
            .then(res => res.json())
            .then(payload => dispatch({type: PATCH_QUESTIONS, payload}))
            .catch(() => setError(true))
            .finally(() => setReady(true));
    }, [dispatch])

    if (error) return <div>Error</div>;

    if (!ready) return <div>Chargement...</div>;

    return <div>{children}</div>;
};

export default Initializer;