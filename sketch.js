//Create variables here
var dog,dogHappy,database,foodS,foodStock;
var feedTime,lastFed;
var foodObj;

function preload()
{
  dog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
  
	//load images here
}

function setup() {
  database = firebase.database();

  createCanvas(800,500);
  dog = createSprite(550,250,50,50);
  dog.addImage(dogHappy);
  dog.scale = 0.2;
  foodStock = database.ref('food');
  foodStock.on('value', readStock);

  fedTime = database.ref('feedtime');
  fedTime.on('value', function(data){
    lastFed = data.val();
  })
  food = new Food(200,300,40);
  feeddog = createBotton(100,200,50,40);
  //addfood = creareBotton();

    

}

function draw() {  
  background(46,139,87);

 // if(keyDown(UP_ARROW)){
 //   writeStock(foodS);
 //   dog.addImage(dogHappy);
 //   }
  food.display();
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
  x = 0;
  }
  else{
    x = x -1;
  }
  database.ref('/').update({
  Food : x

  })
}

