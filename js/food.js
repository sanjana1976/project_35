class Food{
constructor(){
    
}
display()
{
    var foodstock
  
    var foodIm
    var x= 80, y=100
    loadImage("js/Milk.png")
foodIm.addImage("js/Milk.png");
imageMode(CENTER)
image(this.image,720,220,70,70);
if(this.foodstock!=0){
    for(var i=0;i<this.foodstock;i++){
        if(i%10==0){
            x= 80
            y = y+50
        }
        image(this.image,x,y,50,50)
    }
}

}

getFoodstock(){
    
}

updateFoodstock(){

}

deductFoodstock(){

}
}


