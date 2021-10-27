const { returns } = require("chai-spies");

function beans() {
    return("Eat all the beans."); 
}
function receivesAFunction(beans) {
    beans(); 
}
function returnsANamedFunction() {
    return(beans); 
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("hi.")
        };
    }
