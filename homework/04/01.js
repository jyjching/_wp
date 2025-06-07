function countLetters(str) {
    const letterMap = new Map();

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) { // 只處理英文字母
            if (letterMap.has(char)) {
                letterMap.set(char, letterMap.get(char) + 1);
            } else {
                letterMap.set(char, 1);
            }
        }
    }

    return letterMap;
}

console.log(countLetters("banana")); 
