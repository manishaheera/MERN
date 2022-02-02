class Ninja {
    constructor (name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    SayName(){
        console.log("This ninja's name is: " + this.name +"!");
    }
    ShowStats(){
        console.log("Stats for: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }
    drinkSake(){
        this.health = this.health + 10;
        console.log(this.name + " drank sake and his/her health level is now " + this.health +" woo!!");
    }
}

const ninjaOne = new Ninja("Manisha", 100);
ninjaOne.SayName();
ninjaOne.ShowStats();
ninjaOne.drinkSake();
