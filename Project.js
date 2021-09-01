var s1,s2,s3,s4
var sprites=[];

function setup() 
{
  createCanvas(400,400);
  s1 = createSprite(200,0,15,15);
  s2 = createSprite(200,200,15,15);
  s3 = createSprite(200,434,15,15);
  s4 = createSprite(200,300,15,15);
  sprites = [s1,s2,s3,s4];
  console.log(sprites[0].position.x);
  console.log(sprites[1].position.x);
  console.log(sprites[2].position.y);
  console.log(sprites[3].position.y);

}

function preload(){
 shipImg1 = LoadAnimation("ship-1.png");
 shipImg1 = LoadAnimation("ship-1.png");
 shipImg1 = LoadAnimation("ship-1");
 shipImg1 = LoadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
 shipImg1 = LoadAnimation("ship-1","ship-2","ship-1","ship-2");

}

if(sea.x < 0){
  sea.x = 0;
  sea.x = sea.width;
  sea.x = sea.width/8;
  sea.y = height;
}

function draw() 
{
background(51);

}

