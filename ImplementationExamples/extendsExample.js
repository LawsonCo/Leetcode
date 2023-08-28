class Building {
    constructor(height, location) {
        console.log("...construction in progress")
        this.height = height
        this.location = location
        this.occupants = 0
    }
    moveInPerson() {
        this.occupants = this.occupants + 1
    }
    moveInPeople(num_people) {
        this.occupants = this.occupants + num_people
    }
    windstorm() {
        console.log("Building is pretty sturdy, nothing happens")
    }
}

class CommercialBuilding extends Building{
    constructor(height, location, business_name) {
        super(height, location)
        console.log("Creating commercial property")
        this.business_name = business_name
    }
    serveCustomers() {
        console.log("customers are happy")
    }
    windstorm() {
        console.log("Goods get blown all over the place")
    }
}

var my_building = new Building("100m, Vancouver")
console.log(my_building)
console.log("Moving in person")
my_building.moveInPerson()
console.log(my_building)
console.log("Moving in 4 people")
my_building.moveInPeople(4)
console.log(my_building)
console.log("Oh no! Windstorm!")
my_building.windstorm

var my_commercial_building = new CommercialBuilding("50m", "Paris", "Trinkets & Such")
console.log(my_commercial_building)
console.log("Moving in 10 people (this is from superclass)")
my_commercial_building.moveInPeople(10)
console.log(my_commercial_building)
console.log("Serving customers (this is a new method)")
my_commercial_building.serveCustomers()
console.log("Oh no, windstorm! (This is an overriden method)")
my_commercial_building.windstorm()