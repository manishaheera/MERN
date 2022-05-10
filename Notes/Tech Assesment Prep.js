//Tech Assesment Prep


// Fizzbuzz print all numbers from 1-100
// if number div by 3, print fizz instead,
// if number div by 5, print buzz instead,
// if number divisible by both 3 & 5, print fizzbuzz instead
function fizz(){
    for (var i=1; i<101; i++){
        if(i%3===0 && i%5===0){
            console.log('fizzbuzz'+i)
        } else if(i%3===0){
            console.log('fizz'+i)
        } else if(i%5===0){
            console.log('buzz')
        } else{
            console.log(i)
        }
    }
}

fizz();

// Input: n = 3
// Output: ["1","2","Fizz"]

var fizzBuzz = function(n) {
    array = []
    for(var i=1; i<=n; i++){
        if(i%3==0 && i%5==0){
            array.push("FizzBuzz")
        }
        else if(i%3==0){
            array.push("Fizz")
        }
        else if(i%5==0){
            array.push("Buzz")
        }
        else{
            array.push(i+'')
        }
    }
    return array
};

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
// Example(s)
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

//1. Use ASCII to keep track


// for every word in the list, [i] in list 
// word[0][i] index of ea


function commonChar(wordlist){
    characterList = []
    commonCharacters = []
    for(var i=0; i<wordlist[i].length; i++){
        for(var j=0; i<wordlist[i][j].length; j++){
            characterList.append(wordlist[i[j]])
            for(var x=0; x<characterList.length; x++){
                if(x === characterlist[x])
            }
        }
    }
}

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

var sortArrayByParity = function(nums) {
    odd = []
    even = []
    
    for(var i=0; i<nums.length; i++){
        if(nums[i]%2 === 0){
            even.push(nums[i])
        }
        else{
            odd.push(nums[i])
        }
    }
    newNums = [...even,...odd]
    return newNums
};

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(target === nums[i] + nums[j]){
                newList = [i,j]
                return newList
            }
        }
    }
};

function threesum(nums) {
    newList = []
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            for(var k=j+1; k<nums.length; k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                    newList = [nums[i],nums[j],nums[k]]
                    return newList
                }
                else{
                    return newList
                }
            }
        }
    }


console.log(threesum([0,0,0]))


function findMultiple() {
    sum = 0
    for(let i=3; i<1000; i++){
        if(i%3===0 || i%5===0){
            sum = sum + i
        }
    }
    return sum
}

console.log(findMultiple())


function Fibonacci() {
    sum = 0
    evenSum = 0
    list = [1,2]

    for(var i=1; i<4000000; i++){
        sum =list[i-1]+list[i] 
        list.push(sum)
    }
    return evenSum
}

console.log(Fibonacci());

// add values to front or end of array
// es6

var myArray = ['a','b','c','d']
newArray = ['start',...myArray,'end'] // spread operators
console.log(newArray)


// myArray.push("end")
// myArray.unshift("start")

// Roman to Int

var romanToInt = function(s) {
    var roman = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    sum = 0;
    for(let i=0; i<s.length; i++){
        let current = roman[s.charAt(i)];
        let next = roman[s.charAt(i+1)];
        
        if (next){
            if (current >= next){
                sum += current
            }
            else{
                sum +=(next-current)
                i++
            } 
        }
        else{
            sum += current
            }
        }

    return sum
};

console.log(romanToInt('VLCM'));


//Hashtable typically irreversible, deterministic, same input should have same output

function hashStringToInt(s) {
    let hash = 
}

class Hashtable {
    table = new Array(100)

    setItem = (key, value) => {
        const idx = hashStringToInt(key)
        this.table[idx] = value
    };
    getItem = key => {
        const idx = hashStringToInt(key)
        return this.table[idx];
    };
}

const myTable = new Hashtable();
myTable.setItem("firstName","Bob");
myTable.getItem("firstName");
console.log(myTable.getItem("firstName"))




// create private variable in Javascript
//must reassign

function secret(){
    var private = "super secret";

    return function(){
        return private
    }
}

var getPrivate = secret();
console.log(getPrivate())















































