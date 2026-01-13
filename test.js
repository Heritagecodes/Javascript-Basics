

// SCOPE
// A Scope is the area of code between curly braces {  } or the area where a variable is accessible
// There are two types of scope
// 1. Global Scope - Variables declared outside any function or block
// 2. Local Scope - Variables declared inside a function or block



if (true){
    let name = "Adefolarin"
    console.log(name)    

}
console.log(name)

// This code would not work as let does not allow access to the variable name outside the block
// unllike var. It would be better to use let and const to avoid accidental overwriting of variables
