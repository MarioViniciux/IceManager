const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")
const buttonSubmit = document.getElementById('submitValueButton')

// Validação de se há algum numero digitado, se não houver, o botão de envio não é liberado.
const validateInput = () => {
    var valueLenght = document.getElementById('valueMade').value.length

    if (valueLenght > 0) {
        buttonSubmit.removeAttribute('disabled')
    } else if (valueLenght == 0) {
        buttonSubmit.setAttribute('disabled', '')
    }
}
 
// Verificação de se há valor armazenado no localStorage, se não houver, é iniciado com 0.
if (!localStorage.totalValueMadeMonth) {
    var totalValueMadeMonth = 0
} else {
    var totalValueMadeMonth = localStorage.totalValueMadeMonth
}

if (!localStorage.totalValueMadeDay) {
    var saveValueMadeDay = 0
} else {
    var saveValueMadeDay = localStorage.totalValueMadeDay
}

if (!localStorage.totalMadeNoReset) {
    var totalMadeNoReset = 0
} else {
    var totalMadeNoReset = localStorage.totalMadeNoReset
}

// Pega o valor do input, e abre o modal.
function getValue() {
    var inputValueMade = document.getElementById('valueMade').valueAsNumber
    saveValueMadeDay = parseInt(saveValueMadeDay) + parseInt(inputValueMade)
    totalValueMadeMonth = parseInt(totalValueMadeMonth) + parseInt(inputValueMade)
    totalMadeNoReset = parseInt(totalMadeNoReset) + parseInt(inputValueMade)
    localStorage.totalValueMadeMonth = totalValueMadeMonth
    localStorage.totalValueMadeDay = saveValueMadeDay
    localStorage.totalMadeNoReset = totalMadeNoReset
    
    modal.show()

    return saveValueMadeDay
}

// Retorna a pessoa para a pagina inicial após fechar o modal.
function initialPage() {
    modal.close()
    window.location.href = '../../index.html'
}
