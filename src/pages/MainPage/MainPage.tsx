import styles from './styles.module.css';
import {Cell} from '../../components'
import {observer} from "mobx-react-lite";
import GameStore from "../../stores/gameStore.ts";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useCountdown} from 'usehooks-ts'
import {format} from 'date-fns'

const gs = new GameStore()
export const MainPage = observer(() => {
    const navigate = useNavigate();
    const {levelOfDifficult} = useParams()
    const [count, {startCountdown, stopCountdown}] = useCountdown(
        {
            countStart: 6000,
            countStop: 0,
            intervalMs: 10,
        }
    )
    const time = format(count * 10, 's.SS')
    useEffect(() => {
        gs.createTestArray(Number(levelOfDifficult));
        gs.shuffleNumbersAndFillNumberCells();
        gs.reset();
        startCountdown();
    }, [startCountdown,levelOfDifficult])

    if (count === 0) {
        stopCountdown();
        navigate('/lose');
    }
    const compareValues = (value: number) => {
        const isMatch = gs.compareValues(value)
        if (!isMatch) {
            stopCountdown();
            gs.setResultToLocalStorage({value: gs.index, time: Number(time)});
            navigate('/lose')
        }
        if (gs.isWin()) {
            stopCountdown();
            gs.setResultToLocalStorage({value: gs.index, time: Number(time)});
            navigate('/win')
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.score}>
                    Score: {gs.index}
                </div>
                <div className={styles.timer}>
                    Time: {time}
                </div>
            </div>
            <div className={styles.gameField}>
                {gs.numberCells.map(({value, isPressed}) =>
                    <Cell
                        key={value}
                        value={value}
                        isPressed={isPressed}
                        onClick={() => compareValues(value)}
                    />)}
            </div>
        </div>
    );
});