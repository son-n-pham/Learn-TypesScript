// Declarative function
function square(num: number) {
	return num * num;
}

square(3);

// Arrow function
const area = (side: number) => side*side;

// Multiple parameters
const areaRectangle = (width: number, height: number) => width * height;

// Default parameters
const areaRectangleDefaultParameter = (width: number = 10, height: number) => width * height;

// Return type of function

const volumeItem = (side: number): number | string => side**3;
console.log(volumeItem(3));

const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
	return color.toUpperCase()
})


// void type
function printTwice(msg: string): void {
	console.log('It is returning nothing');
}

// never type
// It represent values that NEVER occur. Use it to annotate functions
// which always throw an exception or never finishes executing.

// doesn't finish running
const neverStop = (): never => {
	while(true){
		console.log("I'm still running!");
	}
}

// throw an exception
const giveError = (msg: string): never => {throw new Error(msg)};