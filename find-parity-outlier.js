function findOutlier(integers) {
    debugger;
    let oddsCount = 0
    let evensCount = 0
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evensCount++
        } else {
            oddsCount++
        }
    }
    if (oddsCount > evensCount) {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                return integers[i]
            }
        }
    } else {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 !== 0) {
                return integers[i]
            }
        }
    }
}

findOutlier([2, 6, 8, 10, 3])