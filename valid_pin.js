function validatePIN(pin) {
    debugger;
    let validChars = "1234567890";
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] === validChars[-1]) {
            return false;
        }
    } return true;
}

validatePIN('123d');
