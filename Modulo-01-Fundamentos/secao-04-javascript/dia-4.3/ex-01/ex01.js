/* Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:*/
let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (let index = 0; index < fruits.length; index += 1) {
    soma += fruits[index]
}
if (soma <= 15) {
    console.log('Valor menor que 16');
}
else{
    console.log('Valor maior que 15');
}