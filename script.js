const config = {
    barWidth: 49.5,
    repairPower: 1,
    currency: 0,
    repairCost: 1,
    ips: 0

}

const house = function (hhp, chhp, nextHp, active1, act1Val, active2, act2Val, active3, act3Val) {
    this.houseRepairedValue = hhp;
    this.currentHouseHp = chhp;
    this.houseSecValue = nextHp;
    this.active1 = active1;
    this.active1Val = act1Val;
    this.active2 = active2;
    this.active2Val = act2Val;
    this.active3 = active3;
    this.active3Val = act3Val;


}

const house1 = new house(20, 0, 70, true, 0.3, false, 0.6, false, 1);

const repair = (val) => {
    numberDivide = val.houseRepairedValue / config.barWidth;
    numberDivide2 = val.houseSecValue / config.barWidth;
    if (config.currency  >= config.repairCost) {
        config.currency = config.currency - config.repairCost;
        document.getElementById("currencyNumber").innerHTML = Math.floor(config.currency);


        if (val.currentHouseHp < val.houseRepairedValue) {
            val.currentHouseHp = val.currentHouseHp + config.repairPower;
            document.getElementById("h1rbf").style.width = val.currentHouseHp / numberDivide + "px";
        }
        else if (val.currentHouseHp >= val.houseRepairedValue) {

            if (val.currentHouseHp < val.houseSecValue) {
                val.active2 = true;
                val.currentHouseHp = val.currentHouseHp + config.repairPower;
                document.getElementById("h1rbf2").style.width = val.currentHouseHp / numberDivide2 + "px";
                console.log("Active 2 true")
            }

        }
    }
}

const valueCheck = (houseToCheck) => {
    if (houseToCheck.active1 = true) {
        config.currency = config.currency + houseToCheck.active1Val;
        document.getElementById("currencyNumber").innerHTML = Math.floor(config.currency);
        config.ips = houseToCheck.active1Val;
        document.getElementById("ips").innerHTML = config.ips;
    }
    if (houseToCheck.active2 = true) {
        config.currency = config.currency + houseToCheck.active2Val;
        document.getElementById("currencyNumber").innerHTML = Math.floor(config.currency);
        config.ips = houseToCheck.active2Val;
        document.getElementById("ips").innerHTML = config.ips;
    console.log(true)
    }

    if(houseToCheck.currentHouseHp === houseToCheck.houseSecValue){
        console.log(true);
        config.currency = config.currency + houseToCheck.active3Val;
        document.getElementById("currencyNumber").innerHTML = Math.floor(config.currency);
        config.ips = houseToCheck.active3Val;
        document.getElementById("ips").innerHTML = config.ips;
    }

}

window.setInterval(function () {
valueCheck(house1);

}, 1000)
