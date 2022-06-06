function countSmileys(arr) {
    let smileyCount = 0
    let validEyes = "[':', ';']"
    let validNoses = "-~"
    let validMouths = ")D"
    for (let i = 0; i < arr.length; i++) {
        let currentSmiley = arr[i];
        if (validEyes.includes(currentSmiley[0])) {
            if (validMouths.includes(currentSmiley[1])) {
                smileyCount++;
            } else if (validNoses.includes(currentSmiley[1])) {
                if (validMouths.includes(currentSmiley[2])) {
                    smileyCount++;
                }
            } else {
                continue;
            }
        }
    } return smileyCount;
} 