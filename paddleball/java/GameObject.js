function GameObject(x, y, w, h, color) {

	//Default Values
	if (x == undefined)
		this.x = canvas.width / 2;
	else
		this.x = x;
	if (y == undefined)
		this.y = canvas.height / 2;
	else
		this.y = y;

	if (w == undefined)
		this.width = 100;
	else
		this.width = w;
	if (h == undefined)
		this.height = 100;
	else
		this.height = h;

	//player's color
	if (color == undefined)
		this.color = "cyan";
	else
		this.color = color;
	
		//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	this.force = 1;
	
	this.ax = 1;
	this.ay = 1;


	//Players radius
	//this.radius = 30

	//This draws the player to the screen
	this.drawRect = function () {
		context.save();
		context.fillStyle = this.color;
		context.translate(this.x, this.y);
		context.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height);
		context.restore();

	}


    //This draws the player to the screen
	this.drawCircle = function () {
		context.save();
		context.beginPath()
		context.fillStyle = this.color
		context.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI)
		context.closePath()
		context.fill()
		context.restore();
		this.color = " Magenta"
	}

	this.drawScore = function()
	{
		context.save()
		context.fillStyle = "black"
		context.font = " 20px Arial"
		context.fillText("Score: " +p1S, 75, 50)
	}
	//This changes the player's position
	this.move = function () {
		this.x += this.vx;
		this.y += this.vy;
	}

	this.left = function () {
		return this.x - this.width / 2;
	}
	this.right = function () {
		return this.x + this.width / 2;
	}

	this.top = function () {
		return this.y - this.height / 2;
	}
	this.bottom = function () {
		return this.y + this.height / 2;
	}

	this.hitTestObject = function (obj) {
		if (this.left() < obj.right() &&
			this.right() > obj.left() &&
			this.top() < obj.bottom() &&
			this.bottom() > obj.top()) {
			return true
		}
		return false;
	}
}