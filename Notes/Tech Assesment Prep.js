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