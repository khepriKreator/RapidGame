/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {StartPage, StartPageProps} from './StartPage';

const meta: Meta<StartPageProps> = {
    component: StartPage,
    title: 'StartPage',
};

export default meta;


export const Component = () => {
    return (
        <>
            <StartPage/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}