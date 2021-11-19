var canvas;
var context;
var timer;
var interval;
var player;
var score
var p1S = 0
var gameOver = true
var gameStates = []
var currentStates = 0
var score = 0
var highScore = 0





//var jumpCount = 0
//var jumpMax =2
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
player = new GameObject({ x: 100, y: canvas.height / 2 - 100 });
score = new GameObject()


var star = new Image()
star.src = "images/star.jpg"
star.vx = 10
var starstart = 0

var blue = new Image()
blue.src = "images/blue.jpg"
blue.vx = 10
var bluestart = -1900

var bee = new Image()
bee.src = "images/bee.jpg"
bee.vx = 10
var beestart = -3800


platform0 = new GameObject();
platform0.width = 175;
platform0.x = platform0.width / 2;
platform0.y = canvas.height - platform0.height / 2;
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
platform2.x = platform0.x + 450;
platform2.y = platform0.y - 200;
platform2.color = "magenta";

platform3 = new GameObject;
platform3.width = 175;
platform3.height = 50;
platform3.x = platform0.x + 1750;
platform3.y = platform0.y - 600;
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
platform5.y = canvas.height - platform0.height / 2;
platform5.color = "blue";

platform6 = new GameObject;
platform6.width = 175;
platform6.height = 50
platform6.x = platform0.x + 1000;
platform6.y = platform0.y - 200;
platform6.color = "lime";


platform8 = new GameObject;
platform8.width = 176;
platform8.height = 50
platform8.x = platform0.x + 0;
platform8.y = platform0.y - 500;
platform8.color = "Purple";

platform9 = new GameObject;
platform9.width = 175;
platform9.height = 50;
platform9.x = platform0.x + 1300;
platform9.y = platform0.y - 350;
platform9.color = "indigo";


platform10 = new GameObject;
platform10.width = 125;
platform10.height = 50;
platform10.x = platform0.x + 800;
platform10.y = platform0.y - 600;
platform10.color = "gold";


platform11 = new GameObject;
platform11.width = 125;
platform11.height = 50;
platform11.x = platform0.x + 700;
platform11.y = platform0.y - 300;
platform11.color = "skyblue";


goal = new GameObject({ width: 24, height: 50, x: canvas.width - 50, y: 100, color: "#00ffff" });

player.x = platform0.x

var fX = .85;
var fY = .97;

var gravity = 1;

interval = 1000 / 60;
timer = setInterval(animate, interval);






function animate() {
	
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	//this moves the background image
	starstart += star.vx
	bluestart += blue.vx
	beestart += bee.vx


	context.drawImage(star,starstart,0,canvas.width,canvas.height);
	context.drawImage(blue,bluestart,0,canvas.width,canvas.height); //dont forget just in case at a number to streach if need
	context.drawImage(bee,beestart,0,canvas.width,canvas.height);



	//screen reset
	if(starstart> canvas.width)
	{
		//make suer you go behind bee
		starstart = beestart - 1900;
	}
	if(bluestart> canvas.width)
	{
		//make suer you go behind bee
		bluestart = starstart - 1900;
	}
	if(beestart> canvas.width)
	{
		//make suer you go behind bee
		beestart = bluestart - 1900;
	}
	console.log(starstart)

	if (w && player.canJump && player.vy == 0) {
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if (a) {
		player.vx += -player.ax * player.force;
	}
	if (d) {
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;

	player.vy += gravity;

	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);


	while (platform0.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
		player.canJump2 = true;
	}
	while (platform0.hitTestPoint(player.left()) && player.vx <= 0) {
		player.x++;
		player.vx = 0;
	}
	while (platform0.hitTestPoint(player.right()) && player.vx >= 0) {
		player.x--;
		player.vx = 0;
	}
	while (platform0.hitTestPoint(player.top()) && player.vy <= 0) {
		player.y++;
		player.vy = 0;
	}


	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 

	while (platform1.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}
	while (platform2.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}
	while (platform3.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}

	while (platform4.hitTestPoint(player.top()) && player.vy >= 0 && !s) {
		player.canJump = false;
		player.y--;
		player.vy = 0;
	}

	while (platform6.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}

	while (platform5.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}

	while (platform8.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}
	while (platform9.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}


	while (platform10.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}

	while (platform11.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
	}

	if (player.hitTestObject(goal)) {
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width / 2, canvas.height / 2);
	}


	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	platform5.drawRect();
	platform6.drawRect();
	platform8.drawRect();
	platform9.drawRect();
	platform10.drawRect();
	platform11.drawRect();



	//Show hit points
	score.drawScore()
	player.drawRect();
	goal.drawCircle();

}

/*function doubleJump()
{
	if(jumpCount < jumpMax)
	{
		player.canJump = true
		jumpCount++
	}
}*/
