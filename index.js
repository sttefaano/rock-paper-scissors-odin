// funcion que representa la jugada de la computadora
  //random return de las 3 posibles strings
// funcion que representa la jugada del usuario
  //pedirle al usuario que ingrese una jugada
  //pasar el string a lowercase para hacerlo case insensitive
  //return string.tolower ingresado
//funcion que compare las dos jugadas (computadora y usuario)
  //comparar las jugadas
  //devolver un ganador
//funcion que inicialice el juego (se tiene que jugar 5 veces y decidir un ganador)
  //loop para jugar 5 veces
  //variables para decidir el ganador

//funcion que genera la jugada de la computadora
const computerPlay = function (){
  //creamos un numero random para poder elegir un resultado
  let randNum = Math.floor(Math.random() * 100);
  //elegimos un resultado dependiendo el resultado random
  if(randNum < 33){
    return 'rock';
  }
  else if(randNum >= 33 && randNum < 66){
    return 'paper'
  }
  else{
    return 'scissors'
  }
}

//funcion que pide al usuario su jugada
const playerPlay = function(){
  let playerSelec = prompt('Select: rock/paper/scissors');
  //retornamos la eleccion del jugador en minuscula
  return playerSelec.toLowerCase();
}

//funcion que inicializa la ronda con las elecciones de cada competidors
const playRound = function(playerSelection, computerSelection){
  //comparamos las elecciones de ambos y retornamos un ganador de la ronda
  if (playerSelection == 'rock' && computerSelection == 'paper'){
    return 'computer';
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return 'player';
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'player';
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    return 'computer';
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    return 'computer';
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    return 'player';
  }
  else{
    return 'tie';
  }
}

//funcion que inicializa el juego
const game = function(){
  //declaramos la variables a utilizar
  let res = null;
  let compPoints = 0;
  let playerPoints = 0;

  //ciclado para que se jueguen las 5 rondas que dura la partida
  for(let i = 0; i<5; i++){
    res = playRound(playerPlay(),computerPlay());
    //chequeamos si hay empate para que la ronda se vuelva a jugar
    //si no hay empate, se verifica el ganador y se le suman los puntos
    if (res == 'tie'){
      if(i != 0){
        i--
      }
      else{
        i = 0;
      }
      console.log("it's a tie! go again")
    }
    else{
      console.log(res + ' wins');
      if (res == 'computer'){
        compPoints++;
      }
      else{
        playerPoints++;
      }
    }
  }

  //una vez terminada las 5 rondas sin empates verificamos quien tiene mas puntos
  //asi se muestra en pantalla el ganador
  if (playerPoints > compPoints){
    console.log(`Player wins! with: ${playerPoints}`);
  }
  else{
    console.log(`Computer wins! with: ${compPoints}`)
  }
}

game();