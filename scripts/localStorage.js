let savedInteger;
function setSavedInt(){
    if(window.localStorage.length < 1){
        localStorage.setItem('savedInteger', '0');
    }
    savedInteger = localStorage.getItem('savedInteger');
}
function incementSavedInt(){
    let a = getSavedInt();
    a++;
    localStorage.setItem('savedInteger', a)
}
function decreaseSavedInt(){
    let a = getSavedInt();
    a--;
    localStorage.setItem('savedInteger', a)
}
function getSavedInt(){
    return localStorage.getItem('savedInteger');
}

function getRandomSaved(){
    let a = Math.floor(Math.random() * getSavedInt());
    console.log(a);
    return a;
}

function getEmpty(){
    let a = getSavedInt();
    console.log(a);
    for (let index = 0; index < a; index++) {
        console.log("index " + index + ":" + localStorage.getItem(index));
        if(localStorage.getItem(index) === null){
            return index;
        }
    }
    return null;
}