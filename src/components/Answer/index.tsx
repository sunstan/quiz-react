import {currentIsMultiple} from '../../core/store/quiz/quiz.selector';
import React, {Dispatch, SetStateAction} from 'react';
import {IDK} from '../../core/config/constants';
import {useSelector} from 'react-redux';

interface Props {
    readonly text: string;
    readonly selection: string[];
    readonly setSelection: Dispatch<SetStateAction<string[]>>;
}

const Answer = ({text, setSelection, selection}: Props): JSX.Element => {

    const currentIsMultiple$ = useSelector(currentIsMultiple);

    const isSelected = (text: string): boolean => {
        return selection.includes(text);
    }

    const isTransparent = (text: string): boolean => (
        !currentIsMultiple$ &&
        !isSelected(text) &&
        selection.length > 0
    ) || (
        currentIsMultiple$ &&
        selection.length > 0 &&
        selection[0] === IDK &&
        text !== IDK
    );

    const toggleAnswer = (text: string): void => {
        setSelection(selection => isSelected(text)
            ? selection.filter((t: string) => t !== text)
            : text === IDK || !currentIsMultiple$
                ? [text]
                : [...selection, text].filter((t: string) => t !== IDK)
        )
    }

    return (
        <div onClick={() => toggleAnswer(text)}
             className={'px-6 py-4 bg-gray-100 rounded cursor-pointer transition border ' +
             (isSelected(text) ? 'border-gray-800' : isTransparent(text) && 'opacity-50')}>
            {text}
        </div>
    );
};

export default Answer;