let impostoINNS;
let impostoIR;
const salarioBruto = 4000.10

if (salarioBruto <= 1559.94 ){
    impostoINNS = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    impostoINNS = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    impostoINNS = salarioBruto * 0.11;
}
else {
    impostoINNS = 570.88
}

if (salarioBruto <= 1903.98){
    impostoIR = 0
}
else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65){
    impostoIR = (salarioBruto * 0.075) - 142.80;
}
else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    impostoIR = (salarioBruto * 0.15) - 354,80;
}
else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    impostoIR = (salarioBruto * 0.225) - 636.13;
}
else{
    impostoIR = (salarioBruto * 0.275) - 869.36;
}

const salarioParcial = (salarioBruto - impostoINNS)
const salariofinal = (salarioParcial - impostoIR)
console.log ("Salario é " + salariofinal)
