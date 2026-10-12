//Data declaration
let inputA : string | null;
let inputB : string | null;
let a : number;
let b : number;
let x : number;

//Data entry
inputA = prompt('Enter a number:');
inputB = prompt('Enter another number:');

//Data processing
if(inputA !== null && inputB !== null){
  a = parseFloat(inputA);
  b = parseFloat(inputB)
  x = a + b;
  console.log(x);
}else{
  console.log('Invald input')
}
