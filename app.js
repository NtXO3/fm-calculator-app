let sumQuery = null
let ans = false
let theme = 1

const calcButtons = document.querySelectorAll('.calculator__btn')
const resultEl = document.querySelector('.calculator__result')
const themeButtonEl = document.querySelector('.theme__selector--btn')

calcButtons.forEach(item => {
    item.addEventListener('click', () => handleInput(item))
})

function handleInput(item) {
    if (item.id === 'sum') {
        console.log('sum btn')
        handleResult(sumQuery)
        return
    }
    if (item.id === 'delete') {
        sumQuery = sumQuery.slice(0, sumQuery.length - 1)
        resultEl.textContent = sumQuery
        return
    }
    if (item.id === 'reset') {
        console.log('reset btn')
        sumQuery = ''
        resultEl.textContent = sumQuery
        return
    }
    if (item.textContent === 'x') {
        sumQuery ? sumQuery += '*' : sumQuery = '*'
        resultEl.textContent = sumQuery
        return
    }

    sumQuery ? sumQuery += item.textContent : sumQuery = item.textContent

    resultEl.textContent = sumQuery
    
    console.log(sumQuery)
    ans = false
}

async function handleResult(query) {
    ans = true 
    try {
        sumQuery = eval(query)
        resultEl.textContent = sumQuery
    }
    catch (err) {
        console.log(err)
        sumQuery = ''
        resultEl.textContent = 'SYNTAX ERROR'
    }    
}

const handleTheme = () => {
    if (theme === 3) {
        themeButtonEl.style.left = '10%'
        themeButtonEl.style.transform = "translateX(-10%)"
        theme = 1
        document.body.classList = `theme-${theme}`
        return
    }
    theme += 1
    console.log(theme)
    themeButtonEl.style.left = `${10 + (theme - 1) * 35}%`
    themeButtonEl.style.transform = `translateX(${10 + (theme - 1) * 40 * -1}%)`
    document.body.classList = `theme-${theme}`
}

themeButtonEl.addEventListener('click', handleTheme)