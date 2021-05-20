var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
var numAsteroids = 20
var asteroids = new Array()
var gameOver = true
var gameStates = []
var currentStates = 0
var score = 0
var highScore = 0



function randomRange(high, low) {
    return Math.random() * (high - low) + low
}
function gameStart() {
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid()

    }
    ship = new PlayerShip()
}

//astroid class
function Asteroid() {
    this.radius = randomRange(15, 2)
    this.x = randomRange(canvas.width - this.radius, this.radius)- canvas.height
    this.y = randomRange(canvas.height - this.radius, this.radius)- canvas.height
    this.vx = randomRange(-10, -5)
    this.color = " white"

    this.drawAsteroid = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
}


//setup keybord event 
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
            ship.down = true
        }

    }

    if (gameOver) {

        if (e.keyCode == 32) {
            if (currentStates == 2) {
                currentStates = 0
                numAsteroids = 20
                asteroids = []
                score = 0
                gameStart()
                main()
            }

            else {
                gameStart()
                currentStates = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")
            }
        }
    }
}

function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
            ship.down = false
        }
    }
}


//constunction function
function PlayerShip() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.w = 20
    this.h = 20
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 40

    this.drawShip = function () {
        ctx.save()
        ctx.translate(this.x, this.y)
        if (this.up || this.left || this.right) {
            ctx.save()
            //change
            if (this.flamelength == 40) {
                this.flamelength = 20
            } else {
                this.flamelength = 40
            }

            ctx.beginPath()
            ctx.fillStyle = "Purple"
            ctx.moveTo(0, this.flamelength)
            ctx.lineTo(5, 5)
            ctx.lineTo(-5, 5)
            ctx.lineTo(0, this.flamelength)
            ctx.closePath()
            ctx.fill()
            ctx.restore()

        }

        ctx.fillStyle = "lime"
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

    this.move = function () {
        this.x += this.vx
        this.y += this.vy

        //bottom boundary 
        if (this.y > canvas.height - this.h / 2) {
            this.y = canvas.height - this.h / 2
            this.vy = 0
        }
        //bottom boundary 
        if (this.y < this.h / 2) {
            this.y = this.h / 2
            this.vy = 0
        }//bottom boundary 
        if (this.x > canvas.height - this.h / 2) {
            this.x = canvas.height - this.h / 2
            this.vx = 0
        }
        //bottom boundary 
        if (this.x < this.h / 2) {
            this.x = this.h / 2
            this.vx = 0
        }
    }


}
//game screen
gameStates[0] = function () {

    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "red"
    ctx.textAlign = "center"
    ctx.fillText("Asteroids Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Press Space to Get moving", canvas.width / 2, canvas.height / 2 + 20)
    ctx.restore()
}
//game screen
gameStates[1] = function () {

    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "red"
    ctx.fillText("score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //vertical movment
    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 3
    }

    //horizontal movment
    if (ship.left) {
        ship.vx = -3
    } else if (ship.right) {
        ship.vx = 3
    } else {
        ship.vx = 0


    }
    //loops through all asteroids and check the position
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt(dX * dX) + (dY * dY)

        if (detectCollision(distance, (ship.h / 2 + asteroids[i].radius))) {
            console.log(" hit asteroid")
            gameOver = true
            currentStates = 2
            main()
        }


        if (asteroids[i].x < + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) + canvas.width
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) 
        }
        if (!gameOver) {
            asteroids[i].x += asteroids[i].vx
            asteroids[i].drawAsteroid()
        }

    }

    if (!gameOver) {
        ship.move()
        ship.drawShip()
    }

    while (asteroids.length < numAsteroids) {
        asteroids.push(new Asteroid())
    }
}

//gameOver
gameStates[2] = function () {
    if (score > highScore) {
        highScore = score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your highscore was: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
        ctx.fillText("your new highscore is: " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.fillText("new High score", canvas.width / 2, canvas.height / 2)
        ctx.font = "15px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to redeem yourself", canvas.width / 2, canvas.height / 2 + 20)
        ctx.restore()
    } else {
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your highscore: " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
        ctx.fillText("your new highscore is: " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.fillText("new High score", canvas.width / 2, canvas.height / 2)
        ctx.font = "15px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to redeem yourself", canvas.width / 2, canvas.height / 2 + 20)
        ctx.restore()

    }


}


function main() {
    //clear canvas
    //shipY-=1
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    gameStates[currentStates]()

    if (!gameOver) {
        timer = requestAnimationFrame(main)
    }
}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}
//timer for score
function scoreTimer() {
    if (!gameOver) {
        score++
        //using modulus that returns the remainder of a decimal
        //check to see if remainder is divisble by 5 
        if (score % 5 == 0) {
            numAsteroids += 25
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000)
    }
}
