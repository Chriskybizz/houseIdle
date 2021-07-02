const config = {
    barWidth: 49.5,
    repairPower: 0.1,
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


const house1 = new house(100, 0, 700, true, 0.3, false, 0.6, false, 1);
const house2 = new house(500, 0, 1200, true, 1, false, 2, false, 5);

const repair = (val, elId, elId2) => {
    numberDivide = val.houseRepairedValue / config.barWidth;
    numberDivide2 = val.houseSecValue / config.barWidth;
    if (config.currency >= config.repairCost) {
        config.currency = config.currency - config.repairCost;
        document.getElementById("currencyNumber").innerHTML = Math.floor(config.currency);


        if (val.currentHouseHp < val.houseRepairedValue) {
            val.currentHouseHp = val.currentHouseHp + config.repairPower;
            document.getElementById(elId).style.width = val.currentHouseHp / numberDivide + "px";
            console.log(val.active2)
        }
        else if (val.currentHouseHp > val.active2Val) {
            val.active2 = true;
            console.log("act val 2 time")
            if (val.currentHouseHp < val.houseSecValue) {
                val.currentHouseHp = val.currentHouseHp + config.repairPower;
                document.getElementById(elId2).style.width = val.currentHouseHp / numberDivide2 + "px";

            }

        }
    }
}

const valueCheck = (houseToCheck) => {
    if (houseToCheck.active1 === true) {
        config.currency = config.currency + houseToCheck.active1Val;
        document.getElementById("currencyNumber").innerHTML = Math.floor(config.currency);
        config.ips = houseToCheck.active1Val;
        document.getElementById("ips").innerHTML = houseToCheck.active1Val;
    }
    if (houseToCheck.active2 === true) {
        config.currency = config.currency + houseToCheck.active2Val;
        document.getElementById("currencyNumber").innerHTML = Math.floor(config.currency);
        config.ips = houseToCheck.active2Val;
        document.getElementById("ips").innerHTML = config.ips;

    }

    if (houseToCheck.currentHouseHp === houseToCheck.houseSecValue) {
        houseToCheck.active3 = true;
        config.currency = config.currency + houseToCheck.active3Val;
        document.getElementById("currencyNumber").innerHTML = Math.floor(config.currency);
        config.ips = houseToCheck.active3Val;
        document.getElementById("ips").innerHTML = config.ips;
    }

}

const houseShow = () => {
    if (config.currency >= 100) {
        document.getElementById("houseTwo").style.display = "flex";
    }

}


const upgrade = (upgradeCostSpan, upgradeId, cost, rp, rc) => {
    if (cost <= config.currency) {
        config.currency = config.currency - cost;
        document.getElementById("currencyNumber").innerHTML = config.currency;
        document.getElementById(upgradeCostSpan).innerHTML = cost;



        if (rp !== "" && rc === "") {
            config.repairPower = config.repairPower + rp;
            console.log(config.repairPower)
        }
        if (rp === "" && rc !== "") {
            config.repairCost = config.repairCost - rc;
            console.log(config.repairCost)

        }
        document.getElementById(upgradeId).style.display = "none";

    }

}

const upgradeShow = (upVal, upName) => {
    if (config.currency > upVal) {
        document.getElementById(upName).style.display = "flex";
    }
}



window.setInterval(function () {
    valueCheck(house1);
    valueCheck(house2);
    houseShow();
    upgradeShow(10, "uc1")
    upgradeShow(30, "uc2")



}, 1000)
