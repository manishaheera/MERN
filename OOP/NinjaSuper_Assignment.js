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

// Sensei class should extend Ninja class, A Sensei should have 200 health, 10 speed, and 10 strength by default 
// Sensei should have new wisdom attribute with default of 10.
// SpeakWisdom should call the drinkSake method from Ninja class before console.logging a wise message 

class Sensei extends Ninja {
    constructor(name, health = 200 , speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }

    speakWisdom(){
        this.drinkSake();
        console.log("wise message")
    }

}

const ninjaOne = new Ninja("Manisha", 100);
ninjaOne.SayName();
ninjaOne.ShowStats();
ninjaOne.drinkSake();

const senseiOne = new Sensei("Manisha");
senseiOne.ShowStats();
senseiOne.speakWisdom();
