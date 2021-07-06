import { Game } from "./classes/game";
import { House } from "./classes/house";
import { config, houseArray } from "./config";

const game = new Game(
    config.barWidth,
    config.repairPower,
    config.currency,
    config.repairCost,
    config.workPower,
    houseArray,
)
class upgrade {
    constructor(cycler, id, cost, purchased, effect, bio) {
        this.cycler = cycler;
        this.id = id;
        this.cost = cost;
        this.purchased = purchased;
        this.effect = effect;
        this.bio = bio;
    }
}




const upgradeArray = [
    // Convert to map of upgradeConfigArray
    softGloves = new upgrade(0, "softGloves", 5, false, 0.1, "A pair of thin, fabric gloves"),
    thickGloves = new upgrade(1, "thickGloves", 10, false, 0.2, "A thicker set of gloves"),
    sturdyGloves = new upgrade(2, "sturdyGloves", 20, false, 0.5, "A sturdy pair of gloves"),
    softBoots = new upgrade(3, "softBoots", 50, false, 1, "Basically Socks"),
    thickBoots = new upgrade(4, "thickBoots", 90, false, 2, "Better Boots"),
    sturdyBoots = new upgrade(5, "sturdyBoots", 150, false, 4, "Regulation work boots"),
    softWristSupport = new upgrade(6, "softWristSupport", 300, false, 9, "bandages"),
    thickWristSupport = new upgrade(7, "thickWristSupport", 700, false, 15, "Thicker wrist support"),
    sturdyWristSupport = new upgrade(8, "sturdyWristSupport", 1600, false, 25, "Proper wrist support"),
    aTrowel = new upgrade(9, "aTrowel", 150, false, 0.1, "A trowel for cement"),
    aHammer = new upgrade(10, "aHammer", 300, false, 0.2, "A hammer to save time"),
    aDrill = new upgrade(11, "aDrill", 500, false, 0.5, "A drill"),
    spiritLevel = new upgrade(12, "spiritLevel", 50, false, 1, "Keep it level"),
    elbowGrease = new upgrade(13, "elbowGrease", 90, false, 2, "EG40"),
    aPick = new upgrade(14, "aPick", 150, false, 4, "For breaking rocks"),
    jackHammer = new upgrade(15, "jackHammer", 300, false, 9, "Smashing rocks"),
    cementMixer = new upgrade(16, "cementMixer", 700, false, 15, "Mixing cement, saving time"),
    powerDrill = new upgrade(17, "powerDrill", 1600, false, 25, "The daddy drill"),

]

const upgradeInfo = (cycler, id) => {
    const infoText = `cost: ${upgradeArray[cycler].cost}, \n Description: ${upgradeArray[cycler].bio},\
    \n Job Income +: ${upgradeArray[cycler].effect}`
    document.getElementById(id).innerHTML = infoText;
    console.log(infoText)
}

/*const houseList = (houseCycle, houseElId) => {
    const HouseInfo = `Description: ${houseArray[houseCycle].houseBio}
                       Income Generated when purchased: ${houseArray[houseCycle].houseBio} `
    document.getElementById(houseElId).innerHTML = HouseInfo; 
} */

//refreshing values

const whenTheUpgradeShows = (arr) => {
    for (j = 0; j < arr.length; j++) {
        if (game.currency >= arr[j].cost && arr[j].purchased === false) {
            document.getElementById(arr[j].id).style.display = "flex";
        }
    }

}

const whenTheHouseShows = (arr) => {
    for (i = 0; i < arr.length; i++) {
        if (game.currency > arr[i].houseCost) {
            document.getElementById(arr[i].houseId).style.display = "flex";
        }

    }
}

const refreshValues = () => {
    let currencyTwoDP = game.currency.toFixed(2);
    let repairCostTwoDP = game.repairCost.toFixed(2);
    let workPowerTwoDP = game.workPower.toFixed(2);
    let repairPowerTwoDP = game.repairPower.toFixed(2);
    document.getElementById("currencyNumber").innerHTML = currencyTwoDP;
    document.getElementById("repairCostId").innerHTML = repairCostTwoDP;
    document.getElementById("repairPowerId").innerHTML = repairPowerTwoDP;
    document.getElementById("workPowerId").innerHTML = workPowerTwoDP;
}

const incomeFromHouse = (arr) => {
    for (x = 0; x < arr.length; x++) {
        if (arr[x].purchased === true) {
            game.currency += arr[x].stageOneValue;
            if (arr[x].currentHouseHp >= arr[x].stageOneHp) {
                game.currency += arr[x].stageTwoValue;
            }
            if (arr[x].currentHouseHp >= arr[x].stageTwoHp) {
                game.currency += arr[x].stageThreeValue;

            }
        }

    }
}

