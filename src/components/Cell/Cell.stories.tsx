/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {Cell, CellProps} from './Cell.tsx';
import {useState} from "react";

const meta: Meta<CellProps> = {
    component: Cell,
    title: 'components/Cell',
};
export default meta;
export const Component = () => {
    const [filled, setFilled] = useState(false)
    const changeFilling = () => filled ? setFilled(false) : setFilled(true);
    const onClick = () => console.log('click');
    return (
        <>
            <Cell onClick={() => {
                onClick();
                changeFilling();
            }} value={1} isPressed={filled}/>
            <Cell onClick={onClick} value={99} isPressed={false}/>
            <Cell onClick={onClick} value={2} isPressed={true}/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}