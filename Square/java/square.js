var canvas;
var context;
var timer;
var paddle;
var interval;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
interval = 1000/60
timer = setInterval(animate, interval);

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

    paddle.drawRect();
}



