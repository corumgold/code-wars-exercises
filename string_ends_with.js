// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

function solution(str, ending) {
    let endLength = ending.length;
    let lastLetters = str.slice(str.length - ending.length);
    if (lastLetters === ending) {
        return true;
    } else {
        return false
    }
}
