export class Vogals {
    constructor(phrase) {
        this.phrase = phrase;
    }
    getVogals() {
        const letters = ['a', 'e', 'i', 'o', 'u'];
        const newPhrase = this.phrase.toLowerCase();
        let count = 0;
        for (let char of newPhrase) {
            for (const vogals of letters) {
                if (char == vogals) {
                    count++;
                }
            }
        }
        return count;
    }
}
let vogal = new Vogals("Dee DEEe");
vogal.getVogals();
//# sourceMappingURL=ex5_Funcao.js.map