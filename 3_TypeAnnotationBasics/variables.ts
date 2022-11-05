let movieTitle: string = "Amadeus"; // Declaring a variable
movieTitle = "Arrival";
movieTitle = 9; // Cannot assign number to movieTitle whose type is string
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
numCatLives = 'Hello'; // Cannot assign string to numCatLives whose type is number

let isEven: boolean = true;
isEven = false;
isEven = 123; // Cannot assign number to isEven whose type is boolean

// Type Inference
let tvShow = "Hello Google";
tvShow = "Goodbye Google";
tvShow = false; // It informs the error as the tvShow variable was first assign to string, thus has the string type

// The Any type: It allows the item to be anything
let anyThing: any = "hello";
anyThing = 12;
anyThing = true;
anyThing();

