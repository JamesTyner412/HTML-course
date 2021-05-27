var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
var numAsteroids = 10
var asteroids = new Array()
var gameOver = true
var gameStates = []
var currentStates = 0
var score = 0
var highScore = 0

var numOrb = 1
var orb = new Array()
var final = false

var roxas = new Image()
roxas.src = "images/roxas.png"
roxas.onload = function () {
    main()
}

var goldflame = new Image()
goldflame.src = "images/goldflame.png"
goldflame.onload = function () {
    main()
}

var redflame = new Image()
redflame.src = "images/redflame.png"
redflame.onload = function () {
    main()
}

var heartless = new Image()
heartless.src = "images/heartless.png"
heartless.onload = function () {
    main()
}

var lost = new Image()
lost.src = "images/lost.gif"
lost.onload = function () {
    main()
}

var kh2 = new Image()
kh2.src = "images/kh2.jpeg"
kh2.onload = function () {
    main()
}

var sphere = new Image()
sphere.src = "images/sphere.png"
sphere.onload = function () {
    main()
}
var soraheart = new Image()
soraheart.src = "images/soraheart.png"
soraheart.onload = function () {
    main()
}

function randomRange(high, low) {
    return Math.random() * (high - low) + low
}
function gameStart() {
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid()

    }
    for (var i = 0; i < numOrb; i++) {
        orb[i] = new PowerUp()
    }
    ship = new PlayerShip()
}

//astroid class
function Asteroid() {
    this.radius = randomRange(50, 40)
    this.x = randomRange(canvas.width - this.radius, this.radius) - canvas.width
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vx = randomRange(-10, -5)
    this.color = "rgba(255,255,255,0)"

    this.drawAsteroid = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius / 2, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.drawImage(heartless, this.x - (this.radius / 2), this.y - (this.radius / 2), this.radius, this.radius)
        ctx.restore()
    }
}
function PowerUp() {
    this.radius = randomRange(50, 40)
    this.x = randomRange(canvas.width - this.radius, this.radius) - canvas.width
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vx = randomRange(-10, -5)
    this.color = "pink"

    this.drawPowerUp = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius / 2, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.drawImage(sphere, this.x - (this.radius / 2), this.y - (this.radius / 2), this.radius, this.radius)
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
        if (e.keyCode == 83) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 65) {
            ship.down = true
        }

    }

    if (gameOver) {

        if (e.keyCode == 32) {
            if (currentStates == 2) {
                currentStates = 0
                numAsteroids = 10
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
                final = false
            }
        }
    }
}

function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 83) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 65) {
            ship.down = false
        }
    }
}


//constunction function
function PlayerShip() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.w = 15
    this.h = 15
    this.vx = 45
    this.vy = 45
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = true

    this.drawShip = function () {
        ctx.save()
        ctx.translate(this.x, this.y)

        if (this.up || this.left || this.right) {
            ctx.save()
            //change
            if (this.flamelength == true) {
                this.flamelength = false
                ctx.drawImage(goldflame, -80, -40, 130, 75)
            } else {
                this.flamelength = true
                ctx.drawImage(redflame, -80, -40, 130, 75)
            }
            ctx.restore()
        }

        //SHIP
        ctx.fillStyle = "rgba(255,255,255,0)"
        ctx.beginPath()
        ctx.moveTo(-10, 10)
        ctx.lineTo(-10, -10)
        ctx.lineTo(10, 0)
        ctx.lineTo(-10, 10)
        ctx.closePath()
        ctx.fill()
        ctx.drawImage(roxas, -35, -25, 50, 50)
        ctx.restore()
    }

    this.move = function () {
        this.x += this.vx
        this.y += this.vy

        //bottom bottom 
        if (this.y > canvas.height - this.h / 2) {
            this.y = canvas.height - this.h / 2
            this.vy = 0
        }
        //bottom top
        if (this.y < this.h / 2) {
            this.y = this.h / 2
            this.vy = 0
        }//bottom right
        if (this.x > canvas.width - this.w / 2) {
            this.x = canvas.width - this.w / 2
            this.vx = 0
        }
        //bottom left
        if (this.x < this.w / 2) {
            this.x = this.w / 2
            this.vx = 0
        }
    }


}
//game screen
gameStates[0] = function () {
    //ctx.drawImage(heart, 0, 0, 1000, 800)

    ctx.save()
    ctx.drawImage(kh2, -100, 0, 1200, 800)
    ctx.font = "60px Arial"
    ctx.fillStyle = "gray"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 3
    ctx.textAlign = "center"
    ctx.fillText("Heartless Avoider", canvas.width / 2, canvas.height / 2 +40)
    ctx.strokeText("Heartless Avoider", canvas.width / 2, canvas.height / 2 +40)
    ctx.fillStyle = "white"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.font = "30px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Press Space to Get moving", canvas.width / 2, canvas.height / 2 +90)    
    ctx.strokeText("Press Space to Get moving", canvas.width / 2, canvas.height / 2 +90)    
    ctx.restore()
}
//game screen
gameStates[1] = function () {

    ctx.save()
    ctx.drawImage(soraheart, 0, 0, canvas.width, canvas.height)
    ctx.font = "15px Arial"
    ctx.fillStyle = "red"
    ctx.fillText("score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //vertical movment
    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 0
    }

    //horizontal movment
    if (ship.left) {
        ship.vy = 10
    } else if (ship.right) {
        ship.vx = 10
    } else {
        ship.vx = -4


    }
    //loops through all asteroids and check the position
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.h / 2 + asteroids[i].radius))) {
            console.log(" hit asteroid")
            if (final == false) {
                gameOver = true
                currentStates = 2
                main()
            }
        }


        if (asteroids[i].x < 0 - asteroids[i].radius) {
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


//Orb
for (var i = 0; i < orb.length; i++) {
    var dX = ship.x - orb[i].x
    var dY = ship.y - orb[i].y
    var distance = Math.sqrt((dX * dX) + (dY * dY))

    if (detectCollision(distance, (ship.h / 2 + orb[i].radius))) {
        console.log("hit powerup")
        orb[i].x = randomRange(canvas.width - orb[i].radius, orb[i].radius) + canvas.width
        orb[i].y = randomRange(canvas.height - orb[i].radius, orb[i].radius)
        if (final == false) {
            setInvincible()
        }
    }
    if (orb[i].x < 0 - orb[i].radius) {
        orb[i].x = randomRange(canvas.width - orb[i].radius, orb[i].radius) + canvas.width
        orb[i].y = randomRange(canvas.height - orb[i].radius, orb[i].radius)
    }


if (!gameOver) {
    orb[i].x += orb[i].vx
    orb[i].drawPowerUp()
}
while (orb.length < numOrb) {
    orb.push(new PowerUp())
}
}
}

//gameOver
gameStates[2] = function () {
    if (score > highScore) {
        highScore = score
        ctx.save()
       // ctx.drawImage(lost, 0, 0, canvas.width, canvas.height)
        ctx.font = "30px Times New Roman"
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
    return distance + 5 < calcDistance
}
function setInvincible() {
    if (final == false) {
        final = true
        setTimeout(setInvincible, 5000)
        console.log(final)
    } else {
        final = false
        console.log(final)
    }
}
//timer for score
function scoreTimer() {
    if (!gameOver) {
        score++
        //using modulus that returns the remainder of a decimal
        //check to see if remainder is divisble by 5 
        if (score % 5 == 0) {
            numAsteroids += 2
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000)
    }
}

