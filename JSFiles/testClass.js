class DeskPlant {
    constructor(vitality, hydration) {
        this.vitality = vitality;
        this.hydration = hydration;
    }
    water() {
        this.hydration = "Full"
    }
}

var myDeskplant = new DeskPlant("Very green", "Thirsty")
console.log(myDeskplant)
myDeskplant.water()
console.log(myDeskplant)
console.log(myDeskplant.toString())

class Animal {
    constructor (diet, hasFur, disposition) {
        this.diet = diet
        this.hasFur = hasFur
        this.disposition = disposition
    }
    roar() {
        console.log("Roooaar")
    }
    describe() {
        
    }
}