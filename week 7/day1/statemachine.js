//setup canvas
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main);
var gameStates = []
var currentStates = 0
var x = 10
var gameOver = true

// setup keypresses
document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

function keyPressDown(e) {
    console.log(e.keyCode)
}

function keyPressUp(e) {
    console.log(e.keyCode)
    if (gameOver == true) {
        if (e.keyCode == 32) {
            changeState()
        }
    }
}

function changeState() {
    if (currentStates >= gameStates.length - 1) {

        currentStates = 0
    }
    else {
        currentStates++
    }
}
//States of our gameStates  States Machine
gameStates[0] = function () {
    ctx.fillStyle = "purple"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "cyan"
    ctx.textAlign = "center"
    ctx.font = "30px Arial"
    ctx.fillText("Untitled HTML Game", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15px Arial"
    ctx.fillText("Press Spacebar To Start ", canvas.width / 2, canvas.height / 2 + 15)
}

gameStates[1] = function () {
    gameOver = false
    ctx.fillStyle = "purple"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "cyan"
    ctx.fillRect(x, canvas.height / 2, 100, 50)
    x += 5

    if (x > 600) {
        x = 10
        gameOver = true
        currentStates++

    }
}

gameStates[2] = function () {
    ctx.fillStyle = "purple"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "cyan"
    ctx.textAlign = "center"
    ctx.font = "30px Arial"
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15px Arial"
    ctx.fillText("Press Spacebar for Main Menu ", canvas.width / 2, canvas.height / 2 + 15)
  
}

function main() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.Width, canvas.height)

    gameStates[currentStates]()
    //call main function
    timer = requestAnimationFrame(main)
}
