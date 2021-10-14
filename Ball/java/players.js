function Ball() {
	//player's location
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;

	//player's dimensions
	this.width = 100;
	this.height = 100;

	//player's velocity or speed on each axis
	this.vx = 3;
	this.vy = 3;

	//player's color
	this.color = "skyblue"

	//Players radius
	this.radius = 30

	//This draws the player to the screen
	this.draw = function () {
		context.save();
		context.beginPath()
		context.fillStyle = this.color 
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
		context.closePath()
		context.fill()
		context.restore();

		ctx.save()
		ctx.font = "15px Arial"
		ctx.fillStyle = "black"
		ctx.fillText("score: " + scorer.toString(), canvas.width - 150, 30)
		ctx.restore()

	}

	//This changes the player's position
	this.move = function () {
		this.x += this.vx;
		this.y += this.vy;
	}
}
