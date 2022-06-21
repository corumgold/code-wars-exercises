// Write a function that takes a string of parentheses, 
// and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
    debugger;
    const OPENPARENS = "([{";
    const CLOSEPARENS = ")]}"
    let stack = [];

    for (let i = 0; i < parens.length; i++) {
        let paren = parens[i];
        let lastParen = stack[stack.length - 1];
        // if this paren is an open paren, add it to the stack
        if (OPENPARENS.indexOf(paren) !== -1) {
            stack.push(paren);
        }
        // if this paren is a close paren, AND it matches the open paren at the end of the stack,
        // pop off the last element 
        else if (CLOSEPARENS.indexOf(paren) !== -1 &&
            CLOSEPARENS.indexOf(paren) === OPENPARENS.indexOf(stack[stack.length - 1])) {
            stack.pop();
        }
        else {
            return false;
        }
    } 
    //if nothing remains in stack, then all parens are valid;
    if (stack.length === 0) return true;
    else return false;
}

validParentheses("()")