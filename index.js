function receivesAFunction(itIsThursday){
    return itIsThursday()
}

function returnsANamedFunction(){
    return function itIsThursday(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
}