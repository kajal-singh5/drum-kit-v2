const bassDrum = document.querySelector(".bass-drum");
bassDrum.addEventListener('click', function () {
    let fileLocation = "./sounds/bass-drum/bass-" + (Math.floor( Math.random() * 5 ) + 1) + ".mp3";
    const audio = new Audio(fileLocation);
    audio.play();
})

const cymbal = document.querySelector(".cymbal");
cymbal.addEventListener('click', function () {
    let fileLocation = "./sounds/cymbal/cymbal-" + (Math.floor( Math.random() * 3 ) + 1) + ".mp3";
    const audio = new Audio(fileLocation);
    audio.play();
})

const floorTom = document.querySelector(".floor-tom");
floorTom.addEventListener('click', function () {
    let fileLocation = "./sounds/floor-tom/floor-tom-" + (Math.floor( Math.random() * 4 ) + 1) + ".mp3";
    const audio = new Audio(fileLocation);
    audio.play();
})

const hiHat = document.querySelector(".hi-hats");
hiHat.addEventListener('click', function () {
    let fileLocation = "./sounds/hi-hat/hi-hat-" + (Math.floor( Math.random() * 4 ) + 1) + ".mp3";
    const audio = new Audio(fileLocation);
    audio.play();
})

const hiTom = document.querySelector(".high-tom");
hiTom.addEventListener('click', function () {
    let fileLocation = "./sounds/hi-tom/hi-tom-" + (Math.floor( Math.random() * 4 ) + 1) + ".mp3";
    const audio = new Audio(fileLocation);
    audio.play();
})

const medTom = document.querySelector(".med-tom");
medTom.addEventListener('click', function () {
    let fileLocation = "./sounds/med-tom/med-tom-" + (Math.floor( Math.random() * 4 ) + 1) + ".mp3";
    const audio = new Audio(fileLocation);
    audio.play();
})

const snare = document.querySelector(".snare-drum");
snare.addEventListener('click', function () {
    let fileLocation = "./sounds/snare-drum/snare-drum-" + (Math.floor( Math.random() * 5 ) + 1) + ".mp3";
    const audio = new Audio(fileLocation);
    audio.play();
})