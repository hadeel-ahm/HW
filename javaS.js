//Calculate area of a rectangle
var length =5;
var width =10;
var area = length * width;
console.log("The area of the rectangle is: "+area);

//The Temperature Converter from C to F
var celsius= 50;
var fahrenheit= (celsius/5)*9+32;
console.log("NN°C "+celsius+" is "+fahrenheit+ " NN°F");

//The Temperature Converter from F to C
console.log("NN°F "+fahrenheit+" is "+((fahrenheit-32)*5/9)+ " NN°C");


//************ */
//Loop
let Numbers = [23,54,32,87,47];
let sum=0;
for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i] ;
  }
console.log("The sum of the array is "+sum);


//Max number 
let numbers= [16,4,2,0,19,6];
let Max=numbers [0];
for(let i=0;i< numbers.length; i++){
if (Max<numbers[i+1]){
Max=numbers[i+1];
}
}
console.log("The Maximum number is "+Max);

//Reverse Array
console.log("Reverse Array")
let numbersArray= [1,2,3,4,5,6,7,8,9,10];
for(let i=numbersArray.length-1;i>= 0; i--){ 
  console.log(numbersArray[i]);
}

//stars pattern
console.log("stars pattern")
var line=7;
var stars="";
for(let i=0;i<line;i++){

    for(let j=0;j<=i;j++){
        stars +="*";
    }
    stars += "\n";
}
console.log(stars);