class UnreachableError extends Error {
    constructor(_nvr: never, message: string) {
        super(message)
    }
};

class Truck {
    tow() {
        console.log('dragging something');
    }
}

class Car {
    drive() {
        console.log('vroom vroom');
    }
}

class Boat {
    float() {
        console.log('I\'m on a boat!');
    }
}

type Vehicle = Truck | Car | Boat;

const obtainRandomVehicle = () => {
    const num = Math.ceil(Math.random() * 3);
    if (num === 1) return new Car();
    if (num === 2) return new Truck(); 
    if (num === 3) return new Boat();
}

let myVehicle: Vehicle = obtainRandomVehicle();

if (myVehicle instanceof Truck) {
    myVehicle.tow();
} else if (myVehicle instanceof Car) {
    myVehicle.drive();
} else {
    throw new UnreachableError(
        myVehicle,
        `unexpected vehicle type: ${myVehicle}`
    )
}