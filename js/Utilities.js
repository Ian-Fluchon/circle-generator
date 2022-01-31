"use strict"


const getRandomNumber = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

const getRandomColor = () => {

    const red = getRandomNumber(0, 255)
    const green = getRandomNumber(0, 255)
    const blue = getRandomNumber(0, 255)
    const a = Math.random()
    return `rgba( ${red},${green},${blue}, ${a})`
}