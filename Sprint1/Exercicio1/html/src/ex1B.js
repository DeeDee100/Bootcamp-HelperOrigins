function number_vogals() {
    let box = document.getElementById("text");
    let phrase = box.value;
    let count = 0;
    phrase = phrase.toLowerCase();
    for (let char of phrase) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
    alert(count);
}
//# sourceMappingURL=ex1B.js.map