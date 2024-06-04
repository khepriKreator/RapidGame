import {useParams} from "react-router-dom";

export const EndPage = () => {
    const {end} = useParams();
    return (
        <div>
            {end === 'win' ? 'win' : 'lose'}
        </div>
    );
};