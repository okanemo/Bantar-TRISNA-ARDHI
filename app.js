// jawaban no 1.
const sama = (word) => {
    const wordArr = word.split("");
    const arrReversed = wordArr.reverse();
    const isWordPalindrome = arrReversed.join("") === word;

    return isWordPalindrome;
}
console.log(sama("aba"));
console.log(sama("abc"));

// jawaban no 2
const stringToArray = (sentence) => {
    const sentenceSplitBySpace = sentence.split(" ");
    const result = [];
    for (let word of sentenceSplitBySpace) {
        result.push(word.split(""));
    }

    return result;
}
console.log(stringToArray("aaa aaa"));

// jawaban no 3
const numbers = [3, 2, 1, 2, 1, 4, 6, 5, 7, 8, 8, 9, 2];
const filterNumber = (numberOfArray) => {
    let unique = [...new Set(numberOfArray)];
    unique = unique.sort();
    return unique.filter(number => !(number > 5 && number <= 8));
}
console.log(filterNumber(numbers));

// jawaban no 4
const sum = (a, b) => {
    if (b === undefined) {
        return (c) => {
            return c + a;
        }
    }
    return a + b;
};

console.log(sum(1)(5));
console.log(sum(1, 5));

// jawaban no 5
const selfNumber = () => {
    const arrayOfNumbers = Array.from({ length: 200 }, (_, i) => i + 1);
    function getSum(n) {
        let sum = 0;
        while (n != 0) {
            sum = sum + n % 10;
            n = parseInt(n / 10);
        }
        return sum;
    }

    function isSelfNum(n) {
        for (let m = 1; m <= n; m++) {
            console.log(m, "m")
            console.log(getSum(m), "getSum")
            console.log(n, "n")
            if (m + getSum(m) == n)
                return false;
        }
        return true;
    }
    console.log(arrayOfNumbers.map(numb => isSelfNum(numb)))
}

selfNumber();