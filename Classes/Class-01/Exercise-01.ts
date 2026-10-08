//Declaração de variáveis
let entradaSalario: string | null;
let salario: number;
let aumento : number;

//Entrada de dados
entradaSalario = prompt('Digite seu salário atual:');
if(entradaSalario !== null){
    salario = parseFloat(entradaSalario);
    if(salario <= 500.00){
        aumento = salario * 0.20;
        console.log(`Seu salário terá um aumento de ${aumento} e será de ${salario + aumento.toFixed(2)}.`)
    }else{
        console.log(`Seu salário não terá aumento, continuará de ${salario}.`)
    }
}
