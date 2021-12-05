//Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar) // (first value of array cars) >> Tesla
console.log(otherRandomCar) // (second value of array cars due to comma) cars[1] >> Mercedes




//Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name); 
console.log(otherName);
// >> Name is not defined. Reference ERROR




//Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

console.log(password); // >> 12345
console.log(hashedPassword); // >> not defined




//Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

console.log(first == second); // >> false 
console.log(first == third); // numbers[1]==numbers[8] >> True
console.log([,first])




//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key); // >> value
console.log(secondKey); // >> [1,5,1,8,3,3]
console.log(secondKey[0]); // (first element of array) >> 1
console.log(willThisWork); // (second element of array) >> 5

