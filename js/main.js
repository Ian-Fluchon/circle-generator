"use strict"

/*************************************************************************/
/**************************** VARIABLES **********************************/
/*************************************************************************/

let canvas;
let context;


/*************************************************************************/
/**************************** FONCTIONS **********************************/
/*************************************************************************/

const pointerPosition = (e)=> {
        const offset = canvas.getBoundingClientRect()

        const styles = window.getComputedStyle(canvas)
       
        const xCursor = e.clientX -offset.left - parseInt(styles.borderLeftWidth)
        const yCursor = e.clientY -offset.top - parseInt(styles.borderTopWidth)

        const location = {
            x: xCursor,
            y: yCursor
        }
        return location
}


const drawCercle = (x,y) => {
    context.beginPath();
    const radius = getRandomNumber(10, 50)
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = getRandomColor();
    context.fill();
}

/*************************************************************************/
/**************************** EXECUTION **********************************/
/*************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    
    
    canvas.addEventListener('click', (e) => {

        
        const cursorPosition = pointerPosition(e);
        
        drawCercle(cursorPosition.x, cursorPosition.y)
    })

})