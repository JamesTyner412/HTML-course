var startButton = new GameObject();
var menuBackGround = new GameObject();

gameStates[`menu`] =function(){
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			gameStates.changeState(`level1`)
		}
		startButton.color = `yellow`
	}
	else
	{
		startButton.color = `red`
    }
    
	startButton.render()
}
