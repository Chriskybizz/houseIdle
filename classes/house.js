export class House {
    constructor(
        houseId,
        houseCost,
        purchased,
        stageOneHp,
        stageTwoHp,
        stageThreeHp,
        currentHouseHp,
        stageOneValue,
        stageTwoValue,
        stageThreeValue,
        houseBio
    ) {
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