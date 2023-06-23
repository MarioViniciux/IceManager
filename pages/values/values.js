// Repassa o valor da quantidade produzida mensalmente
function pValueMadeMonth() {
    var pValueMadeMonth = document.getElementById('quantidadeFeitaMes')

    if (!localStorage.totalValueMadeMonth) {
        localStorage.totalValueMadeMonth = 0
    } else {
        pValueMadeMonth.innerHTML = localStorage.getItem('totalValueMadeMonth')
    } 
}

function initialPage() {
    window.location.href = '../../index.html'
}

// Repassa o valor da quantidade vendida mensalmente
function pValueSoldMonth() {
    var pValueSoldMonth = document.getElementById('quantidadeVendaMes')

    if (!localStorage.totalValueSoldMonth) {
        localStorage.totalValueSoldMonth = 0
    } else {
        pValueSoldMonth.innerHTML = localStorage.getItem('totalValueSoldMonth')
    }
}

// Faz os calculos do dinheiro que foi gerado no mês
function sum() {
    var moneyMonth = document.getElementById('moneyMonth')
    var moneyDay = document.getElementById('moneyDay')

    moneyMonth.innerHTML = localStorage.getItem('moneyMonth')
    moneyDay.innerHTML = localStorage.getItem('moneyDay')
}

// Repassa o valor da quantidade produzida diariamente
function pValueMadeDay() {
    var pValueMadeDay = document.getElementById('quantidadeFeitaDia')

    if (!localStorage.totalValueMadeDay) {
        localStorage.totalValueMadeDay = 0
    } else {
        pValueMadeDay.innerHTML  = localStorage.getItem('totalValueMadeDay')
    }
}

// Repassa o valor da quantidade vendida diariamente
function pValueSoldDay() {
    var pvalueSoldDay = document.getElementById('quantidadeVendaDia')

    if (!localStorage.totalValueSoldDay) {
        localStorage.totalValueSoldDay = 0
    } else {
        pvalueSoldDay.innerHTML  = localStorage.getItem('totalValueSoldDay')
    }
}

function remain() {
    var pRemain = document.getElementById('remain')

    var quantityM = localStorage.totalMadeNoReset
    var quantityS = localStorage.totalSoldNoReset

    var quantityUntilNow = quantityM - quantityS

    pRemain.innerHTML = quantityUntilNow
}

// Executa todas as funções de exibição
function allInOne() {
    pValueMadeMonth()
    pValueSoldMonth()
    pValueMadeDay()
    pValueSoldDay()
    sum()
    remain()
}

