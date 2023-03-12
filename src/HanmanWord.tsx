type HangmanWordProps = {
  guessLetters : string[],
  wordToGuess : string,
  reveal?:boolean

}

export function HanmanWord({ guessLetters,wordToGuess,reveal=false }: HangmanWordProps) {

  return (
    <div style={{ 
      display:"flex",
      textAlign:'center',
      gap:'.25em',
      fontSize:'4rem',
      fontWeight:'bold',
      textTransform:'uppercase'
       }}>
      {wordToGuess.split("").map((letter,index) => (
        <span key={index} style={{ width:'4rem', borderBottom:'.1em solid black' }}>
          <span style={{
            visibility: guessLetters.includes(letter) || reveal
            ?'visible'
            :'hidden',
            color: !guessLetters.includes( letter ) && reveal? "tomato":"black" 
          }}>{letter}</span></span>
      ))}
    </div>
  );
}
