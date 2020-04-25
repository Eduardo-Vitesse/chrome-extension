document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#btn').addEventListener('click', () => {
    let txt = document.querySelector('#texto').value
    document.querySelector('#result').innerHTML = upper(txt)
})

upper = (text) => {
    return text.toUpperCase()
}

})