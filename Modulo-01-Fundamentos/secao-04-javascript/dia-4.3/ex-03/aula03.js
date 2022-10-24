let player_01 = 'papel'
let player_02 = 'tesoura'

if (player_01 == 'pedra' && player_02 == 'tesoura' || player_01 == 'tesoura' && player_02 == 'papel' || player_01 == 'papel' && player_02 == 'pedra'){

    console.log('Player 1 venceu');
}
else if (player_02 == 'pedra' && player_01 == 'tesoura' || player_02 == 'tesoura' && player_01 == 'papel' || player_02 == 'papel' && player_01 == 'pedra'){
    
    console.log('Player 2 venceu')
}
else 
{
    console.log('Empate');
}
