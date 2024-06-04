import {StartPage} from './StartPage';

const meta = {
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