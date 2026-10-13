//Data declaration
let inputX : string | null ;
let inputY : string | null ;
let x : number;
let y : number;
let prod : string;

//Data entry
inputX = prompt('Enter a value:');
inputY = prompt('Enter  another value:');

//Data processing
if(inputX !== null && inputY !== null){
    x = parseFloat(inputX);
    y = parseFloat(inputY);
    prod = `PROD = ${x * y}`;
    console.log(prod)
}
