let status_pessoa = "lista"

switch(status_pessoa){
    case "Aprovado":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    
    case "lista":
        console.log("Esta na lista de espera");
        break;

    case "reprovado":
        console.log("Voce foi reprovado");
        break;

    default:
        console.log("Informação incorreta");     
}