var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000 / 60
var timer = setInterval(animate, interval);


var score = new GameObject()
var score1 = 0
score.x =500
score.y = 500
//_____________time _________________
var time


//__________Player____________________
var square = new GameObject();
square.x = canvas.width / 2
square.y = canvas.height - square.height / 2 - 25
square.color = "yellow"
square.width = 50
square.height = 50
square.vx = 0


//__________cirlces ___________________
var camount = 5;
var circle = []; // Particles are the backround boxes
var colors = []
 colors [0] = " blue"
 colors [1] = " orange"
 colors [2] = " white"
//__________Circle Array____________________
for (var i = 0; i < camount; i++) {
    circle[i] = new GameObject({ width: 30, height: 30 });
    var randomcolor = Math.round(Math.random());

    circle[i].x = Math.random() * canvas.width;
    circle[i].y = Math.random() * -canvas.height;
    circle[i].vy = rand(1, 7)
    circle[i].color = colors[Math.floor(rand(0, 2.9))]
}

//Square Particles____________________
var amount = 5;
var particles = []; // Particles are the backround boxes
var pcolors = []
pcolors [0] = " lime"
pcolors [1] = " purple"
pcolors [2] = " magenta"

//__________Square array
for (var i = 0; i < amount; i++) {
    particles[i] = new GameObject({ width: 30, height: 30});
    var randomcolor = Math.round(Math.random());

   
    particles[i].x = Math.random() * -canvas.width;
    particles[i].y = Math.random() * canvas.height;
    particles[i].vy = rand(1, 5)
    particles[i].color = pcolors[Math.floor(rand(0, 2.9))]
}

//__________GAME Start____________________
function animate() {


    context.clearRect(0, 0, canvas.width, canvas.height);

    //__________Movement____________________
    square.x += square.vx;


    //__________circle array____________________
    for (var c = 0; c < circle.length; c++) {
        circle[c].y += circle[c].vy;

        if (circle[c].y > canvas.height) {
            circle[c].y = 0 + Math.random() / canvas.width + 10
            circle[c].x = Math.random() * canvas.height + 10 //this if statesment resest the canvas
        }


        //this is the circle collide
        if (circle[c].hitTestObject(square)) {
            score1 = 0
            square.color = "red";

            for(var i = 0; i < camount; i ++)
            {
                circle[i].x = Math.random() * canvas.width;
                circle[i].y = Math.random() * -canvas.height;
                circle[i].vy = rand(1, 7);
            }
            for(var i = 0; i < amount; i ++)
            {
                particles[i].x = Math.random() * -canvas.width;
                particles [i].y = Math.random() * canvas.height;
                particles[i].vy = rand(1, 5);
            }
                
            clearTimeout(time)
            time = setTimeout(reset,500)

        }

        circle[c].drawCircle();
    }


    //__________BOX ARRYS____________________
    for (var p = 0; p < particles.length; p++) {
        particles[p].y += particles[p].vy;
        //this resets my particles 
        if (particles[p].y > canvas.height) {
            particles[p].y = 0 + Math.random() / canvas.width + 10;
            particles[p].x = Math.random() * canvas.height + 10;

        }
        //player collision with particles
        if (particles[p].hitTestObject(square)) {
            score1 += 1
            square.color = "green";
            particles[p].x = Math.random() * -canvas.width;
            particles[p].y = Math.random() * canvas.height;
            particles[p].vy = rand(1,5);

            clearTimeout(time)
            time = setTimeout(reset,500)

        }


        particles[p].drawRect();
    }

    bound(square)
    //__________Arw keys____________________
    if (a) {
        square.x += -6
    }

    if (d) {
        square.x += 6
    }



    score.drawScore()
    square.drawRect()
}

function rand(low, high) {
    return Math.random() * (high - low) + low
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

function reset() {
    square.color = "yellow";
}