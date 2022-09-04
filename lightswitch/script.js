let body = document.querySelector('.containerbottom')
let button = document.querySelector('button')
let title = document.querySelector(".container")

if ( body.classList != 'black'){
    button.addEventListener ('click', changeLights)
        function changeLights () {
            body.classList.toggle('black')
            title.classList.toggle('black') 
            button.textContent = 'lights on'         
}
}else if (body.classList = 'black'){
    button.addEventListener ('click', changeDark)
        function changeDark () {
            body.classList.toggle('black')
            title.classList.toggle('black')
            button.textContent = 'lights off'
}

}
console.log(button.textContent)