function showMade() {
    window.location.href = "pages/iceMade/iceMade.html";
}

function showSold() {
    window.location.href = 'pages/iceSold/iceSold.html';
}

function showHistoric() {
    window.location.href = 'pages/historic/historic.html';
}

function showValues() {
    window.location.href = 'pages/values/values.html';
}

function resetMonth() {
    var data = new Date
    var month = data.getMonth()
    var prod = localStorage.getItem('totalValueMadeMonth')
    var vend = localStorage.getItem('totalValueSoldMonth')
    var dinh = localStorage.getItem('moneyMonth')

    let saveValuesMonths = []

    if (!localStorage.month) {
        localStorage.month = month
    } else if (localStorage.month != month) {
        var months = [
            ['Mês: ' + localStorage.month + ', Produzido: ' + prod + ', Vendido: ' + vend + ', Dinheiro: ' + dinh]
        ]

        if (month === 1) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showJanuary = saveValuesMonths
        } else if (month === 2) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showFebruary = saveValuesMonths
        } else if (month === 3) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showMarch = saveValuesMonths
        } else if (month === 4) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showApril = saveValuesMonths
        } else if (month === 5) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showMay = saveValuesMonths
        } else if (month === 6) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showJune = saveValuesMonths
        } else if (month === 7) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showJuly = saveValuesMonths
        } else if (month === 8) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showAugust = saveValuesMonths
        } else if (month === 9) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showSeptember = saveValuesMonths
        } else if (month === 10) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showOctuber = saveValuesMonths
        } else if (month === 11) {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showNovember = saveValuesMonths
        } else {
            saveValuesMonths = [...saveValuesMonths, months]
            localStorage.showDecember = saveValuesMonths
        }

        localStorage.removeItem('totalValueMadeMonth')
        localStorage.removeItem('totalValueSoldMonth')
        localStorage.removeItem('moneyMonth')
        
        localStorage.month = month
    }
    
    return saveValuesMonths
}

function resetDay(saveValueMadeDay) {
    var data = new Date
    var day = data.getDate()

    if (!localStorage.day) {
        localStorage.day = day
    } else if (localStorage.day != day) {
        localStorage.day = day

        valuesDays = [['Produzido: ' + localStorage.getItem('totalValueMadeDay') + ', Vendido: ' + localStorage.getItem('totalValueSoldDay')]]
        saveValuesDays = valuesDays.join(['/'])

        localStorage.totalValueMadeDay = 0
        localStorage.totalValueSoldDay = 0
        localStorage.moneyDay = 0
    }
}

function resetAll() {
    resetDay()
    resetMonth()
}
