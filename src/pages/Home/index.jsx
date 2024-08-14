import React, { useState, useEffect } from 'react'
import styles from'./Home.module.css'


function Home() {
  const [player, setPlayer] = useState(null) // Estado para a escolha do jogador
  const [bot, setBot] = useState(null) // Estado para a escolha do computador
  const [result, setResult] = useState('') // Estado para armazenar o resultado do jogo
  const [gameOver, setGameOver] = useState(false)
  const [playerWins, setPlayerWins] = useState(0); // Estado para armazenar as vitórias do jogador
  const [computerWins, setComputerWins] = useState(0); // Estado para armazenar as vitórias do computador
  const [ties, setTies] = useState(0)

  const choices = ['Pedra', 'Papel', 'Tesoura']
 
  // useEffect para determinar o resultado do jogo sempre que player ou bot mudar
  useEffect(() => {
    if (player && bot) {
      if (player === bot) {
        setResult('Empate')
        setTies(ties + 1)
      } else if (
        (player === 'Pedra' && bot === 'Tesoura') ||
        (player === 'Papel' && bot === 'Pedra') ||
        (player === 'Tesoura' && bot === 'Papel')
      ) {
        setResult('Você Ganhou!')
        setPlayerWins(playerWins + 1); // Incrementa o número de vitórias do jogador
    } else {
      setResult('Você perdeu!');
      setComputerWins(computerWins + 1); // Incrementa o número de vitórias do computador
      }
      setGameOver(true)}
  }, [player, bot])

  // Função para lidar com a escolha do jogador
  const playerGo = (choice) => {
    setPlayer(choice) // Define a escolha do jogador
    setResult('') // Reseta o resultado anterior
    setGameover(false)
  }

  // Função para a escolha do computador após confirmação
  const botGo = () => {
    if (!gameOver){
    const randomChoice = choices[Math.floor(Math.random() * choices.length)] // Escolha aleatória do computador
    setBot(randomChoice) // Define a escolha do computador
    }
  }

  const resetGame = () => {
    setPlayer(null);
    setBot(null);
    setResult('');
    setGameOver(false);
  }

  return (
    <div>
      <h1>Pedra, Papel, Tesoura</h1>
      <div>
        <button onClick={() => playerGo('Pedra')} disabled={gameOver}>Pedra</button>
        <button onClick={() => playerGo('Papel')} disabled={gameOver}>Papel</button>
        <button onClick={() => playerGo('Tesoura')} disabled={gameOver}>Tesoura</button>
      </div>
      <div>
        <p>Você escolheu: {player}</p>
        <button onClick={botGo} disabled={!player || gameOver}>
          Confirmar Escolha
        </button>
      </div>
      <div>
        <p>Computador escolheu: {bot}</p>
        <p>{result}</p>
      </div>
      <div>
      <p>Placar:</p>
        <p>Jogador: {playerWins}</p>
        <p>Computador: {computerWins}</p>
        <p>Empates: {ties}</p>
      </div>
      {gameOver && <button onClick={resetGame}>Jogar Novamente</button>}
    </div>
  )
}
export default Home

