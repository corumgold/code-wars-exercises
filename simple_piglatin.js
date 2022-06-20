// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    debugger;
    let punc = "!?.,"
    let arr = str.split(' ')
    let pigArr = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (punc.indexOf(word) !== -1) {
            pigArr.push(word);
        }
        else {
            let pigged = word.slice(1) + word.slice(0, 1) + "ay";
            pigArr.push(pigged);
        }
    } return pigArr.join(' ');
}

pigIt("Hey there my name is Cory !")