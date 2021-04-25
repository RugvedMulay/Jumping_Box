var canvas;
var music;
var Box1, Box2, Box3, Box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    Box1 = createSprite(100,580,190,15);
    Box1.shapeColor = "red";

    Box2 = createSprite(300,580,190,15);
    Box2.shapeColor = "green";

    Box3 = createSprite(500,580,190,15);
    Box3.shapeColor = "orange";

    Box4 = createSprite(700,580,190,15);
    Box4.shapeColor = "blue";

    //create box sprite and give velocity
    
    ball = createSprite(random(20,750),300,20,20);
    ball.shapeColor = "white";
    ball.velocityY = "4"
    ball.velocityX = "4"
}

function draw() {
    background("black");
    
    //create edgeSprite
    createEdgeSprites();
    edges = createEdgeSprites();
    

    //add condition to check if box touching surface and make it box
    if(Box1.isTouching(ball) && ball.bounceOff(Box1)){
        ball.shapeColor = "red";
    }

    if(Box2.isTouching(ball) && ball.bounceOff(Box1)){
        ball.shapeColor = "green";
    }

    if(Box3.isTouching(ball) && ball.bounceOff(Box3)){
        ball.shapeColor = "orange";
    }

    if(Box4.isTouching(ball) && ball.bounceOff(Box4)){
        ball.shapeColor = "blue";
    }

    if(Box2.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityY = "0";
        ball.velocityX = "0";
    }

    ball.bounceOff(Box1);
    ball.bounceOff(Box2);
    ball.bounceOff(Box3);
    ball.bounceOff(Box4);

    //ball.bounceOff(edges);

    ball.bounceOff(edges);
    
    drawSprites();
}
