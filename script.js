const box = document.querySelector('.show-hide') // selectinu box kuri noresiu rodyti
//funkcija kuri ijungia arba isjungia deze
function showHide() {
    if (box.style.display === 'none') {
        box.style.display = 'block'
    } else {
        box.style.display = 'none';
    }
};
//funkcija kuri keicia dezes ploti
function changeWidth() {
    box.classList.toggle('show-hide1')
};
// funkcija kuri keicia dezes auksti
function changeHeight() {
    box.classList.toggle('show-hide2')
};
//funkcija kuri centruoja deze
const box1 = document.querySelector('.lygu') // selectinu box kuris centruosis
function center() {
    box1.classList.toggle('lygu')
};

function position() {
    box.classList.toggle('show-hide3')
}

/////////// burgerio JS
const buton = document.querySelector('.nerodo')


function veikia (){
    buton.classList.toggle('rodo')
}

// spalvos

const deze1 = document.querySelector('.box1')
const deze2 = document.querySelector('.box2')
const deze3 = document.querySelector('.box3')
const deze4 = document.querySelector('.box4')

function rand() {
    return Math.floor(Math.random() * 256)
};

function randomColor() {
    return `rgb(${rand()}, ${rand()}, ${rand()})`;
};

function changeColor() {
    deze1.style.backgroundColor = randomColor();
    deze2.style.backgroundColor = randomColor();
    deze3.style.backgroundColor = randomColor();
    deze4.style.backgroundColor = randomColor();
}

function addText() {
    deze1.innerHTML = randomColor()
    deze2.innerHTML = randomColor()
    deze3.innerHTML = randomColor()
    deze4.innerHTML = randomColor()
};
///  lentele

const lentele =  document.querySelector('table');
function turnTableOn(){
    return lentele.classList.add('table1')
}

const info = document.querySelector('.sub');
const tekstas = document.querySelector('.bodi');

function addToTable() {
    const row = tekstas.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = buttonClick();
    cell2.innerHTML = addName();
    cell3.innerHTML = addLastName();

    const ageVal = document.querySelector('#amzius').value;
    let output = 2022 - Number.parseInt(ageVal);
    cell4.innerHTML = output;
};

let i = 0;

function buttonClick() {
    info.value = i++;
    return i
};

const vardas = document.querySelector('#firstName')
// prideti varda
function addName() {
    return vardas.value
};
const lastName = document.querySelector('#lastName')
//prideti pavarde
function addLastName() {
    return lastName.value
};

//apskaiciuoti gimimo data


