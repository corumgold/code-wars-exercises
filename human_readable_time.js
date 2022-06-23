// Your task in order to complete this Kata is to write a function which formats a duration, 
// given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". 
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, 
// a positive integer and one of the valid units of time, separated by a space. 
// The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, 
// which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. 
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. H
// ence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, 
// but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater 
// than any valid more significant unit of time.

function formatDuration(seconds) {
    debugger;
    let yearCt = 0;
    let dayCt = 0;
    let hrCt = 0;
    let minCt = 0;
    let secCt = 0;
    let arr = []
    let string = ""

    while (seconds > 0) {
        if (seconds >= 31536000) {
            yearCt += 1;
            seconds -= 31536000;
            continue;
        }
        if (seconds >= 86400) {
            dayCt += 1;
            seconds -= 86400;
            continue;
        }
        if (seconds >= 3600) {
            hrCt += 1;
            seconds -= 3600;
            continue;
        }
        if (seconds >= 60) {
            minCt += 1;
            seconds -= 60;
            continue;
        } else {
            secCt = seconds;
            seconds = 0;
        }
    }

    if (yearCt > 1) arr.push(`${yearCt} years, `);
    else if (yearCt) arr.push(`${yearCt} year, `);

    if (dayCt > 1) arr.push(`${dayCt} days, `);
    else if (dayCt) arr.push(`${dayCt} day, `);

    if (hrCt > 1) arr.push(`${hrCt} hours, `);
    else if (hrCt) arr.push(`${hrCt} hour, `);

    if (minCt > 1) arr.push(`${minCt} minutes, `);
    else if (minCt) arr.push(`${minCt} minute, `);

    if (secCt > 1) arr.push(`${secCt} seconds, `);
    else if (secCt) arr.push(`${secCt} second, `);

    if (arr.length > 1) {
        arr.splice(arr.length - 1, 0, "and ")
        string = arr.join("")
        string = string.slice(0, string.indexOf("and") - 2) + string.slice(string.indexOf("and") - 1);
    } else if (arr.length === 1) {
        string = arr.toString();
    } else {
        return "now"
    }
    return string.slice(0, string.length - 2)
} formatDuration(21)