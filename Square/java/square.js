var canvas;
var context;
var timer;
var paddle;
var interval;
var ball;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
interval = 1000 / 60
timer = setInterval(animate, interval);
ball = new GameObject();
paddle = new GameObject();
paddle.x = 10
paddle.y = canvas.height / 2
paddle.w = 14
paddle.h = 150

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Move the Player to the right
    if (s) {
        //console.log("Moving Right");
        paddle.y += 2;
    }

    if (w) {
        //console.log("Moving Right");
        paddle.y += -2;
    }

    //paddle screen bounderies
    if (paddle.y + paddle.h > canvas.height + paddle.h / 2) {
        paddle.y = canvas.height - paddle.h / 2
    }

    if (paddle.y < 0 + paddle.h / 2) {
        paddle.y = 0 + paddle.h / 2
    }

    ball.x += ball.vx
    ball.y += ball.vy


    if (ball.x < -ball.radius) //ball.x -ball.radius < 0)
    {
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2






    }
    if (ball.x > canvas.width - ball.radius) {
        ball.vx *= -1
    }


    if(ball.y > canvas.height - ball.radius || ball.y -ball.radius < 0)
    {
    	ball.vy = -ball.vy;	





    }

    //Check Collisions

    //Demonstrates Accuracy of Bounding Box Collision
    if (ball.hitTestObject(paddle)) {
        //change color



        //ball hits top
        if (ball.y < paddle.y - paddle.height / 6)//one sixth of the paddle's height)
        {
            ball.vx = ball.force //positive speed;
            ball.vy = -ball.force //negative speed;
        }
        else if (ball.y > paddle.y + paddle.height / 6) {
            ball.vy = ball.force //positive speed;
            ball.vx = -ball.force //negative speed;
        }
        else {
            ball.vx = -ball.vx;
        }
    }

    if (ball.hitTestObject(paddle)) {
        //change color
        ball.color = "yellow";
    }
    else {
        ball.color = "#00ff00";
    }

    //Shows Bounding Boxes
    if (ball.hitTestObject(paddle)) {
        //draw bounding boxes
        context.strokeRect(ball.x - ball.width / 2, ball.y - ball.height / 2, ball.width, ball.height)
        context.strokeRect(paddle.x - paddle.width / 2, paddle.y - paddle.height / 2, paddle.width, paddle.height)
    }

    //Demonstrates how often collisions take place
    if (ball.hitTestObject(paddle)) {
        console.log("colliding");
    }

    //Impede movement
    if (ball.hitTestObject(paddle)) {
        paddle.x = prevX;
        console.log("colliding");
    }
    else {
        prevX = paddle.x;
    }



    ball.drawCircle()

    paddle.drawRect();
}



