import {useNavigate, useParams} from "react-router-dom";
import {ResultStore} from "../../stores/resultStore.ts";
import {useEffect, useState} from "react";
import {Result} from "../../models";
import styles from './styles.module.css'

const rs = new ResultStore();
export const EndPage = () => {
    const result: Result = rs.getResultFromLocalStorage() ?? {value: 0, time: 60};
    const [bestResult, setBestResult] = useState(rs.getBestResult());
    const {end} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        rs.setBestResultAndSetToLocalStorage(result);
        if (result === rs.bestResult) {
            setBestResult(result);
        }
        console.log(localStorage, rs.isBestResult(result));
    }, [bestResult, result])
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>{end === 'win' ? 'You win!' : 'One more time?'}</h1>
            <div>
                <div className={styles.scores}>
                    <h3>Your scores:</h3>
                    <div>
                        Score: {result.value}
                    </div>
                    <div>
                        Time: {result.time}
                    </div>
                </div>
                <div className={styles.scores}>
                    <h3>Best scores:</h3>
                    <div>
                        Score: {bestResult.value}
                    </div>
                    <div>
                        Time: {bestResult.time}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => navigate('/start')} className={styles.restartButton}>
                    Restart
                </button>
            </div>
        </div>
    );
};