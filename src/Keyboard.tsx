import styled from "styled-components";
const KEYS = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]
type KeyboardProps = {
    disabled? : boolean,
    activeLetter : string[],
    inactiveLetter : string[],
    addGuessLetter : ( letter:string ) => void
}


export function Keyboard({ 
    activeLetter,
    inactiveLetter,
    addGuessLetter,
    disabled = false,
  }:KeyboardProps) {
  return (
    <StyledGrid >
        {KEYS.map(key => {
            const isActive = activeLetter.includes(key)
            const isInActive = inactiveLetter.includes(key)
             return(
                 <Button key={key}
                 onClick={()=>addGuessLetter(key)}
                 className = {`${isActive?'active':''} ${isInActive?'inactive':''}`}
                 disabled = { isActive || isInActive || disabled }
                 >
                    {key}
                </Button>
             )
         })}
    </StyledGrid>

  );
}

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(13,1fr);
    gap: .5rem;
` 

const Button = styled.button`
    width: 3rem;
    height: 3rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: bold;
    background-color: #FFF;
    border-radius: 100%;
    /* border: 3px solid black; */
    border:none;
    cursor: pointer;
    &.active{
        background-color: darkturquoise;
        color: #FFF;
    }
    &.inactive{
        opacity: .25;
    }
    :hover,:focus{
         font-size:2.2rem;
         border: 3px solid gainsboro;
        /* background-color: lightblue; */
    }
    `


