const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    log1 = new Log(730,360,70,90);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    log3 =  new Log(710,380,70,90);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,320,70, 90);
    log5 = new Log(770,320,70, 90);

    bird = new Bird(200,50);
    getTime();
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    log1.display();

    box3.display();
    box4.display();
    
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}

async function getTime(){
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
var responsejSON=await response.json();
//console.log(responsejSON);
var dateTime = responsejSON.datetime;
var hour = dateTime.slice(11,13);
console.log(hour);
if (hour>=6&&hour<=17){
    bg="sprites/bg.png";

}else{
    bg="sprites/bg 2.png";
}
backgroundImg=loadImage(bg);


}