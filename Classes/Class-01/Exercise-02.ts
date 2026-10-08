//Declaration of variables
let inputAge : string | null;
let age : number;

//Data input
inputAge = prompt('How old are you?');
if(inputAge !== null){
    age = parseInt(inputAge)
    if(age >= 16){
        console.log('You are eligible to get your drivers license!')
    }else{
        console.log(`You cant get your drivers license, ${16-age-} years remain.`)
    }
}
