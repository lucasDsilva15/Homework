let body = document.querySelector('.containerbottom');
let button = document.querySelector('button');
let title = document.querySelector(".container");
let image = title.querySelectorAll("img");
let container = document.querySelector('.lightswitch')
let lightSwitch = body.querySelector('#switch')
let buttoncont = document.querySelector('.buttoncont')
let rgb = buttoncont.querySelector('button')
let emotes = body.querySelectorAll('.pepe')
let all = document.querySelector('body')

let text = 'lights on'

container.addEventListener ('click', changeLights)
function changeLights () {
    body.classList.toggle('black')
    title.classList.toggle('black')
    buttoncont.classList.toggle('black')
    all.classList.toggle('black') 
        if (text === 'lights on'){
            text = 'lights off'
            lightSwitch.src = 'Images/light-switch-off.png'
            image.forEach((element) => element.src = "Images/light-bulb-off.png")
            emotes.forEach((element) => element.src = 'Images/bedge.png')
                
        } else if (text === 'lights off'){
            text = 'lights on'
            lightSwitch.src = 'Images/light-switch-on.png'
            image.forEach((element) => element.src = "Images/light-bulb-on.png")
            emotes.forEach((element) => element.src = "Images/wokedge.png")
        }   
}
rgb.addEventListener('click', rgbLights)
function rgbLights () {
        body.classList.toggle('color0')
        title.classList.toggle('color0')
        buttoncont.classList.toggle('color0') 
        all.classList.toggle('color0')
}


