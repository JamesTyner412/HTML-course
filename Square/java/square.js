var canvas;
var context;
var timer;
var paddle;
var interval;
var ball; 

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
interval = 1000/60
timer = setInterval(animate, interval);
ball = new GameObject();
paddle = new GameObject();
paddle.x = 10
paddle.y = canvas.height/2
paddle.w = 14
paddle.h = 150

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    	//Move the Player to the right
	if(s)
	{
		//console.log("Moving Right");
		paddle.y += 2;
	}
	
	if(w)
	{
		//console.log("Moving Right");
		paddle.y += -2;
	}

    //paddle screen bounderies
    if(paddle.y + paddle.h > canvas.height + paddle.h/2)
    {
        paddle.y = canvas.height - paddle.h /2
    }

    if( paddle.y < 0 + paddle.h/2 )
    {
        paddle.y = 0 + paddle.h/2
    }

    ball.x += ball.vx
    ball.y += ball.vy


    if(ball.x > canvas.width - ball.radius || ball.x -ball.radius < 0)
	{
		ball.vx = -ball.vx;	
       
    
        scorer --
        ball.color = "violet"
    }
   


    if(ball.y > canvas.height - ball.radius || ball.y -ball.radius < 0)
	{
		ball.vy = -ball.vy;	
        
        
        
        scorer ++
        ball.color = "blue"
    }
   

    ball.drawCircle()

    paddle.drawRect();
}



