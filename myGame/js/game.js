var player;
var star = document.getElementById("sky");
var blue = document.getElementById("sky2");
var bee = document.getElementById("sky3");
var starvx = 10
var bluevx = 10
var beevx = 10
var starstart = 0
var bluestart = -1900
var beestart = -3800
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var counter = 0;
player = new GameObject({ x: 100, y: canvas.height / 2 - 100 });



var life = new GameObject()
life.x = 20
life.y = 850
life.width = 30
life.height = 30
life.color = "purple"

var heart = new Image()
heart.src = "images/heart.png"

var life2 = new GameObject()
life2.x = 85
life2.y = 850
life2.width = 30
life2.height = 30
life2.color = "purple"

var heart2 = new Image()
heart2.src = "images/heart.png"

var life3 = new GameObject()
life3.x = 150
life3.y = 850
life3.width = 30
life3.height = 30
life3.color = "purple"

var heart3 = new Image()
heart3.src = "images/heart.png"

var night = new Image()
night.src = "images/night.gif"

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
platform1.vx = 5

platform2 = new GameObject;
platform2.width = 175;
platform2.height = 50;
platform2.x = platform0.x + 450;
platform2.y = platform0.y - 100;
platform2.color = "magenta";
platform2.vx = 2

platform3 = new GameObject;
platform3.width = 175;
platform3.height = 50;
platform3.x = platform0.x + 1650;
platform3.y = platform0.y - 300;
platform3.color = "green";

platform4 = new GameObject;
platform4.width = 3500;
platform4.height = 50
platform4.x = platform0.x + 200;
platform4.y = platform0.y - 800;
platform4.color = "yellow";

/*platform5 = new GameObject;
platform5.width = 175;
platform5.x = 575;
platform5.y = canvas.height - platform0.height / 2;
platform5.color = "blue";
*/

platform6 = new GameObject;
platform6.width = 175;
platform6.height = 50
platform6.x = platform0.x + 1000;
platform6.y = platform0.y - 25;
platform6.color = "lime";
platform6.vx = 6

platform8 = new GameObject;
platform8.width = 176;
platform8.height = 50
platform8.x = platform0.x + 0;
platform8.y = platform0.y - 650;
platform8.color = "Purple";
platform8.vx = 7

platform9 = new GameObject;
platform9.width = 175;
platform9.height = 50;
platform9.x = platform0.x + 1300;
platform9.y = platform0.y - 350;
platform9.color = "indigo";
platform9.vx = 5

/*platform10 = new GameObject;
platform10.width = 125;
platform10.height = 50;
platform10.x = platform0.x + 800;
platform10.y = platform0.y - 600;
platform10.color = "gold";
*/


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

//gamestates
var gameState = [] 
var currentState = 0
var gameOver = true

function changeState(){
	if(currentState >= gameState.length -1)
	{
		currentState = 0
	}
	else{
		currentState++
	}
}

function keyPress()
{
	if(space)
	{
		changeState()
	}
}

gameState[0] = function()
{
	context.clearRect(0,0,canvas.width,canvas.height)
	//drawImage
	//context.drawImage(imagename,0,0, canvas.width,canvas.height)
	context.fillStyle = "pink"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "black"
    context.textAlign = "center"
    context.font = "30px Arial"
    context.fillText("Untitled HTML Game", canvas.width / 2, canvas.height / 2 - 30)
    context.font = "15px Arial"
    context.fillText("(Press Spacebar To Start)", canvas.width / 2, canvas.height / 2 + 15)
   keyPress()
}

gameState[1] = function()
{
	gameOver = false
	//instructions
	context.clearRect(0,0,canvas.width,canvas.height)
	//drawImage
	//context.drawImage(imagename,0,0, canvas.width,canvas.height)
	context.fillStyle = "yellow"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "black"
    context.textAlign = "center"
    context.font = "30px Arial"
    context.fillText("INSTRUCTIONS", canvas.width / 2, canvas.height / 2 - 30)
    context.font = "30px Arial"
    context.fillText("(Press W,A,S,D to move Up W, Left,A, Right,D  Down,S push c to start.)", canvas.width / 2, canvas.height / 2 + 15)
   
	if(KeyC)
	{
		currentState++
	}

}

