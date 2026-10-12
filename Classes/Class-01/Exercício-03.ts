//Declaration of variables
let inputNota1 :string | null;
let inputNota2 :string | null;
let inputNota3 :string | null;
let nota1 : number;
let nota2 : number;
let nota3 : number;
let media : number;
let sit : string;

//Data input
inputNota1 = prompt('Qual sua primeira nota?');
inputNota2 = prompt('Qual sua segunda nota?');
inputNota3 = prompt('Qual sua terceira nota?');

//Processamento de dados
if(inputNota1 !== null && inputNota2 !== null && inputNota3 !== null){
    nota1 = parseFloat(inputNota1);
    nota2 = parseFloat(inputNota2);
    nota3 = parseFloat(inputNota3);
    media = (nota1 + nota2 + nota3 )/3;
    if(media >= 6){
        sit = 'aprovado'
    }else{
        sit = 'em recuperação'
    }
    console.log(`Sua média é de :${media}. Você está ${sit}`);
}
