let body = document.querySelector('.containerbottom');
let button = document.querySelector('button');
let title = document.querySelector(".container");
let image = title.querySelectorAll("img");
let container = document.querySelector('.lightswitch')
let lightSwitch = body.querySelector('img')

let text = 'lights off';
    container.addEventListener ('click', changeLights)
        function changeLights () {
            body.classList.toggle('black')
            title.classList.toggle('black')  
            if (text === 'lights off'){
                text = 'Lights on'
                lightSwitch.src = 'Images/light-switch-off.png'
                image.forEach((element) => element.src = "Images/light-bulb-on.png"
                )
                
            } else {
                text = 'lights off'
                lightSwitch.src = 'Images/light-switch-on.png'
                image.forEach((element) => element.src = "Images/light-bulb-off.png"
                )
            }   
        }
