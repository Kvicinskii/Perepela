let link = document.querySelector(".burger-link")
let popup = document.querySelector(".burger_nav-link")
let close = document.querySelector(".modal-close")



link.addEventListener('click' , function(evt) {
    evt.preventDefault()
    console.log('клик по ссылке')
    popup.classList.add('modal-show')
})

close.addEventListener('click' , function(evt) {
    evt.preventDefault()
    console.log('клик по ссылке')
    popup.classList.remove('modal-show')
})


/* форма */

let link1 = document.querySelector(".btn")
let popup1 = document.querySelector(".burger_form")
let close1 = document.querySelector(".modal_close")

link1.addEventListener('click' , function(evt) {
    evt.preventDefault()
    console.log('клик по ссылке')
    popup1.classList.add('modal_show')
})

close1.addEventListener('click' , function(evt) {
    evt.preventDefault()
    console.log('клик по ссылке')
    popup1.classList.remove('modal_show')
})

/* поиск */

let link2 = document.querySelector(".link_scr")
let popup2 = document.querySelector(".src")
let close2 = document.querySelector(".close")

link2.addEventListener('click' , function(evt) {
    evt.preventDefault()
    console.log('клик по ссылке')
    popup2.classList.add('modal_show')
})

close2.addEventListener('click' , function(evt) {
    evt.preventDefault()
    console.log('клик по ссылке')
    popup2.classList.remove('modal_show')
})
