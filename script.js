const house = function(hhp){
this.houseHealthPoints = hhp;
}

const house1 = new house(20);

console.log(house1);

const repair = (val) =>{
    let number = val.houseHealthPoints;
    console.log(number)
    let barWidth = 49.5;
    val.houseHealthPoints = val.houseHealthPoints + 1;
    let barUpdate = val.houseHealthPoints / barWidth
    document.getElementById("h1rbf").style.width = barUpdate + "px";
    barWidth = barWidth - barUpdate;
    
}
