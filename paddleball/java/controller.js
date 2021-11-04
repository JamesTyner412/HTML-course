//Define Booleans for each key
var ArrowLeft = false;
var ArrowRight = false;


//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e) {
    if (e.keyCode == 37) {
        ArrowLeft = true;
    }
    if (e.keyCode == 39) {
        ArrowRight = true;
        console.log(ArrowLeft)
    }
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);


	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 37)
	{
		ArrowLeft = false;
	}
	if(e.keyCode == 39)
	{
		ArrowRight = false;
	}

}

