import {Link} from "react-router-dom";
import styles from './styles.module.css'
import {observer} from "mobx-react-lite";
import classNames from "classnames";
import {useEffect, useState} from 'react'
import {localStorageService} from "../../services/localStorageService.ts";

export const StartPage = observer(() => {
    const levelsOfDifficult = [21, 56, 70];
    const [currentLevelOfDifficult, setCurrentLevelOfDifficult] = useState(21);
    useEffect(() => {
        localStorageService.removeResult();
    }, [])
    return (
        <div className={styles.startWindow}>
            <h1 className={styles.header}>Rapid Game</h1>
            <Link to={`/game/${currentLevelOfDifficult}`} className={styles.startButton}>
                Start
            </Link>
            <div className={styles.levelsOfDifficult}>
                {levelsOfDifficult.map((level, index) =>
                    <button key={index}
                            onClick={() => {
                                setCurrentLevelOfDifficult(level)
                            }}
                            className={classNames(styles.levelOfDifficultButton, {
                                [styles.levelOfDifficultButtonActive]: currentLevelOfDifficult === level,
                            })}
                    >
                        {level}
                    </button>
                )}
            </div>
        </div>
    );
});