//-------------------------------------------------------------------------
//intro message
var intro = function(){
    console.log("**************************************");
    console.log("Welcome to SolarIoT");
    console.log("Solar Investment Simplified\n");
}
//contents menu
var contents = function(){
    console.log("Press 1 to display 'Battery Informatino'");
    console.log("Press 2 to display 'Current Energy Sell Rate'");
    console.log("Press 3 to display 'Current Energy Available for Sale'");
    console.log("Type 'EXIT' to exit SolarIoT")
}
//exit message
var exit = function(){
    console.log("\nThank you for using SolarIoT");
    console.log("**************************************");
}
//-------------------------------------------------------------------------
//objects
//user info
var User = function(name, wallet){
    this.name=name;
    this.wallet=wallet;
}
//battery info
var Battery = function(id){
    this.id=id;
    this.power=Math.floor(Math.random()*100);
    this.available=100-this.power;
}
//-------------------------------------------------------------------------
//functions

//-------------------------------------------------------------------------
//TEST INFO
//Dummy users -- TEST TEST TEST
var user1 = new User("John", 5);
var user2 = new User("Mary", 10);
var user3 = new User("Paul", 30);
var user4 = new User("Steve", 25);
var user5 = new User("Larry", 50);

//Create dummy battery grid -- TEST TEST
var battery1 = new Battery('123456');
var battery2 = new Battery('234567');
var battery3 = new Battery('345678');
var battery4 = new Battery('456789');
var battery5 = new Battery('567890');

console.log(user1);
console.log(battery1);


// var emptyBattery = 0;
// var fullBattery = 100;
// var batteryPower = Math.floor(Math.random()*100);
// var availablePower = fullBattery - batteryPower;

// var  = {
//     "name":"John Doe",
//     "battery":batteryPower,
//     "energyAvailable": availablePower,
// }


//dummy user
// class User {
//     constructor(name,battery){
//     this.name=name;
//     this.battery=battery;
//     this.energyAvailable = 100-user[battery];
//     }
// }