//Create variables here
var dog, dogImg,hdogIm, happydog;
var database;
var foodS,foodstock;

var button
var button2
var fedtime
var lastfed
var foodObj


function preload()
{ dogIm= loadImage("images/dogImg.png");
hdogIm= loadImage("images/dogImg1.png");

	//load images here
}

function setup() {
  createCanvas(1500,1500);
 
  database = firebase.database();

  dog=createSprite(750,750,2,2);
  dog.addImage(dogIm);
  foodObj= new Food();
  

  foodstock= database.ref("food");
  foodstock.on("value",readStock)
  //fill('black')
  button= createButton("FEED THE DOG");
  button2= createButton("ADD FOOD");

  button.position(450,100);
 button.size(300,100)
 button.mousePressed(feedDog)
 button2.position(900,100);
 button2.size(300,100)
 button2.mousePressed(addFood)

 fedtime=database.ref('FeedTime');
 fedtime.on("value", function(data){
   lastfed=data.val();
 })
 
 

}


function draw() { 
  background(46, 139, 87);
 fill('black');
 textSize(30)
 if(lastfed>=12){
   text("LAST FED:"+ lastfed%12 +"PM",350,30);
 } else if(lastfed===0){

text("LAST FED: 12 AM",350,30)}
else{
  text("LAST FED:"+ lastfed+"AM",350,30)
}
 
  

  drawSprites();
}


function readStock(){
  foodS= data.val();
}
function writeStock(x){
database.ref('/').update({
 Food:x
  
})
if(x<=0){
  x=0;

}
else{
  x=x-1
}
}
function feedDog(){
  dog.addImage(hdogIm);
  foodObj.updateFoodstock(foodObj.getFoodstock()-1)
  {
    database.ref('/').update({
      Food:foodObj.getFoodstock(),
      FeedTime: hour()

    })
  }
}

function addFood(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}


