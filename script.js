const config = {
    barWidth: 49.5,
    repairPower: 1,
    currency: 0,
    repairCost: 1,
    ips: 0

}

class house {
    constructor(houseId, houseCost, stageOneHp, stageTwoHp, stageThreeHp, currentHouseHp, stageOneValue, stageTwoValue, stageThreeValue, houseBio) {

        this.houseId = houseId;
        this.houseCost = houseCost;
        this.stageOneHp = stageOneHp;
        this.stageTwoHp = stageTwoHp;
        this.stageThreeHp = stageThreeHp;
        this.currentHouseHp = currentHouseHp;
        this.stageOneValue = stageOneValue;
        this.stageTwoValue = stageTwoValue;
        this.stageOThreeValue = stageThreeValue;
        this.houseBio = houseBio;


    }
}

const houseArray = [
    house1 = new house("houseOne", 100, 75, 500, 100, 0, 0.3, 0.7, 1.5, "A shack, four wooden walls and and a roof. Perfect for hipsters"),
    house2 = new house("houseTwo", 1000, 500, 800, 1200, 0, 1.2, 2.5, 5, "")]

const whenTheHouseShows = (arr) => {
    for (i = 0; i < arr.length; i++) {
        if (config.currency > arr[i].houseCost) {
            document.getElementById(arr[i].houseId).style.display = "flex";

        }

    }
}

const repair = (houseToRepair, finishBar) => {

    if (houseArray[houseToRepair].currentHouseHp < houseArray[houseToRepair].stageOneHp) {
        houseArray[houseToRepair].currentHouseHp += config.repairPower;
        console.log(houseArray[houseToRepair].currentHouseHp)
        const valueToUse = houseArray[houseToRepair].currentHouseHp/(houseArray[houseToRepair].stageOneHp/config.barWidth)
        document.getElementById(finishBar).style.width = valueToUse + "px"
    }
    if (houseArray[houseToRepair].currentHouseHp >= houseArray[houseToRepair].stageOneHp) {
        houseArray[houseToRepair].currentHouseHp += config.repairPower;
        console.log(houseArray[houseToRepair].currentHouseHp)
        const valueToUse = houseArray[houseToRepair].currentHouseHp/(houseArray[houseToRepair].stageTwoHp/config.barWidth)
        document.getElementById(finishBar).style.width = valueToUse + "px"
    }

}







window.setInterval(function () {

    whenTheHouseShows(houseArray);


}, 1000)
