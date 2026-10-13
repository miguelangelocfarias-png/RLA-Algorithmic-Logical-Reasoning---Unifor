//Data declaration
let inputX : string | null ;
let inputY : string | null ;
let x : number;
let y : number;
let media : string;

//Data entry
inputX = prompt('Enter a value:');
inputY = prompt('Enter  another value:');

//Data processing
if(inputX !== null && inputY !== null){
    x = parseFloat(inputX);
    y = parseFloat(inputY);
    media = `MEDIA = ${(((x * 3.5) + (y * 7.5))/ 11).toFixed(2)}`;
    console.log(media)
}
