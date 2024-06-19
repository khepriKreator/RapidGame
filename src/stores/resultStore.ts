import {Result} from "../models";
import {localStorageService} from "../services/localStorageService.ts";

export class ResultStore {
    bestResult: Result = this.getBestResultFromLocalStorage() ?? {value: 0, time: 60};
    getBestResult() {
        return this.bestResult;
    }
    getBestResultFromLocalStorage() {
        const bestResult = localStorageService.getBestResult();
        if (bestResult) {
            return JSON.parse(bestResult);
        }
        return null;
    }
    getResultFromLocalStorage() {
        const result = localStorageService.getResult()
        if (result) {
            return JSON.parse(result);
        }
        return null;
    }
    setBestResultAndSetToLocalStorage(result: Result) {
        this.bestResult =  this.isBestResult(result) ? result : this.bestResult;
        localStorageService.setBestResult(this.bestResult);
    }
    isBestResult(result: Result) {
        const bestResult = this.bestResult;
        if (result.value > bestResult.value) {
            return true;
        }
        if (result.value === bestResult.value && result.time < bestResult.time) {
            return true;
        }
        return false;
    }
}