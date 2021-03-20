const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;      
var hammer;

//the last part or the variablessssssssssss .-.
var plane, rubber, rubber1, rubber2;
var iron, iron2, iron1;
var stone, stone1, stone2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)           //added a few more :)
    hammer = new Hammer(10,100);
    rubber = new Rubber(400,520,50);
    iron = new Iron(400,580,80,80);
    stone = new Stone(400,500,120,20);
    stone1 = new Stone(600,300,20,200);
    stone2 = new Stone(500,200,80,80);
    iron1 = new Iron(380,580,25,120);
    iron2 = new Iron(410,580,25,120);
    rubber1 = new Rubber(600,520,50);
    rubber2 = new Rubber(480,500,100);          //the building blocks ^^
}

function draw(){
    background("lightBlue");        //collor of backgorund
    Engine.update(engine);


    plane.display();            //I am messing around with this :)
    hammer.display();//the new stuff
    rubber.display();
    rubber1.display();
    rubber2.display();
    iron.display();
    iron1.display();
    iron2.display();
    stone.display();
    stone1.display();
    stone2.display();
}