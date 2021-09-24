
var canvas = document.getElementById(`canvas`);
var context = canvas.getContext(`2d`);

var interval = 1000/60;
var timer = setInterval(animate, interval);

/*------------Use this if you want to implement States---------------*/
var startButton = new GameObject();
startButton.img.src=`images/start.png`;
startButton.x=(600)
startButton.y=(470)

var menuBackground = new GameObject();
menuBackground.img.src=`images/menu.png`;
menuBackground.width=canvas.width;
menuBackground.height=canvas.height;

gameStates[`menu`] =function(){

	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			gameStates.changeState(`game`)
		}
		startButton.color = `yellow`
	}
	else
	{
		startButton.color = `red`
    }
    menuBackground.drawStaticImage(0,0)
	startButton.render(`drawStaticImage`,0,0)
}



gameStates.changeState(`menu`)

var gravity = 1;
var friction = {x:.85,y:.97}

//Avatar
var wiz = new GameObject({width:128, height:128, spriteData:playerData}).makeSprite(playerData)
wiz.force=1

//Very back background
var sky = new GameObject({width:canvas.width, height:canvas.height, color:"rgba(12,240,229,0)"})
sky.img.src = `images/sky.png`
//The ground
var ground = new GameObject({width:canvas.width*10, height:64,y:canvas.height-32, color:"rgba(12,240,229,0)"})
ground.img.src = `images/ground.png`
//A platform
var plat = new GameObject({width:256, height:64,y:canvas.height-200, color:"rgba(12,240,229,0)"})
plat.img.src=`images/platform.png`

//A level object when it is moved other objects move with it.
var level = new GameObject({x:0,y:0});
ground.world = level;
plat.world = level;

//Cave foreground Tile Grid
var cave = new Grid(caveData, {world:level, x:1024, tileHeight:64, tileWidth:64});
//Cave background Tile Grid
var caveBack = new Grid(caveBackData, {world:level, x:1024, tileHeight:64, tileWidth:64});

//This is a group used for collisions
var g1 = new Group();
g1.color= `rgb(251,0,254)`;

//Adds items to a group
g1.add([ground,plat])

//removes items from a group
//g1.remove([plat, cave.grid])

//Used to draw the rectangles
var rects = new Group();
rects.add([ground,plat])

//used to render the sprites
var sprites = new Group();
sprites.add([caveBack.grid, wiz, cave.grid])

//
var levelItems=new Group();
levelItems.add([caveBack.grid, wiz, ground, plat, cave.grid]);

//background
var bg = new GameObject({x:level.x,y:level.y, width:canvas.width*4, height:canvas.height})
bg.img.src=`images/elements.png`

//farbackground
var rbg = new GameObject({x:level.x, y:level.y, width:1024, height:512})
rbg.img.src=`images/background.png`



//* 

var bullet=[]
var carShooter=true;
var shotTimer = 0 ;
var shotDelay = 30;
var currentBullet =0;


var bullets = []

for (let i=0; i<100; i++)
{
	bullets[i] = new GameObject()
	bullets[i].img.src ="images/fireball.png"
	bullets[i].y = -10000
	bullets[i].width = 100
	bullets[i].height = 60

	
}

console.log(bullets)

//*

var startbutton = new GameObject();
gameStates[`game`] = function()
{
	
	if(!keys[`W`] && !keys[`S`] && !keys[`D`] && !keys[`A`] && wiz.canJump)
		wiz.changeState(`idle`)
	
	if(keys[`W`] && wiz.canJump)
	{
		wiz.canJump = false;
		wiz.vy = wiz.jumpHeight;
		wiz.changeState(`jump`)
		sounds.play(`jsound`)
	}
	if(keys[`S`])
	{
		wiz.top={x:0,y:0};
		wiz.changeState(`crouch`)
	}
	else
	{
		wiz.height = 128;
	}
	if(keys[`D`] && wiz.currentState != `crouch`)
	{
		wiz.changeState(`walk`)
		wiz.vx += wiz.force
		wiz.dir=1;
	}
	if(keys[`A`] && wiz.currentState != `crouch`)
	{
		wiz.changeState(`walk`)
		wiz.vx += -wiz.force
		wiz.dir=-1;
	}
	if(keys[` `])
	{
		wiz.top={x:0,y:0};
		wiz.changeState(`attack`)
	}
	
	shotTimer--;
	if(shotTimer <=0)
	{
		canShoot= true
	}
	else
	{
		canShoot = false;
	}
	 
	if(keys[` `])
	{
		if (canShoot)
		{
			shotTimer = shotDelay
			console.log(`Boom`)
	
			bullets[currentBullet].vx=5*wiz.dir;
			bullets[currentBullet].world = level;
			bullets[currentBullet].x = wiz.x - level.x +20;
			bullets[currentBullet].y = wiz.y - level.y +50;
			sounds.play(`splode` ,1)
	
			
			currentBullet++;
			if(currentBullet >= bullets.length)
			{
				currentBullet = 0
			}
		}
	}
	
	
	else 
	{
		shotTimer=0
	}


	wiz.vy+= gravity
	wiz.vx *= friction.x
	wiz.vy *= friction.y
	wiz.x += Math.round(wiz.vx)
	wiz.y += Math.round(wiz.vy)

	let offset = {x:Math.round(wiz.vx), y:Math.round(wiz.vy)}

	while(g1.collide(wiz.bottom) && wiz.vy>=0)
	{
		wiz.canJump = true;
			wiz.vy=0;
			wiz.y--;
			offset.y--;
	}
	if (plat.overlap(wiz.bottom))
	{
		wiz.vy=-10;
	}


	//Makes the level move
	wiz.x -= offset.x;
	level.x -= offset.x;
	rbg.x -= offset.x*.5;

	
	

	bg.x = level.x*.75;
	console.log(rbg.x)
	if(rbg.x < -rbg.width || rbg.x > rbg.width)
	{
		rbg.x=0; 
	}

	sky.drawStaticImage([-512,-470]);
	rbg.drawStaticImage([0,0]);
	rbg.drawStaticImage([-rbg.width,0]);
	rbg.drawStaticImage([rbg.width,0]);
	bg.drawStaticImage([0,0]);
	ground.drawStaticImage([-512,-32])
	plat.drawStaticImage([-256, -235, 512, 470])

	rects.render(`drawRect`)

	context.beginPath()
	context.moveTo(0,wiz.bottom.y)
	context.lineTo(canvas.width,wiz.bottom.y)
	context.stroke();
	sprites.play().render(`drawSprite`);

	for (let i=0; i<100; i++)
	{ 
		bullets[i].move()
		bullets[i].drawStaticImage()
		//bullets[i].angle+=10
	}

}
/*----------------------------------------------------------------------*/

//-------------------------AnimationLoop--------------------------------

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	/*-----------Use for State Machine ---------------------------------*/
	gameStates[gameStates.currentState]();
	/*-------------------------------------------------------------------*/
}



