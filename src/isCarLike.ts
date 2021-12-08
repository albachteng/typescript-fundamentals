class CarLike {
    drive() console.log('vroom')
    make: string
    model: string
    year: number
}

function isCarLike(valueToTest: any): valueToTest is CarLike {
    return (
        valueToTest && 
        typeof valueToTest === 'object' && 
        "make" in valueToTest && 
        typeof valueToTest["make"] === "string" &&
        "model" in valueToTest && 
        typeof valueToTest["model"] === "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] === "number"
    )
}

// using guard
if (isCarLike(maybeCar) {
    maybeCar
}

function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
    //...
} 

