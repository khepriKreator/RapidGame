import styles from './styles.module.css';
import classNames from "classnames";

export type CellProps = {
    value: number;
    onClick: (value: number) => void;
    isPressed: boolean;
}

export const Cell = ({value, onClick, isPressed}: CellProps) => {

    return (
        <button onClick={() => {
                onClick(value);
            }}
            className={classNames(styles.cellPrimal, {
            [styles.cellPainted]: isPressed,
            })}
            disabled={isPressed}
        >
            {value}
        </button>
    );
};