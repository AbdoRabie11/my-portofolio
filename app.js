
const porItems = document.querySelectorAll('.port-item')

porItems.forEach(i => {
    i.addEventListener('click', () => {
        i.classList.remove('collapse')
        i.classList.remove('show')
    })
})

