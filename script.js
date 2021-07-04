var number = 0;
var energy = 175;
var maxEnergy = 175;
var ships = 0;
var clickPower = 1;
var minePowerCost = Math.floor(25 * Math.pow(2.5, clickPower));
var restPower = 1;
var restPowerCost = Math.floor(20 * Math.pow(2.5, restPower));
var sleepPower = 0;
var sleepPowerCost = Math.floor(20 * Math.pow(2.5, sleepPower));


var numberUp = (val) => {
    if (energy >= 1) {
        energy -= 1;
        number += (clickPower* val);
        document.getElementById("numberValue").innerHTML = number;
        document.getElementById("finish").style.width = energy + "px";
    }
}

var numberUpAuto = (val) => {
        number += val;
        document.getElementById("numberValue").innerHTML = number;

    }


var dev = () => {
    number += 20000;
    document.getElementById("numberValue").innerHTML = number;
}

var autoShip = () => {
    if(number >= 1000){
        ships += 1;
        number -= 1000;
        document.getElementById("ships").innerHTML = ships;
        document.getElementById("numberValue").innerHTML = number;
            }
}

var rest = () => {
    if(energy < maxEnergy)
    energy += restPower;
    document.getElementById("finish").style.width = energy + "px";
}

var autoRest = (sleepVal) => {
    if(energy < maxEnergy){
    energy += sleepVal;
    document.getElementById("finish").style.width = energy + "px";
}
}

window.setInterval(function(){
    numberUpAuto(Math.floor(ships)), upgradeUnlock(), autoRest(sleepPower)
 }, 1000
)

var upgradeUnlock = () => {
    if (number >= minePowerCost) {
        document.getElementById("upgrade1").style.display = "block";
    }
    if (number >= restPowerCost) {
        document.getElementById("upgrade2").style.display = "block";
    }
    if (number >= sleepPowerCost) {
        document.getElementById("upgrade3").style.display = "block";
    }
    if (number >= 6000) {
        document.getElementById("upgrade4").style.display = "block";
    }
    if (number >= 10000) {
        document.getElementById("upgrade5").style.display = "block";
    }
    if (number >= 20000) {
        document.getElementById("upgrade6").style.display = "block";
    }
    if (number >= 100000) {
        document.getElementById("upgrade7").style.display = "block";
    }
    if (number >= 250000) {
        document.getElementById("upgrade8").style.display = "block";
    }
    if (number >= 700000) {
        document.getElementById("upgrade9").style.display = "block";
    }
    if (number >= 1500000) {
        document.getElementById("upgrade10").style.display = "block";
    }
}
document.getElementById("minePowerCost").innerHTML = minePowerCost;
document.getElementById("effectiveRestCost").innerHTML = restPowerCost; 
document.getElementById("sleepNaniteCost").innerHTML = sleepPowerCost



var minePower = () => {
    if(number >= minePowerCost){
    number -= (minePowerCost);
    clickPower += 1;
    document.getElementById("numberValue").innerHTML = number;
    document.getElementById("upgrade1").style.display = "none";
    minePowerCost = Math.floor(25 * Math.pow(2.5, clickPower));
    document.getElementById("minePowerCost").innerHTML = minePowerCost;
}}

var effectiveRest = () => {
    if(number >= restPowerCost){
    number -= restPowerCost;
    restPower += 1;
    document.getElementById("numberValue").innerHTML = number;
    document.getElementById("upgrade2").style.display = "none";
    restPowerCost = Math.floor(25 * Math.pow(2.5, restPower));
    document.getElementById("effectiveRestCost").innerHTML = restPowerCost;    
}}

var sleepNanites = () => {
    if(number >= sleepPowerCost){
    number -= sleepPowerCost;
    sleepPower += 1;
    document.getElementById("numberValue").innerHTML = number;
    document.getElementById("upgrade3").style.display = "none";
    sleepPowerCost = Math.floor(25 * Math.pow(2.5, sleepPower));
    document.getElementById("sleepNaniteCost").innerHTML = sleepPowerCost ;    
}}


