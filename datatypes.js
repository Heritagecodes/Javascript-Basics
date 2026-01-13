// REFERENCE DATA TYPES

// Arrays, Objects and Sets
//Arrays- An array is a type of data structure that can hold or store multiple types of data e.g number, string, boolean
let array1 = []
let agesArray = [10,20,40,50,60,90,100]
let namesArray = ['Adefolarin', 'James', 'John', 'Mary', 'Linda',]
let AdefolarinArray = [ "Adefolarin", 30, "male", "red", true]

console.log(agesArray[0]) //This gives the first element in the array as indexing starts from zero

console.log(namesArray)

//Array Length
// console.log(agesArray.length)

//To get values from an array
// console.log(agesArray[3])

//To get the last value from an array
// console.log(agesArray[agesArray.length -1])

agesArray.push(500);
// console.log(agesArray)

// How to add values to an array
agesArray.push(700); //This adds 700 to the end of the array
// console.log(agesArray)
agesArray.unshift(5); //This adds 5 to the beginning of the array
// console.log(agesArray)

// How to remove values from an array
agesArray.pop(); //This removes the last element from the array
// console.log(agesArray[agesArray.length -1])
agesArray.shift(); //This removes the first element from the array
// console.log(agesArray)


// Objects
let personObject = {
    name : "Adefolarin",
    age : 30,
    isMarried : false,
    favClub : "Barcelona",
}
personObject.favColor = "Red" //Adding a new property to the object


// Operations on Objects
console.log(personObject.name)
// You get undefined if the property does not exist
console.log(personObject.height) //undefined
console.log(personObject.favColor) //Red