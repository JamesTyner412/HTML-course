var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5"

ctx.strokeRect(85, 302, 100, 100)
ctx.fillRect(85, 302, 100, 100)

ctx.strokeStyle = "rgb(255, 0, 0)"
ctx.lineWidth = "5"
ctx.moveTo(85, 682)
ctx.lineTo(278, 549)
ctx.stroke()


ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.arc(385, 441, 65, 0, Math.PI*2, false);
ctx.closePath()
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.moveTo(558, 309)
ctx.lineTo(667, 284)
ctx.lineTo(724, 380)
ctx.lineTo(650, 464)
ctx.lineTo(548, 420)
ctx.closePath()
ctx.stroke()
ctx.fill()


ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32)"
ctx.lineWidth ="5"
ctx.beginPath()
ctx.lineTo(636, 496)
ctx.lineTo(668, 554)
ctx.lineTo(733, 567)
ctx.lineTo(688, 616)
ctx.lineTo(695, 681)
ctx.lineTo(636, 653)
ctx.lineTo(576, 681)
ctx.lineTo(584, 616)
ctx.lineTo(538, 567)
ctx.lineTo(603, 554)
ctx.closePath()
ctx.stroke()
ctx.fill()