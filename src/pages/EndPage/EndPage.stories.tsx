import {EndPage} from './EndPage';

const meta = {
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