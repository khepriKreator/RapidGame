/* eslint i18next/no-literal-string: "off" */
import {MainPage} from './MainPage';

const meta = {
    component: MainPage,
    title: 'pages/MainPage',
};

export default meta;

export const Component = () => {
    return (
        <>
            <MainPage/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}