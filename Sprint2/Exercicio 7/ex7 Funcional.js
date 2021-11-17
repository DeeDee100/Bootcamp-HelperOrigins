class ArrayValues {
    constructor(list) {
        this.list = [...list];
    }
    maxValue() {
        let newList = [...this.list];
        newList.sort();
        return newList.pop() || 0;
    }
    minValue() {
        let newList = [...this.list];
        newList.sort();
        return newList.shift() || 0;
    }
    average() {
        let newList = [...this.list];
        let sum = newList.reduce((numero1, numero2) => numero1 + numero2, 0);
        const result = sum / (newList.length || 1);
        return result;
    }
    maxMinAverage() {
        if (this.list.length === 0) {
            return "Lista Vazia";
        }
        else if (!this.list.every(item => typeof (item) === "number")) {
            return "Item não é um número";
        }
        else {
            const big = this.maxValue();
            const minimun = this.minValue();
            const average = this.average();
            return [big, minimun, average];
        }
    }
}
//# sourceMappingURL=ex7%20Funcional.js.map