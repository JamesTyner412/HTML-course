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
ball.width = 50
ball.height = 50
ball.vx = -5
ball.vy = 0
paddle = new GameObject();
paddle.x = 5
paddle.y = canvas.height / 2
paddle.width = 14
paddle.height = 150


function animate() {
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

    //paddle screen bounderies
    if (paddle.y + paddle.height > canvas.height + paddle.height / 2) 
    {
        paddle.y = canvas.height - paddle.height / 2
    }

    if (paddle.y < 0 + paddle.height / 2) 
    {
        paddle.y = 0 + paddle.height / 2
    }

    ball.x += ball.vx
    ball.y += ball.vy


    if (ball.x < 0 -ball.width / 2) //ball.x -ball.radius < 0)
    {
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2






    }
    if (ball.x > canvas.width - ball.width/2)
    {
        ball.x = canvas.width - ball.width/2
        ball.vx = -ball.vx
    }


    if (ball.y > canvas.height - ball.width/2) 
    {
        ball.y = canvas.height - ball.width/2
        ball.vy = -ball.vy;


    }
    if (ball.y < 0 + ball.width / 2) 
    {
        ball.y = 0 + ball.width / 2
        ball.vy = -ball.vy

    }

    //Check Collisions

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
        else if (ball.y > paddle.y + paddle.height / 6)
        {
            ball.vy = ball.force //positive speed;
        }
    }



    ball.drawCircle()

    paddle.drawRect();
}



