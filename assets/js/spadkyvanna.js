class Vehicle {
    constructor(dimensions, brand, model, manufactureDate) {
        
        this._dimensions = dimensions;
        this._brand = brand;
        this._model = model;
        this._manufactureDate = manufactureDate;
    }


getFullInfo() {
    return `${this._brand} ${this._model} ${this._manufactureDate}`; 
}


 get getAge() {
    return new Date().getFullYear() - this._manufactureDate.getFullYear();
   }
}

const vehicle = new Vehicle(
    '1435*1680*1410', 
    'Marsedes', 
    'Mersedes-Benz A',
    new Date(2015, 10, 3)
    );

console.log(vehicle);
console.log(vehicle.getFullInfo());
console.log(vehicle.getAge);


class PassengerTranspot extends Vehicle {
    constructor(
        dimensions, 
        brand, 
        model, 
        manufactureDate, 
        passengerLimit, 
        passengerCount,
     ) {

        super(dimensions, brand, model, manufactureDate);
        this._passengerLimit = passengerLimit;
        this._passengerCount = passengerCount;
    }

addPassenger(){
if (this._passengerLimit >= this._passengerCount){
    this._passengerCount++;
    return true;
} else {

    return false
}

}
getFullInfo() {
    return `${this._brand}, ${this._model}, ${this.getAge}, ${this._passengerLimit}`
}
}
const passengerTranspot = new PassengerTranspot(
    '2000*25000*1550', 
    'Bus', 
    'Opel',
    new Date(2020, 5, 9),
    6,
    4
     );
console.log(passengerTranspot.addPassenger());
console.log(passengerTranspot.getFullInfo());


    



