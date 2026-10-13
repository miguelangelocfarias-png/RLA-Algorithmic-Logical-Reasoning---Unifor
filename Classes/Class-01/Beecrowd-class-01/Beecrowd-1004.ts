//Data declaration
let inputX : string | null ;
let inputY : string | null ;
let x : number;
let y : number;
let soma : string;

//Data entry
inputX = prompt('Enter a value:');
inputY = prompt('Enter  another value:');

//Data processing
if(inputX !== null && inputY !== null){
    x = parseFloat(inputX);
    y = parseFloat(inputY);
    soma = `Soma = ${x + y}`;
    console.log(soma)
}
