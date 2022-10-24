let numero = 0
for (index = 2; index <= 150; index += 1)
{
    if (index % 3 == 0){
        numero += 1
    }

}

if (numero == 50)
{
    console.log("Mensagem secreta");
}