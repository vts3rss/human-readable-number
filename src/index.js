module.exports = function toReadable(number) {
    let first_dict = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let number_str = number.toString();
    if (number <= 19) {
        return first_dict[number];
    } else if (number <= 99) {
        let first = parseInt(number_str[1]);
        let second = parseInt(number_str[0]);

        if (first === 0) {
            first = "";
        } else {
            first = first_dict[first];
        }
        second = first_dict[second * 10];

        if (first === "") {
            return `${second}`;
        } else {
            return `${second} ${first}`;
        }
    } else if (number <= 999) {
        let third = Math.floor(number / 100);
        let prev = toReadable(number % 100);

        if (number % 100 === 0) {
            return `${first_dict[third]} hundred`;
        } else {
            return `${first_dict[third]} hundred ${prev}`;
        }
    }
};

// console.log(toReadable(940));
