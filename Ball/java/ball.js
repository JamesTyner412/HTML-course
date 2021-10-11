var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var timer
var interval = 1000 / 60
var ball = new Ball()

timer = setInterval(animate, interval)

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    ball.x += ball.vx
    ball.y += ball.vy


    if(ball.x > canvas.width - ball.radius || ball.x -ball.radius < 0)
	{
		ball.vx = -ball.vx;	
	}
    if(ball.y > canvas.height - ball.radius || ball.y -ball.radius < 0)
	{
		ball.vy = -ball.vy;	
	}
    ball.draw()
}
