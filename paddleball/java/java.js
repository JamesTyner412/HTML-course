var canvas;
var context;
var interval
var timer;
var paddle;
var ball;
var frictionX = .99;
var frictionY = .99;
var gravity = 1;
var force;
var score
var p1S = 0
var color


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

interval = 1000 / 60
timer = setInterval(animate, interval);

paddle = new GameObject();
paddle.x = canvas.width /2 
paddle.y = 750
paddle.width = 250
paddle.height = 45

ball = new GameObject();
ball.width = 85
ball.height= 85
ball.vx = 0
ball.vy = 1
ball.force = 5;

score = new GameObject()





function animate() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (ArrowLeft) {
        paddle.vx +=  paddle.ax * - paddle.force;

    }
    if (ArrowRight) {
        paddle.vx +=  paddle.ax * paddle.force;
    }
    
    paddle.vx *= frictionX;
    paddle.x += paddle.vx;

   
    if(paddle.x + paddle.width > canvas.width + paddle.width/2)
    {
        paddle.x = canvas.width - paddle.width /2
    }

    if( paddle.x < 0 + paddle.width/2 )
    {
        paddle.x = 0 + paddle.width/2
    }

    ball.vx *= frictionX
    ball.vy *= frictionY
    ball.vy += gravity

    ball.x += ball.vx
    ball.y += ball.vy

   

    //Bottom
    if(ball.y > canvas.height - ball.width/2)
    {
        ball.y = canvas.height -ball.width/2
        ball.vy = -ball.vy
       
        p1S = 0
    }

    //Top
    if(ball.y < 0 + ball.width/2)
    {
        ball.y = 0 + ball.width/2
        ball.vy = -ball.vy

    }

    //Right
    if(ball.x > canvas.width - ball.width/2)
    {
        ball.x = canvas.width - ball.width/2
        ball.vx = -ball.vx
    }

    //Left
    if(ball.x < 0 + ball.width/2)
    {
        ball.x = 0 + ball.width/2
        ball.vx = -ball.vx

    }

    if (ball.hitTestObject(paddle)) {
        //change color

        ball.y = paddle.y - paddle.height / 2 - ball.height / 2

        //ball hits top
        ball.vy = -35//positive speed;

        if (ball.x < paddle.x - paddle.width / 3)//one sixth of the paddle's height)
        {

            ball.vx = -ball.force *5  //negative speed;
        }
        if (ball.x > paddle.x + paddle.width / 3) {

            ball.vx = ball.force *5 //positive speed;
        }

        if (ball.x < paddle.x - paddle.width / 6)//one sixth of the paddle's height)
        {

            ball.vx = -ball.force  //negative speed;
        }
        if (ball.x > paddle.x + paddle.width / 6) {

            ball.vx = ball.force  //positive speed;
        }
        p1S++
    }

    score.drawScore()
    paddle.drawRect()
    ball.drawCircle()

    context.save();
    context.beginPath()
    context.lineWidth = "1"
    context.strokeStyle = "black"
    context.moveTo(paddle.x, paddle.y)
    context.lineTo(ball.x, ball.y)
    context.closePath()
    context.stroke()
    context.restore();
}
