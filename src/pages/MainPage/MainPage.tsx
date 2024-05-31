import styles from './styles.module.css';
import {Cell} from '../../components'
import {observer} from "mobx-react-lite";
import GameStore from "../../store";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const gs = new GameStore()
export const MainPage = observer(() => {
    const navigate = useNavigate();
    useEffect(() => {
        gs.shuffleNumbersAndFillNumberCells();
        gs.reset();
    }, [])
    const compareValues = (value: number) => {
        const isMatch = gs.compareValues(value)
        if (!isMatch) {
            navigate('/end')
        }
        if (gs.isWin()) {
            navigate('/end')
        }
        console.log(
            gs.compareValues(value),
            gs.numberCells[gs.findNumberCellIndex(value)]
        )
    }

    return (
        <div>
            <div>

            </div>
            <div className={styles.cells}>
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