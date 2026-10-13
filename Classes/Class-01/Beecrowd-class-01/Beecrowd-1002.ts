//Data declaration
let inputR : string | null ;
let r : number;
let a : number;

//Data entry
inputR = prompt('Enter the radius value.');

//Data processing
if(inputR !== null){
    r = parseFloat(inputR);
    a = 3.14159 * r **2;
    console.log(a)
}
