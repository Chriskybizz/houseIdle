const config = {
    barWidth: 49.5,
    repairPower: 0.3,
    currency: 100,
    repairCost: 1,
    workPower: 0.3,

}
console.log(config[4])

const upgrader = (upgradeId,cost, valToUpgrade, upgradeBy) => {
    if (config.currency >= cost) {
        config.currency -= cost;
        config[valToUpgrade] += upgradeBy;
        document.getElementById("currencyNumber").innerHTML = config.currency;
        document.getElementById(upgradeId).style.display = "none";
        console.log(config.valToUpgrade)
    }
}

class house {
    constructor(houseId, houseCost, purchased, stageOneHp, stageTwoHp, stageThreeHp, currentHouseHp, stageOneValue, stageTwoValue, stageThreeValue, houseBio) {

        this.houseId = houseId;
        this.houseCost = houseCost;
        this.purchased = purchased;
        this.stageOneHp = stageOneHp;
        this.stageTwoHp = stageTwoHp;
        this.stageThreeHp = stageThreeHp;
        this.currentHouseHp = currentHouseHp;
        this.stageOneValue = stageOneValue;
        this.stageTwoValue = stageTwoValue;
        this.stageThreeValue = stageThreeValue;
        this.houseBio = houseBio;


    }
}

const houseArray = [
    house1 = new house("houseOne", 100, false, 100, 500, 1000, 0, 0.3, 0.7, 1.5, "A small cardboard box to protect against the elements"),
    house2 = new house("houseTwo", 1000, false, 500, 800, 1200, 0, 1.2, 2.5, 5, "A shack, four wooden walls and and a roof. Perfect for hipsters")]

const whenTheHouseShows = (arr) => {
    for (i = 0; i < arr.length; i++) {
        if (config.currency > arr[i].houseCost) {
            document.getElementById(arr[i].houseId).style.display = "flex";

        }

    }
}


const refreshValues = () => {
    let currencyTwoDP = config.currency.toFixed(2);
    document.getElementById("currencyNumber").innerHTML = currencyTwoDP;
}

const incomeFromHouse = (arr) => {
    for (x = 0; x < arr.length; x++) {
        if (arr[x].purchased === true) {
            config.currency += arr[x].stageOneValue;
            if (arr[x].currentHouseHp >= arr[x].stageOneHp) {
                config.currency += arr[x].stageTwoValue;
            }
            if (arr[x].currentHouseHp >= arr[x].stageTwoHp) {
                config.currency += arr[x].stageThreeValue;

            }
        }

    }
}

const clicker = () => {
    config.currency += config.workPower;
    document.getElementById("currencyNumber").innerHTML = config.currency;
}

const purchase = (houseId, buttonId) => {
    if (config.currency >= houseArray[houseId].houseCost) {
        config.currency -= houseArray[houseId].houseCost;
        houseArray[houseId].purchased = true;
        document.getElementById(buttonId).style.background = "green";
        document.getElementById("currencyNumber").innerHTML = config.currency;
    }
}

const repair = (houseToRepair, finishBar) => {
    if (config.currency >= config.repairCost) {
        config.currency -= config.repairCost
        if (houseArray[houseToRepair].currentHouseHp < houseArray[houseToRepair].stageOneHp) {
            houseArray[houseToRepair].currentHouseHp += config.repairPower;
            console.log(houseArray[houseToRepair].currentHouseHp)
            const valueToUse = houseArray[houseToRepair].currentHouseHp / (houseArray[houseToRepair].stageOneHp / config.barWidth)
            document.getElementById(finishBar).style.width = valueToUse + "px"
        }
        if (houseArray[houseToRepair].currentHouseHp >= houseArray[houseToRepair].stageOneHp && houseArray[houseToRepair].currentHouseHp < houseArray[houseToRepair].stageTwoHp) {
            houseArray[houseToRepair].currentHouseHp += config.repairPower;
            console.log(houseArray[houseToRepair].currentHouseHp)
            const valueToUse = houseArray[houseToRepair].currentHouseHp / (houseArray[houseToRepair].stageTwoHp / config.barWidth)
            document.getElementById(finishBar).style.width = valueToUse + "px"
        }

        if (houseArray[houseToRepair].currentHouseHp >= houseArray[houseToRepair].stageTwoHp && houseArray[houseToRepair].currentHouseHp < houseArray[houseToRepair].stageThreeHp) {
            houseArray[houseToRepair].currentHouseHp += config.repairPower;
            console.log(houseArray[houseToRepair].currentHouseHp)
            const valueToUse = houseArray[houseToRepair].currentHouseHp / (houseArray[houseToRepair].stageThreeHp / config.barWidth)
            document.getElementById(finishBar).style.width = valueToUse + "px"
        }

        document.getElementById("currencyNumber").innerHTML = config.currency;
    }
}

window.setInterval(function () {
    refreshValues();
    incomeFromHouse(houseArray);
    whenTheHouseShows(houseArray);


}, 1000)
