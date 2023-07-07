const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
const copycats = [...cats , name];
    return copycats;

}

function prependCat(name){
    const copycats = [name , ...cats];
    return copycats;
}

function removeLastCat(){
    
    return cats.slice(0,2);

}

function removeFirstCat(){

    return cats.slice(1);
}