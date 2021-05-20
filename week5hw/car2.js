var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var xpos = 20
var xpos2 = 20

var speed1 = 1// Math.random() * (1 - .5) + .5;
var speed2 = 1// Math.random() * (1 - .5) + .5;

var start = 58
var finish = 956

//boolean for if game is over
var gameOver = true

//variable for image sprite 
var roxas = new Image()
roxas.src = 'Image/roxas.png'

roxas.onload = function () {
    main();
}

var sora = new Image()
sora.src = 'Image/sora.png'

sora.onload = function () {
    main();
}
//fuel variables
var startFuel = randomNumber(600, canvas.width)
var fuel = startFuel
var fullBarWidth = 512

var startFuel2 = randomNumber(600, canvas.width)
var fuel2 = startFuel2

var sec = 3
var fps = 60
var frames = fps

//adding keypresses
document.addEventListener('keydown', keyPressdown)
document.addEventListener('keyup', keyPressup)
function main() {
    //call frame
    timer = requestAnimationFrame(main)

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (gameOver) {
        ctx.fillStyle = "skyblue"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to duel", canvas.width / 2, canvas.height / 2)

    }
    else {
        if (!gameOver && sec > 0) {
            runStartTimer()
            drawStartTimer()
            console.log("working");

        }
        else {
            if (gameOver == false) {
                //update values
                
                if(fuel>0){
                    xpos+= speed1;
                    fuel--;   
                }
                if(fuel2 > 0){
                    xpos2+= speed2;
                    fuel2--;  
                }
                
                
            }



        }

    }
    //draw start and finish line
    drawStartLine()
    drawFinishLine()
    //car
    drawCar()
    drawCar2()
    drawFuelbar()
    drawFuelbar2()
    drawFuelText()
    drawFuelText2()
    //determine if gme is over
    if ((xpos > finish + 10 || fuel <= 0) && (xpos2 > finish + 10 || fuel2 <= 0)) {
        drawResults()
    }
}


function keyPressup(e) {
    console.log(e.keyCode)

    if (e.keyCode == 32) {
        //document.addEventListener("keydown", keyPressdown)


    }
}
function keyPressdown(e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        if (!gameOver && fuel <= 0 && fuel2 <=0) {
            restartgame()
        }

        gameOver = false
        // gameOver = !gameOver

        // document.removeEventListener("keydown", keyPressdown)


    }
}
function drawStartLine() {
    ctx.fillStyle = "white"
    ctx.fillRect(start, 90, 10, 500)
}
function drawFinishLine() {
    ctx.fillStyle = "black"
    ctx.fillRect(finish, 90, 10, 500)
}
function drawCar() {
    ctx.drawImage(roxas, xpos, canvas.height / 2 - 160, 50, 100)

}

function drawCar2() {
    ctx.drawImage(sora, xpos2, canvas.height / 1.5 - 130, 50, 100)

}

function drawFuelbar() {
    var barCurrentWith = fullBarWidth * (fuel / startFuel)

    ctx.fillStyle = "gray"
    ctx.fillRect(start, 30, fullBarWidth, 10)
    if (fuel > 0) {
        ctx.fillStyle = "red"
        ctx.fillRect(start, 30, barCurrentWith, 10)
    }
}

function drawFuelbar2() {
    var barCurrentWith = fullBarWidth * (fuel2 / startFuel2)

    ctx.fillStyle = "grey"
    ctx.fillRect(start, 60, fullBarWidth, 10)
    if (fuel2 > 0) {
        ctx.fillStyle = "white"
        ctx.fillRect(start, 60, barCurrentWith, 10)
    }
}
function getFuelPercentage() {
    return fuel / startFuel
}

function getFuelPercentage2() {
    return fuel2 / startFuel2
}

function drawFuelText() {
    ctx.fillStyle = "gray"
    ctx.font = "25px Arial"
    ctx.fillText(fuel, start, 25)
}

function drawFuelText2() {
    ctx.fillStyle = "gray"
    ctx.font = "25px Arial"
    ctx.fillText(fuel2, start, 60)
}

function runStartTimer() {
    frames -= 1;
    console.log(frames);
    if (frames < 0) {
        frames = fps
        sec -= 1

    }

}

function drawStartTimer() {
    ctx.fillStyle = "skyblue"
    ctx.strokeStyle = "black"
    ctx.lineWidth = "3px"
    ctx.font = "25px Arial"
    ctx.textAlign = "center "
    ctx.fillText(sec, canvas.width / 2, canvas.height / 2)
    ctx.strokeText(sec, canvas.width / 2, canvas.height / 2)

}


function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}

function drawResults() {
    if ((xpos > finish) && (xpos2 > finish)) {
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center "
        ctx.fillText(sec, canvas.width / 2, canvas.height / 2)
    } else {
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center "
        ctx.fillText(sec, canvas.width / 2, canvas.height / 2)
    }

}
function restartgame() {
    location.reload();
}