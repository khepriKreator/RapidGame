import {useNavigate, useParams} from "react-router-dom";

export const EndPage = () => {
    const {end} = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>{end === 'win' ? 'win' : 'lose'}</h1>
            <div>
                <button onClick={() => navigate('/start')}>
                    restart
                </button>
            </div>
        </div>
    );
};