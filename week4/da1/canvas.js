//defines variable to acess canvas properties by ID
var canvas = document.getElementById('canvas')
//Define the drawing context of the Element
var ctx = canvas.getContext('2d')



var galaxy = new Image()
galaxy.src = "image/galaxy.jpg"

galaxy.onload = function () {
    ctx.drawImage(galaxy, 0, 0, 800, 600);
    //draw rectangle

    ctx.fillStyle = "blue"
    ctx.strokeStyle = "green"
    ctx.lineWidth = "5"

    ctx.strokeRect(30, 30, 100, 100)
    ctx.fillRect(30, 30, 100, 100)

    //draw line
    ctx.moveTo(0, 0)
    ctx.lineTo(800, 600)
    ctx.stroke()

    ctx.moveTo(800, 0)
    ctx.lineTo(0, 600)
    ctx.stroke()

    //draw circle
    //ctx.ac(x,y radius, startAngle, endAngle, isCounterClockwise)
    ctx.beginPath()
    ctx.arc(400, 300, 50, 0, (3 * Math.PI) / 2, false)
    ctx.lineTo(450, 250)
    ctx.closePath()
    ctx.fill()

    //draw shape

    ctx.fillStyle = '#55ddef'
    ctx.strokeStyle = "yellow"
    ctx.beginPath()
    ctx.moveTo(650, 100)
    ctx.lineTo(700, 150)
    ctx.lineTo(675, 2000)
    ctx.lineTo(625, 200)
    ctx.lineTo(600, 140)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //draw an image to canvas
    //create the instance of the image
    var mario = new Image()
    //links the source of the image file
    mario.src = 'image/mario.png'
    //callback functionloads image and draw it to canvas
    mario.onload = function () {
        ctx.drawImage(mario, 600, 300, 40, 80)
    }

}