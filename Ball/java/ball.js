var canvas =document.getElementById('canvas')
var context = canvas.getContext('2d')
//var timer 
//var x = 100
//var interval = 100 / 2
	
//timer = setInterval(animate,interval)

//function animate(){
//context.clearRect(0, 0 , canvas.width, canvas.height)
//x += 5
context.beginPath()
context.arc(512, 400, 50, 0, 2 * Math.PI)
context.stroke()
context.fill()


//timer = setInterval(animate,interval)
