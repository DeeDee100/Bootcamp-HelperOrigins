function number_vogals(phrase) {
    var count = 0;
    phrase = phrase.toLowerCase();
    for (var _i = 0, phrase_1 = phrase; _i < phrase_1.length; _i++) {
        var char = phrase_1[_i];
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
    alert(count);
}
//# sourceMappingURL=ex1A.js.map