gameState[2] = function()
{
	//this moves the background image
	starstart += starvx
	bluestart += bluevx
	beestart += beevx
	platform9.x += platform9.vx 
	platform8.x += platform8.vx
	platform6.x += platform6.vx
	platform2.x += platform2.vx
	platform1.x += platform1.vx
	//draw image
	context.drawImage(star, starstart, 0, canvas.width, canvas.height);
	context.drawImage(blue, bluestart, 0, canvas.width, canvas.height); //dont forget just in case at a number to streach if need
	context.drawImage(bee, beestart, 0, canvas.width, canvas.height);

	if(platform9.x  > canvas.width)
	{
		platform9.x = 0
	}

	if(platform8.x  > canvas.width)
	{
		platform8.x = 0
	}
	if(platform6.x  > canvas.width)
	{
		platform6.x = 0
	}
	if(platform2.x > canvas.width)
	{
		platform2.x = 0
	}
	if(platform1.x  > canvas.width)
	{
		platform1.x = 0
	}
	//screen reset
	if (starstart > canvas.width) {
		//make suer you go behind bee
		starstart = beestart - 1900;
	}
	if (bluestart > canvas.width) {
		//make suer you go behind bee
		bluestart = starstart - 1900;
	}
	if (beestart > canvas.width) {
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
		player.color = "white"
	}
	while (platform0.hitTestPoint(player.left()) && player.vx <= 0) {
		player.x++;
		player.vx = 0;
		player.color = "skyblue"
	}
	while (platform0.hitTestPoint(player.right()) && player.vx >= 0) {
		player.x--;
		player.vx = 0;
		player.color = "lime"
	}
	while (platform0.hitTestPoint(player.top()) && player.vy <= 0) {
		player.y++;
		player.vy = 0;
		player.color = "magenta"
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
		player.color = "pink"
	}
	while (platform2.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
		player.color = "violet"
	}
	while (platform3.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
		player.color = "gray"
	}

	while (platform4.hitTestPoint(player.top()) && player.vy >= 0 && !s) {

		player.canJump = false;
		player.y--;
		player.vy = 0;
		player.color = "brown"
	}

	while (platform6.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
		player.color = "red"
	}

	/*while (platform5.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
		player.color = "yellow"
	}
	*/
	while (platform8.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
		player.color = "yellow"
	}
	while (platform9.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
		player.color = "orange"
	}


	/*while (platform10.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
		player.color = "silver"
	}
	*/
	while (platform11.hitTestPoint(player.bottom()) && player.vy >= 0 && !s) {
		player.canJump = true;
		player.y--;
		player.vy = 0;
		player.color = "cyan"
	}
	if (platform3.hitTestPoint(player.bottom())) {
		platform8.x = player.x - platform8.width
	}
	

//************************************************************************** */
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	//platform5.drawRect();
	platform6.drawRect();
	platform8.drawRect();
	platform9.drawRect();
	//platform10.drawRect();
	platform11.drawRect();
	platform0.drawRect();


	//Show hit points
	bound(player)
	player.drawRect();
	goal.drawCircle();
	life.drawCircle();
	life2.drawCircle();
	life3.drawCircle();
	context.drawImage(heart, life.x - 18, life.y - 18, 40, 40)
	context.drawImage(heart2, life2.x - 18, life2.y - 18, 40, 40)
	context.drawImage(heart3, life3.x - 18, life3.y - 18, 40, 40)
	
	if (player.hitTestObject(goal)) {
		goal.y = 10000;
		currentState = 4
		
	}
	
	if(player.y > canvas.height)
	{
		if(counter == 0)
		{
			life3.x = 10000
			counter++;
		}
		else if(counter == 1)
		{
			life2.x = 10000
			counter++;
		}
		else if(counter == 2)
		{
			counter = 0;
			currentState = 3;
		}
		player.x = 100 
		player.y = canvas.height / 2 - 100
	}
	
	if(player.y > canvas.width)
	{
		if(counter == 0)
		{
			life3.x = 10000
			counter++;
		}
		else if(counter == 1)
		{
			life2.x = 10000
			counter++;
		}
		else if(counter == 2)
		{
			counter = 0;
			currentState = 3;
		}
		player.x = 100 
		player.y = canvas.height / 2 - 100
	}

	

}

gameState[3] = function()
{
	context.clearRect(0,0,canvas.width,canvas.height)
	//drawImage
	//context.drawImage(imagename,0,0, canvas.width,canvas.height)
	context.fillStyle = "blue"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "white"
    context.textAlign = "center"
    context.font = "30px Arial"
    context.fillText("GameOver", canvas.width / 2, canvas.height / 2 - 30)
    context.font = "45px Arial"
    context.fillText("(YOU LOSE )", canvas.width / 2, canvas.height / 2 + 15)
   
}

gameState[4] = function()
{
	context.clearRect(0,0,canvas.width,canvas.height)
	//drawImage
	//context.drawImage(imagename,0,0, canvas.width,canvas.height)
	context.fillStyle = "green"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "black"
    context.textAlign = "center"
    context.font = "30px Arial"
    context.fillText("Untitled HTML Game", canvas.width / 2, canvas.height / 2 - 30)
    context.font = "15px Arial"
    context.fillText("(You Win)", canvas.width / 2, canvas.height / 2 + 15)
   
}
function bound(player) {
    if (player.x + player.width > canvas.width + player.width / 2) {
        player.x = canvas.width - player.width / 2
        //This my right side boundrie
        player.color = "black"


    }
    if (player.x < 0 + player.width / 2) {
        player.x = 0 + player.width / 2
        //This my leftside  side boundrie
        player.color = "Magenta"

    }
}

function restart()
{
	player.x = platform0.x
}

function animate() {


	context.clearRect(0, 0, canvas.width, canvas.height);
	gameState[currentState]()

}



