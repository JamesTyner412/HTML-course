var canvas;
var context;
var timer;
var paddle;
var interval;
var ball;
var paddle2
var score
var p1S = 0
var p2S = 0
var net
var pokeball
var pokeball=document.getElementById("pokeball");
pokeball.src = "images/pokeball.png";
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
interval = 1000 / 60
timer = setInterval(animate, interval);
ball = new GameObject();
ball.width = 50
ball.height = 50
ball.vx = -10
ball.vy = 0
paddle = new GameObject();
paddle.x = 5
paddle.y = canvas.height / 2
paddle.width = 14
paddle.height = 150
paddle2 = new GameObject();
paddle2.x = 1019
paddle2.y = canvas.height / 2
paddle2.width = 14
paddle2.height = 150
score = new GameObject()



function animate() 
{
   
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Move the Player to the right
    if (s) {
        //console.log("Moving Right");
        paddle.y += 15;
    }

    if (w) {
        //console.log("Moving Right");
        paddle.y += -15;
    }
    if (ArrowUp) {
        paddle2.y += -15;

    }
    if (ArrowDown) {
        paddle2.y += 15;
    }

    //paddle screen bounderies

    pad(paddle)
    pad(paddle2)

    if (ball.y > canvas.height - ball.width / 2) {
        ball.y = canvas.height - ball.width / 2

        ball.vy = - ball.vy
    }

    //bottom
    if (ball.y < 0 + ball.width / 2) {
        ball.y = 0 + ball.width / 2

        ball.vy = - ball.vy
    }


    ball.x += ball.vx
    ball.y += ball.vy               

   
  
    
  
    


    context.save();
    context.strokeStyle = "blue"; //someColor;
    context.beginPath();
    context.moveTo(canvas.width / 2, 0)                     //center of canvas x, //top of canvas y);
    context.lineTo(canvas.width / 2, canvas.height)                     //center of canvas x, //bottom of canvas y);
    context.closePath();
    context.lineWidth = 10                 //some number; 
    context.stroke();
    context.restore();
    
    //Demonstrates Accuracy of Bounding Box Collision
    if (ball.hitTestObject(paddle)) {
        //change color

        ball.x = paddle.x + paddle.width / 2 + ball.width / 2

        //ball hits top
        ball.vx = -ball.vx//positive speed;

        if (ball.y < paddle.y - paddle.y / 6)//one sixth of the paddle's height)
        {

            ball.vy = -ball.force //negative speed;
        }
        if (ball.y > paddle.y + paddle.height / 6) {
            ball.vy = ball.force //positive speed;
        }
    }
    if (ball.hitTestObject(paddle2)) {
        //change color

        ball.x = paddle2.x - paddle.width / 2 - ball.width / 2

        //ball hits top
        ball.vx = -ball.vx//positive speed;

        if (ball.y < paddle2.y - paddle2.y / 6)//one sixth of the paddle's height)
        {

            ball.vy = -ball.force //negative speed;
        }
        if (ball.y > paddle2.y + paddle2.height / 6) {
            ball.vy = ball.force //positive speed;
        }
    }
    //ball reset mid

    reset(ball)



    //ball.drawCircle()
    context.drawImage(pokeball, ball.x -ball.width/2, ball.y -ball.height/2, ball.width, ball.height );
    paddle.drawRect();
    paddle2.drawRect();
    score.drawScore();
  
   
}



function pad(pad) {
    if (pad.y + pad.height > canvas.height + pad.height / 2) {
        pad.y = canvas.height - pad.height / 2
    }
    if (pad.y < 0 + pad.height / 2) {
        pad.y = 0 + pad.height / 2
    }
}

function reset(ball) {
    //left side
    if (ball.x < 0 - ball.width / 2) {

        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        // ball.color = "red"
        p2S++
    }
    //rightside 
    if (ball.x > canvas.width + ball.width / 2) {

        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        //ball.color = "red"
        p1S++
    }
}
