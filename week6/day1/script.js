var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

function randomRange(high, low) {
    return Math.random() * (high - low) + low
}
var gravity = 1
var friction = 0.9

var dogeImg = new Image()
dogeImg.src = "image/doge.png"
dogeImg.onload =function(){
main()
}

function Gameobject() {
    this.radius = randomRange(10, 2)
    this.color = `rgb(${randomRange(0, 255)},${randomRange(0, 255)},${randomRange(0, 255)})`//"yellow"
    this.x = canvas.width * 0.5//randomRange(canvas.width, 0)
    this.y = canvas.height * 0.5//randomRange(canvas.height, 0);
    this.vx = randomRange(30, -30);
    this.vy = randomRange(30, -30);

    this.drawCircle = function () {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
    }

    this.drawSquare = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius)
    }

    this.drawSprite = function(){
        ctx.drawImage(dogeImg, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius)
    }

    //this method handles the movement
    this.move = function () {
        //this.x += friction
        //this.y += fiction

        this.x += this.vx
        this.y = + this.vy

        if (this.y > canvas.height - this.radius) {
            //this line resest the particles position
            //this.y = -this.radius

            //this surew that the gameobject dosent leave the screen
            this.y = canvas.height - this.radius;

            this.vy = -this.vy * friction

        }
        if (this.x < this.radius) {
            this.x = this.radius
            this.vx = -this.vx * friction

            
        }

        if (this.x > canvas.width - this.radius) {
            this.x = canvas.width - this.radius
            this.vx = -this.vx * friction
        }
    }
}




//var particle = new Gameobject()

//particle.drawCircle()

//create an arrey of particles
var particles = []

var numParticles = 10
var timer = requestAnimationFrame(main)

//four loop
for (var i = 0; i < numParticles; i++) {
    particles[i] = new Gameobject();
    particles[i].drawCircle()
}

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (var i = 0; i < particles.length; i++) {
        //particles[i].y += 1
        particles[i].vy += gravity

        particles[i].move()
        //particles[i].drawSquare()
        particles[i].drawSprite()
    }
    timer = requestAnimationFrame(main)


}