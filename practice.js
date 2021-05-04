// Intro

const calculateAgeInDogYears = (age) => {
    // (NOTE)Here we are setting ageInDogYears equal to age(parameter above) divded by 7.
    const ageInDogYears = age / 7
    // console.log(ageInDogYears)
    // (NOTE)this console.log will log the statement without return but is not a pure statement. you will still need calculateAgeInDogYears() at the bottom to enter a human age and get a console.log output

    // (NOTE)If return statement is removed it makes the statement undefined.
    return ageInDogYears
    // (NOTE)return will also not give you anything without console.log but it is reading it.
}

// (NOTE)This is calling your function
// calculateAgeInDogYears(56)
// const dogAge =
// (NOTE)removing const dogAge seems to throw no errors but gives me nothing/ i will need to activate the console.log() under the function instruction to get output.
const dogAge = calculateAgeInDogYears(22)

console.log(dogAge)


// Best In Show!!! (practice)

// (NOTE)DONT FORGET TO CONSOLE.LOG!!!
// Make sure to put === to make it absolutely equal to or the code wont work it will aloway be true-ish and give out the first input.

const myFavoriteDogBreed = (dogBreed) => {
    let myFavorite = dogBreed
    if (myFavorite === "meow") {
        return "I like cats";
    }
    else {

        return (`When it comes to pets, my favorite dog breed is ${myFavorite}.`)
    }
}
const favorite = myFavoriteDogBreed("pugs")
console.log(favorite)

// Addition

const add = (num1, num2, num3) => {
    console.log(num1 + num2 + num3)

}
// add(30, 3)
// add(40, 89)
add(252, 623, 713)
add(17, 4, 11)

// Self driving cars!!!
const cars = [
    {
        id: 1,
        direction: "Forward",
        speed: 45,
    },
    {
        id: 2,
        direction: "Backwards",
        speed: 8,
    },
    {
        id: 3,
        direction: "Circles",
        speed: 12,
    },
    {
        id: 4,
        direction: "Sideways",
        speed: 102,
    },
    {
        id: 5,
        direction: "Backwards",
        speed: 210,
    }
]
const go = (direction, speed) => {
    for (const car of cars) {
        if (car.speed > 75) {
            console.log(`The car is moving ${car.direction} at ${car.speed}mph. SLOW DOWN`);
        }
        else {
            console.log(`The car is moving ${car.direction} at ${car.speed}mph.`);
        }
    }
}
go()