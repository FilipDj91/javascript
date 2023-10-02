

function showTemperature()

{

let randomNum = Math.round(Math.random() * 80 - 35);
document.querySelector('.temperature').innerHTML=`${randomNum}	°C`;


if(randomNum > 40) {document.body.style.background = '#FF4D00'

}
else if (randomNum > 20) {
document.body.style.background = '#FFBD00'


}

}

