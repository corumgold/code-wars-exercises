var uniqueInOrder = function (iterable) {
    let orderedUniques = [];
    for (let i = 0; i < iterable.length; i++) {
        //add the first character no matter what OR add the character 
        //if it's different from the previous character;
        if (i === 0 || iterable[i] !== iterable[i - 1]) {
            orderedUniques.push(iterable[i]);
        } 
    } return orderedUniques;
}