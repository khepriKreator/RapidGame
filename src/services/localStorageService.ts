import {Result} from '../models/index.ts'
export const localStorageService = {
    setResult: (result: Result): void => {
        localStorage.setItem('result', JSON.stringify(result))
    },
    setBestResult: (bestResult: Result) => {
        localStorage.setItem('bestResult', JSON.stringify(bestResult))
    },
    getResult: () => {
        return localStorage.getItem('result')
    },
    getBestResult: () => {
        return localStorage.getItem('bestResult')
    },
    removeResult: () => {
        localStorage.removeItem('result');
    }
}