function changeTextZero() {
    var paragrafo = document.getElementById('um')

    if (!localStorage.showJanuary) {
        localStorage.showJanuary = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showJanuary')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showJanuary')
    } 
}

function changeTextOne() {
    var paragrafo = document.getElementById('dois')

    if (!localStorage.showFebruary) {
        localStorage.showFebruary = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showFebruary')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showFebruary')
    } 
}

function changeTextTwo() {
    var paragrafo = document.getElementById('três')

    if (!localStorage.showMarch) {
        localStorage.showMarch = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showMarch')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showMarch')
    } 
}

function changeTextThree() {
    var paragrafo = document.getElementById('quatro')

    if (!localStorage.showApril) {
        localStorage.showApril = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showApril')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showApril')
    } 
}

function changeTextFour() {
    var paragrafo = document.getElementById('cinco')

    if (!localStorage.showMay) {
        localStorage.showMay = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showMay')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showMay')
    } 
}

function changeTextFive() {
    var paragrafo = document.getElementById('seis')

    if (!localStorage.showJune) {
        localStorage.showJune = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showJune')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showJune')
    } 
}

function changeTextSix() {
    var paragrafo = document.getElementById('sete')

    if (!localStorage.showJuly) {
        localStorage.showJuly = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showJuly')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showJuly')
    } 
}

function changeTextSeven() {
    var paragrafo = document.getElementById('oito')

    if (!localStorage.showAugust) {
        localStorage.showAugust = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showAugust')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showAugust')
    } 
}

function changeTextEight() {
    var paragrafo = document.getElementById('nove')

    if (!localStorage.showSeptember) {
        localStorage.showSeptember = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showSeptember')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showSeptember')
    } 
}

function changeTextNine() {
    var paragrafo = document.getElementById('dez')

    if (!localStorage.showOctuber) {
        localStorage.showOctuber = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showOctuber')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showOctuber')
    } 
}

function changeTextTen() {
    var paragrafo = document.getElementById('onze')

    if (!localStorage.showNovember) {
        localStorage.showNovember = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showNovember')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showNovember')
    } 
}

function changeTextEleven() {
    var paragrafo = document.getElementById('doze')

    if (!localStorage.showDecember) {
        localStorage.showDecember = 'O valor referente ao mês ainda não foi adicionado'
        paragrafo.innerHTML = localStorage.getItem('showDecember')
    } else {
        paragrafo.innerHTML = localStorage.getItem('showDecember')
    } 
}

function initialPage() {
    window.location.href = '../../initialPage.html'
}

function executation() {
    changeTextZero()
    changeTextOne()
    changeTextTwo()
    changeTextThree()
    changeTextFour()
    changeTextFive()
    changeTextSix()
    changeTextSeven()
    changeTextEight()
    changeTextNine()
    changeTextTen()
    changeTextEleven()
}
