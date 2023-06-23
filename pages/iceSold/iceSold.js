const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")
const buttonSubmit = document.getElementById("submitSoldBotton")

// Validação de se há algum numero digitado, se não houver, o botão de envio não é liberado.
const validateInput = () => {
    var valueSoldLenght = document.getElementById('valueSold').value.length
    var valueAmountLenght = document.getElementById('valueSoldAmount').value.length

    if (valueSoldLenght > 0 && valueAmountLenght > 0) {
        buttonSubmit.removeAttribute('disabled')
    } else if (valueSoldLenght == 0 || valueAmountLenght == 0) {
        buttonSubmit.setAttribute('disabled', '')
    }
}

// Verificação de se há valor armazenado no localStorage, se não houver, é iniciado com 0.
if (!localStorage.totalValueSoldMonth) {
    var totalValueSoldMonth = 0
} else {
    var totalValueSoldMonth = localStorage.totalValueSoldMonth
}

if (!localStorage.totalValueSoldDay) {
    var valueSoldDay = 0
} else {
    var valueSoldDay = localStorage.totalValueSoldDay
}

if (!localStorage.moneyMonth) {
    var totalMoneyMonth = 0
} else {
    var totalMoneyMonth = localStorage.moneyMonth
}

if (!localStorage.moneyDay) {
    var totalMoneyDay = 0
} else {
    var totalMoneyDay = localStorage.moneyDay
}

if (!localStorage.totalSoldNoReset) {
    var totalSoldNoReset = 0
} else {
    var totalSoldNoReset = localStorage.totalSoldNoReset
}
// Pega o valor do input e adiciona ao localStorage
function getValue() {
    var inputValueSold  = document.getElementById('valueSold').valueAsNumber
    var inputValueSoldAmount = document.getElementById('valueSoldAmount').valueAsNumber //total vendido por 4 reias
    totalValueSoldMonth = parseInt(totalValueSoldMonth) + parseInt(inputValueSold)
    totalSoldNoReset = parseInt(totalSoldNoReset) + parseInt(inputValueSold)
    valueSoldDay = parseInt(valueSoldDay) + parseInt(inputValueSold)
    var totalValueSoldUniq =  parseInt(inputValueSold) - parseInt(inputValueSoldAmount) //total vendido por 5 reias
    localStorage.totalValueSoldMonth = totalValueSoldMonth
    localStorage.totalValueSoldDay = valueSoldDay
    localStorage.totalSoldNoReset = totalSoldNoReset

    //abrindo o modal
    modal.show()

    // Faz os calculos dos valores vendidos e adiciona no localStorage
    var fiveReiasSold = parseInt(totalValueSoldUniq) * 5
    var fourReiasSold = parseInt(inputValueSoldAmount) * 4
    var money = parseInt(fourReiasSold) + parseInt(fiveReiasSold)
    totalMoneyMonth = parseInt(totalMoneyMonth) + parseInt(money)
    totalMoneyDay = parseInt(totalMoneyDay) + parseInt(money)
    localStorage.moneyMonth = totalMoneyMonth
    localStorage.moneyDay = totalMoneyDay
}

// Retorna a pessoa para a pagina inicial após fechar o modal.
function initialPage() {
    modal.close()
    window.location.href = '../../initialPage.html'
}
