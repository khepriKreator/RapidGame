import {makeObservable, observable, action} from 'mobx';
import {NumberCell, Result} from '../models'
import {localStorageService} from "../services/localStorageService.ts";

export default class GameStore {
    index: number = 0;
    numbers: number[] = [];
    numberCells: NumberCell[] = [];
    constructor() {
        makeObservable({
            numberCells: observable.array,
            compareValues: action,
        })
    }
    createTestArray(difficultLevel: number) {
        this.numbers = Array(difficultLevel).fill(1).map((_, i) => i + 1);
    }
    shuffleNumbersAndFillNumberCells() {
        const numbersCopy = this.numbers.map((n) => n);
        for (let i = numbersCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbersCopy[i], numbersCopy[j]] = [numbersCopy[j], numbersCopy[i]]
        }
        this.numberCells = numbersCopy.map((n): NumberCell => {
            return {value: n, isPressed: false}
        })
        this.numberCells = observable.array(this.numberCells)
        console.log(this.numberCells)
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

    setResultToLocalStorage(result: Result) {
        localStorageService.setResult(result);
    }
}