const box = document.querySelector('.show-hide') // selectinu box kuri noresiu rodyti
//funkcija kuri ijungia arba isjungia deze
function showHide() {
    if (box.style.display == 'none') {
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


function veikia() {
    buton.classList.toggle('rodo')
}

// spalvos
//#FFFFFF budas
let boxes = document.querySelectorAll('.box > div')
let colores;

function changeColores() {
    for (i = 0; i < boxes.length; i++) {
        colores = '#' + Math.random().toString(16).substr(-6)
        boxes[i].style.backgroundColor = colores;
        boxes[i].innerHTML = colores
    }
}

// rgb budas

// const deze1 = document.querySelector('.box1')
// const deze2 = document.querySelector('.box2')
// const deze3 = document.querySelector('.box3')
// const deze4 = document.querySelector('.box4')

// function rand() {
//     return Math.floor(Math.random() * 256)
// };

// function randomColor() {
//     return `rgb(${rand()}, ${rand()}, ${rand()})`;
// };

// function changeColores() {
//     deze1.style.backgroundColor = randomColor();
//     deze2.style.backgroundColor = randomColor();
//     deze3.style.backgroundColor = randomColor();
//     deze4.style.backgroundColor = randomColor();
// }

// function addText() {
//     deze1.innerHTML = randomColor()
//     deze2.innerHTML = randomColor()
//     deze3.innerHTML = randomColor()
//     deze4.innerHTML = randomColor()
// };
//  lentele

const lentele = document.querySelector('table');

function turnTableOn() {
    return lentele.classList.add('table1')
}

const info = document.querySelector('.butonai');
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
    let ageVal = document.querySelector('#amzius').value;
    let output = new Date().getFullYear() - Number.parseInt(ageVal);
    cell4.innerHTML = output;
};

let i = 0;

function buttonClick() {
    i++;
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

// istrinti lenteles eilute

function deleteEil() {
    let table = document.querySelector('.teibl');
    let rowCount = table.rows.length;
    table.deleteRow(rowCount - 1);
    i--
}

//istrinti lentele

function deleteTable() {
    document.querySelector('.bodi').innerHTML = '';
    document.querySelector('table').classList.remove('table1');
    i = 0;

}

//isvalyti input
function resetCount() {
    i = 0
    document.querySelector('#firstName').value = ''
    document.querySelector('#lastName').value = ''
    document.querySelector('#amzius').value = ''
}

// prevent eiluciu trinima

function preventRowDelete(){
    if(tekstas == displayBlanksAs()){
        return false
    }
}