import {makeObservable, observable, action} from 'mobx';
import {NumberCell} from '../models'

export default class GameStore {
    index: number = 0;
    numbers: number[] = Array(7).fill(1).map((_, i) => i + 1)
    numberCells: NumberCell[] = [];
    constructor() {
        makeObservable({
            numberCells: observable,
            compareValues: action,
        })
    }
    shuffleNumbersAndFillNumberCells() {
        const numbersCopy = this.numbers.map((n) => n);
        for (let i = numbersCopy.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [numbersCopy[i], numbersCopy[j]] = [numbersCopy[j], numbersCopy[i]]
        }
        this.numberCells = numbersCopy.map((n): NumberCell => {
            return {value: n, isPressed: false}
        })
        console.log(this.numbers, this.numberCells)
    }
    compareValues(value: number) {
        if (value === this.numbers[this.index]) {
            this.numberCells[this.findNumberCellIndex(value)].isPressed = true;
            this.index++;
            return true;
        }
        return false;
    }
    findNumberCellIndex(value: number) {
       return this.numberCells.findIndex((n) => n.value === value)
    }
    isWin() {
        return this.index === this.numbers.length
    }
    reset() {
        this.index = 0
    }
}