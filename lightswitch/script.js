let body = document.querySelector('.containerbottom');
let button = document.querySelector('button');
let title = document.querySelector(".container");
let image = title.querySelectorAll("img");
let container = document.querySelector('.lightswitch')
let lightSwitch = body.querySelector('img')
let buttoncont = document.querySelector('.buttoncont')
let rgb = buttoncont.querySelector('button')

let text = 'lights on';

container.addEventListener ('click', changeLights)
function changeLights () {
    body.classList.toggle('black')
    title.classList.toggle('black')
    buttoncont.classList.toggle('black')  
        if (text === 'lights on'){
            text = 'lights off'
            lightSwitch.src = 'Images/light-switch-off.png'
            image.forEach((element) => element.src = "Images/light-bulb-off.png", 
            element.alt = "light bulb off" )
                
        } else if (text === 'lights off'){
            text = 'lights on'
            lightSwitch.src = 'Images/light-switch-on.png'
            image.forEach((element) => element.src = "Images/light-bulb-on.png")
        }   
}
rgb.addEventListener('click', rgbLights)
function rgbLights () {
    if (text === 'lights on' || 'lights off'){
        body.classList.toggle('color0')
        title.classList.toggle('color0')
        buttoncont.classList.toggle('color0') 
    }
}


