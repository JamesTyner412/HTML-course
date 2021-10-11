var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var timer
var interval = 1000 / 60
var ball = new Ball()

timer = setInterval(animate, interval)

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    ball.x += 1
    ball.draw()
}
