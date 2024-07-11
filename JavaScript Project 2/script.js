// Reverse a String
function reverseString(string){
    var reversed="";
    for (let i=string.length-1;i>=0;i--){
        reversed+=string[i];
    }
    return reversed;
}
console.log(reverseString(azerty));

// Count Characters
function countChar(string){
    var char_number=0;
    for (let i=0; i<string.length;i++){
        char_number+=1;
    }
    return char_number;
}
console.log("the number of characters is",countChar("counts the number of characters in a string"));

// Capitalize Words
function capitalize(string) {
    var cap_string = string.split(' ');
    for (let i = 0; i < cap_string.length; i++) {
     cap_string[i] = cap_string[i].charAt(0).toUpperCase() + cap_string[i].slice(1).toLowerCase();     
    }
    return cap_string.join(' '); 
   }
console.log(capitalize("capitalize first letter: Implement a function that capitaLizes the first letter of each word in a sentence"));

// Find Maximum and Minimum
function findMax(arr){
    var max=arr[0];
    for (let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            }
    }
    return max;
}
function findMin(arr){
    var min=arr[0];
    for (let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log("max_AND_min([30,2,85,2,-18,6,0,14,108,20,96,1]): max=",findMax([30,2,85,2,-18,6,0,14,108,20,96,1]),"min=",findMin([30,2,85,2,-18,6,0,14,108,20,96,1]));

// Sum of Array
function sumArray(arr){
    var sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log('sumArray([2,5,2,8,6])=',sumArray([2,5,2,8,6]))

// Filter Array: I will extract from array any element that is not a number
function filter(arr){
    var filterArray=[];
    for (let i=0;i<arr.length;i++){
        if(typeof(arr[i])==='number'&&!isNaN(arr[i])){
            filterArray.push(arr[i]);
        }
    }
    return filterArray;
}
console.log("filter([false,2,5,NaN,undefined,'apple',2,true,8,'b',6,'bnh5'])=",filter([false,2,5,NaN,undefined,'apple',2,true,8,'b',6,'bnh5']))

// Factorial
function factoriel(number){
    var f=1;
    for (let i=2;i<=number;i++){
        f=f*i;
    }
    return f;
}
console.log('factoriel(5)=',factoriel(5));

// Prime Number Check
function prime(number){
    for(let i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
        else{
            return true;
        }
    }
}
console.log('prime(55)=',prime(55));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function Fibonacci(number){
    var F=[0,1]
    for (let i=2;i<=number;i++){
        F[i]=F[i-2]+F[i-1];
        F.push(F[i]);
    }
    return F[number];
}
console.log('Fibonacci(11)=',Fibonacci(11));