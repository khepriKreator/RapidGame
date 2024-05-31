/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {EndPage, EndPageProps} from './EndPage';

const meta: Meta<EndPageProps> = {
    component: EndPage,
    title: 'EndPage',
};

export default meta;


export const Component = () => {
    return (
        <>
            <EndPage/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}