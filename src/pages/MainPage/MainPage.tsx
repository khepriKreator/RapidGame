import styles from './styles.module.css';
import {Cell} from '../../components'
import {observer} from "mobx-react-lite";
import GameStore from "../../store";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const gs = new GameStore()
export const MainPage = observer(() => {
    const navigate = useNavigate();
    const {levelOfDifficult} = useParams()
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        gs.createTestArray(Number(levelOfDifficult));
        gs.shuffleNumbersAndFillNumberCells();
        gs.reset();
    }, [levelOfDifficult])

    const timerId = setTimeout(() => setTimeout(() => setTimer(timer - 1)), 1000)
    if (timer <= 0) {
        clearInterval(timerId)
        navigate('/lose')
    }
    const compareValues = (value: number) => {
        const isMatch = gs.compareValues(value)
        if (!isMatch) {
            clearInterval(timerId)
            navigate('/lose')
        }
        if (gs.isWin()) {
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
                    Time: {timer}
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