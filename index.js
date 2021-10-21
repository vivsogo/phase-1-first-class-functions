function receivesAFunction(callback){
    callback();
}
receivesAFunction();

function returnsANamedFunction(){
    return function pleasework() {
        console.log('hope this works');
    }

}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("heck yes")
    }
}
