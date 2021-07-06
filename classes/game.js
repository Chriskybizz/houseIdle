import { House } from "./house";

export class Game {
    constructor(
        barWidth,
        repairPower,
        currency,
        repairCost,
        workPower,
        houseConfigArray,
    ) {
        this.barWidth = barWidth ? barWidth : 49.5;
        this.repairPower = repairPower ? repairPower : 0.3;
        this.currency = currency ? currency : 0;
        this.repairCost = repairCost ? repairCost : 5;
        this.workPower = workPower ? workPower : 0.3;
        this.houses = houseConfigArray.length ? houseConfigArray.map((house) => new House(
            house.houseId,
            house.houseCost,
            house.purchased,
            house.stageOneHp,
            house.stageTwoHp,
            house.stageThreeHp,
            house.currentHouseHp,
            house.stageOneValue,
            house.stageTwoValue,
            house.stageThreeValue,
            house.houseBio
        )) : []; // map returned house(class) objects
    }
}