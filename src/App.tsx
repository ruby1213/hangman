import { useState , useEffect,useCallback  } from "react"
import styled from 'styled-components'
import words from './wordList.json'
//  COMPONENTS  //
import { HanmanDrawing } from "./HanmanDrawing";
import { HanmanWord } from "./HanmanWord";
import { Keyboard } from "./Keyboard";

function App() {

//////////////////////////////////////////////
//               DIFINE STATES              //
//////////////////////////////////////////////

const [wordToGuess, setWordToGuess] = useState(() => {
  // return words[0]
  return words[ Math.floor( Math.random() * words.length )]
});

const [guessLetters, setGuessLetters] = useState<string[]>([]);


const incorrectLetters = guessLetters.filter( letter => !wordToGuess.includes( letter ))

const isLoser = incorrectLetters.length >= 6
const isWinner = wordToGuess.split('').every(letter => guessLetters.includes(letter))




//////////////////////////////////////////////
//  CREATE A EVENT WHEN PRESS THE KEYBOARD  //
//////////////////////////////////////////////

const addGuessLetter = useCallback((letter:string) => {

     if (guessLetters.includes(letter) || isWinner || isLoser) return  //  --->  if the letter is already guessed
 
     setGuessLetters(currentLetters => [ ...currentLetters,letter ])  //  --->  otherwise 
  },[guessLetters,isWinner,isLoser]
);

useEffect(()=>{
  const handler = (e:KeyboardEvent)=>{
      const key = e.key
      // console.log(key)
      if(!key.match(/^[a-z]$/)) return //  ---> if pressed key !== A to Z 
      e.preventDefault()
      addGuessLetter(key)
  }
  document.addEventListener('keypress',handler)

  return ()=>{
    document.removeEventListener('keypress',handler)
  }
},[guessLetters])

// console.log(wordToGuess)
  return (
   <APP>
    <Title>
      {!isWinner && !isLoser && 
      <>
      <h2>HANGMAN</h2>
      <br/>
      </>
      }
      {isWinner && 
      <>
      <h2>YOU WIN 🥳🥳🥳</h2>
      <Link href="/">CONGRATULATIONS</Link>
      </>
      }
      {isLoser && 
      <>
        <h2>YOU LOSE 💀 💀 💀</h2>
        <Link href="/">BUT STILL...</Link>
      </>
      }
      </Title>
    <HanmanDrawing numberOfGuesses = {incorrectLetters.length}/>
    <HanmanWord 
      reveal={isLoser} 
      guessLetters = { guessLetters } 
      wordToGuess = { wordToGuess}/>
    <div style={{ display:"flex"}}>
      <Keyboard 
      disabled ={ isWinner || isLoser }
      activeLetter = { guessLetters.filter( letter => wordToGuess.includes(letter)) }
      inactiveLetter ={ incorrectLetters }
      addGuessLetter = { addGuessLetter }
      />
    </div>
   </APP>
  )
}

export default App


/* ------ STYLE ------ */

const APP = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin: 0 auto;
max-width: 800px;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`
const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  /* background-color: lightskyblue; */
  color:black;
  transition: .2s;
  /* border: 3px solid gainsboro; */
  padding: .5rem 1.5rem;
  border-radius: 30px;
  
  :hover{
    background-color: darkturquoise;
    border: none;
    color: #FFF;
    opacity: 1;
    font-size: 1.6rem;
  }
`