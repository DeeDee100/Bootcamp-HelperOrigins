function numeroVogais(phrase) {
    let count = 0;
    phrase = phrase.toLowerCase();
    for (let char of phrase) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
    return count;
}
console.log(numeroVogais("Heey"));
console.log(numeroVogais("kkkkk"));
console.log(numeroVogais("DEE Dee"));
//# sourceMappingURL=ex1A.js.map