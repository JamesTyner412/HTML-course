var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var xpos = 20

var start = 50
var finish = 750

//boolean for if game is over
var gameOver = true

//variable for image sprite 
var mario = new Image()
mario.src = 'Image/mario.png'

mario.onload = function () {
    main();
}
//fuel variables
var startFuel = randomNumber(600, canvas.width)
var fuel = startFuel
var fullBarWidth = 300

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
        ctx.fillStyle = "black"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2)

    }
    else {
        if (!gameOver && sec > 0) {
            runStartTimer()
            drawStartTimer()
            console.log("working");

        }
        else {
            if (gameOver == false && fuel > 0 && sec <= 0) {
                //update values
                xpos++;
                fuel--;
            }



        }

    }
        //draw start and finish line
        drawStartLine()
        drawFinishLine()
        //car
        drawCar()
        drawFuelbar()
        drawFuelText()
        //determine if gme is over
        if(xpos > finish + 10 || fuel <=0){
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
            if(!gameOver && fuel <=0){
                restartgame()
            }

            gameOver = false
            // gameOver = !gameOver

            // document.removeEventListener("keydown", keyPressdown)


        }
    }
    function drawStartLine() {
        ctx.fillStyle = "black"
        ctx.fillRect(start, 50, 10, 500)
    }
    function drawFinishLine() {
        ctx.fillStyle = "black"
        ctx.fillRect(finish, 50, 10, 500)
    }
    function drawCar() {
        ctx.drawImage(mario, xpos, canvas.height / 2 - 30, 30, 50)

    }

    function drawFuelbar() {
        var barCurrentWith = fullBarWidth * (fuel / startFuel)

        ctx.fillStyle = "black"
        ctx.fillRect(start, 30, fullBarWidth, 10)
        if (fuel > 0) {
            ctx.fillStyle = "red"
            ctx.fillRect(start, 30, barCurrentWith, 10)
        }
    }
    function getFuelPercentage() {
        return fuel / startFuel
    }

    function drawFuelText() {
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.fillText(fuel, start, 25)
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
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center "
        ctx.fillText(sec, canvas.width / 2, canvas.height / 2)
}

function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}

function drawResults() {
    if (xpos > finish) {
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
function restartgame(){
    location.reload();
    
}