//onclicks

const clicker = () => {
    game.currency += game.workPower;
    document.getElementById("currencyNumber").innerHTML = game.currency.toFixed(2);
}

const purchase = (houseId, buttonId) => {
    if (game.currency >= houseArray[houseId].houseCost) {
        game.currency -= houseArray[houseId].houseCost;
        houseArray[houseId].purchased = true;
        document.getElementById(buttonId).style.background = "green";
        document.getElementById("currencyNumber").innerHTML = game.currency.toFixed(2);
    }
}

const repair = (houseToRepair, finishBar) => {
    let valueToUse;

    if (game.currency >= game.repairCost) {
        game.currency -= game.repairCost
        if (houseArray[houseToRepair]) {
            houseArray[houseToRepair].currentHouseHp += game.repairPower;
            if (houseArray[houseToRepair].currentHouseHp < houseArray[houseToRepair].stageOneHp) {
                console.log(houseArray[houseToRepair].currentHouseHp)
                valueToUse = houseArray[houseToRepair].currentHouseHp / (houseArray[houseToRepair].stageOneHp / game.barWidth)
            }

            if (houseArray[houseToRepair].currentHouseHp >= houseArray[houseToRepair].stageOneHp && houseArray[houseToRepair].currentHouseHp < houseArray[houseToRepair].stageTwoHp) {
                console.log(houseArray[houseToRepair].currentHouseHp)
                valueToUse = houseArray[houseToRepair].currentHouseHp / (houseArray[houseToRepair].stageTwoHp / game.barWidth)
            }

            if (houseArray[houseToRepair].currentHouseHp >= houseArray[houseToRepair].stageTwoHp && houseArray[houseToRepair].currentHouseHp < houseArray[houseToRepair].stageThreeHp) {
                console.log(houseArray[houseToRepair].currentHouseHp)
                valueToUse = houseArray[houseToRepair].currentHouseHp / (houseArray[houseToRepair].stageThreeHp / game.barWidth)
            }
        }

        document.getElementById(finishBar).style.width = valueToUse ?
            `${valueToUse}px` :
            document.getElementById(finishBar).style.width;
        document.getElementById("currencyNumber").innerHTML = game.currency.toFixed(2);
    }
}

//upgrades

const upgraderWP = (cycler) => {
    if (game.currency >= upgradeArray[cycler].cost) {
        game.currency -= upgradeArray[cycler].cost;
        document.getElementById("currencyNumber").innerHTML = game.currency.toFixed(2);
        upgradeArray[cycler].purchased = true;
        game.workPower += upgradeArray[cycler].effect;
        document.getElementById("workPowerId").innerHTML = game.workPower.toFixed(2);
        document.getElementById(upgradeArray[cycler].id).style.display = "none";

    }
}

const upgraderRP = (cycler) => {
    if (game.currency >= upgradeArray[cycler].cost) {
        game.currency -= upgradeArray[cycler].cost;
        document.getElementById("currencyNumber").innerHTML = game.currency.toFixed(2);
        upgradeArray[cycler].purchased = true;
        game.repairPower += upgradeArray[cycler].effect;
        const elemvar = "repairPowerId"
        document.getElementById(elemvar).innerHTML = game.workPower.toFixed(2);
        document.getElementById(upgradeArray[cycler].id).style.display = "none";

    }
}

const upgraderRC = (cycler) => {
    if (game.currency >= upgradeArray[cycler].cost) {
        game.currency -= upgradeArray[cycler].cost;
        document.getElementById("currencyNumber").innerHTML = game.currency.toFixed(2);
        upgradeArray[cycler].purchased = true;
        game.repairCost += upgradeArray[cycler].effect;
        document.getElementById("repairCostId").innerHTML = game.workPower.toFixed(2);
        document.getElementById(upgradeArray[cycler].id).style.display = "none";

    }
}

window.setInterval(function() {
    refreshValues();
    incomeFromHouse(houseArray);
    whenTheHouseShows(houseArray);
    whenTheUpgradeShows(upgradeArray);
    upgradeInfo(0, "test1");
    upgradeInfo(1, "test2");
    upgradeInfo(2, "test3");
    upgradeInfo(3, "test4");
    upgradeInfo(4, "test5");
    upgradeInfo(5, "test6");
    upgradeInfo(6, "test7");
    upgradeInfo(7, "test8");
    upgradeInfo(8, "test9");
    upgradeInfo(9, "test10");
    upgradeInfo(10, "test11");
    upgradeInfo(11, "test12");
    upgradeInfo(12, "test13");
    upgradeInfo(13, "test14");
    upgradeInfo(14, "test15");
    upgradeInfo(15, "test16");
    upgradeInfo(16, "test17");
    upgradeInfo(17, "test18");


}, 1000)