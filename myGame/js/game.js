var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});
	

	platform0 = new GameObject();
		platform0.width = 175;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "blue";

		platform1 = new GameObject();
		platform1.width = 175; //this changes the size
		platform1.height = 50
		platform1.x = platform0.x + 150; //this changes the width position
		platform1.y = platform0.y - 200; //this changes the height location
		platform1.color = "pink";

		platform2 = new GameObject;
		platform2.width = 175;
		platform2.height = 50;
		platform2.x = platform0.x + 500;
		platform2.y = platform0.y - 300;
		platform2.color = "magenta";

		platform3 = new GameObject;
		platform3.width = 175;
		platform3.height = 50;
		platform3.x = platform0.x + 1750;
		platform3.y = platform0.y - 500;
		platform3.color = "green";
		
		platform4 = new GameObject;
		platform4.width = 3500;
		platform4.height = 50
		platform4.x = platform0.x + 200;
		platform4.y = platform0.y - 800;
		platform4.color = "yellow";
		
		platform5 = new GameObject;
		platform5.width = 175;
		platform5.x = 575;
		platform5.y = canvas.height - platform0.height/2;
		platform5.color = "blue";


	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	
	player.x = platform0.x
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0 && !s)
	{
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0 && !s)
	{
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0 && !s)
	{
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}

	while(platform4.hitTestPoint(player.top()) && player.vy >=0 && !s)
	{
		player.canJump = false;
		player.y--;
		player.vy = 0;
	}


	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	platform5.drawRect();
	

	//Show hit points
	player.drawRect();
	goal.drawCircle();
}


