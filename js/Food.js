class Food{
    constructor(){
    this.foodStock = 0;
    this.lastFed;
    this.milk = loadImage("images/Milk.png");
    }
    
    
    getFoodStock(){
        var foodStockref = database.ref('FoodStock');
        foodStockref.on("value",function(data){
            foodStock = data.val();
    
        })
    }
    
        updateFoodStock(count){
        database.ref('/').update({
        foodCount : count

        })
    
        }

        deductFood(count){
        var foodIndex = "food" + foodCount;
        database.ref(foodIndex).set({
        count : count
        })

        }
        display(){
        var x = 80,y = 100;
        imageMode(CENTER);

        if(this.foodStock !=0){
        for(var i = 0 ; i < this.foodStock; i++){
            if(i % 10 == 0){
                x = 80;
                y = y + 50;
            }
            image(this.image,x,y,50,50);
            x = x + 30;
        }

        }

        }
    }