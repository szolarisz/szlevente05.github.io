// Változók alkotása

let myDiv = document.getElementsByClassName("bevezetes")[0];
let myDiv2 = document.getElementsByClassName("localrepo")[0];
let myDiv3 = document.getElementsByClassName("remoterepo")[0];
let myDivValue = myDiv.style.display;
let myDiv2Value = myDiv2.style.display;
let myDiv3Value = myDiv3.style.display;

//"Távoli repó kezelése" nevű gomb függvénye

function remoteRepo() {
    myDiv.style.display = 'none';
    myDiv2.style.display = 'none';
    myDiv3.style.display = 'block';
}
//"Bevezetés" nevű gomb függvénye

function bevezetes() {
    myDiv.style.display = 'block';
    myDiv2.style.display = 'none';
    myDiv3.style.display = 'none';
}

//"Lokális repó kezelése" nevű gomb függvénye

function localRepo() {
    myDiv.style.display = 'none';
    myDiv2.style.display = 'block';
    myDiv3.style.display = 'none';
}