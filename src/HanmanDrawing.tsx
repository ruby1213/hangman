import styled from "styled-components";

type HangmanDrawingProps = {
    numberOfGuesses : number
}

const HEAD = (<div style={{
    width:"60px",
    height: '60px',
    borderRadius: '100%',
    border: '10px solid black',
    position:'absolute',
    top: '50px',
    right: '-35px',
}}
 />  
)
const BODY = (<div style={{
    width:"10px",
    height: '100px',
    background: 'black',
    position:'absolute',
    top: '120px',
    right:0,
}}
/>)
const RIGHT_ARM = (<div style={{
    width:"90px",
    height: '10px',
    background: 'black',
    position:'absolute',
    top: '150px',
    right:'-90px',
    rotate:'-30deg',
    transformOrigin:'left bottom'
}}
/>)
const LEFT_ARM = (<div style={{
    width:"90px",
    height: '10px',
    background: 'black',
    position:'absolute',
    top: '150px',
    right:'10px',
    rotate:'30deg',
    transformOrigin:'right bottom'
}}
/>)
const RIGHT_LEG = (<div style={{
    width:"120px",
    height: '10px',
    background: 'black',
    position:'absolute',
    top: '210px',
    right:'-110px',
    rotate:'60deg',
    transformOrigin:'left bottom'
}}
/>)
const LEFT_LEG = (<div style={{
    width:"120px",
    height: '10px',
    background: 'black',
    position:'absolute',
    top: '210px',
    right:0,
    rotate:'-60deg',
    transformOrigin:'right bottom'
}}
/>)

const BODY_PARTS = [ HEAD, BODY, RIGHT_ARM, LEFT_ARM ,RIGHT_LEG, LEFT_LEG ]
const SPEEK = ['',"I'M COUNTING ON YOU",'YOU CAN DO THIS','TRY HARDER',"YOU'RE KILLING ME",'I AM DYING',"I'M DEAD"]

export function HanmanDrawing({ numberOfGuesses }:HangmanDrawingProps) {
  return (
    <Drawing>
        {BODY_PARTS.slice( 0, numberOfGuesses )}
        {<Speeking>{SPEEK[numberOfGuesses]}</Speeking>}
        <Rope/>
        <Top/>
        <Stick/>
        <Bottom/>
    </Drawing>
  );
}

/* ------ STYLE ------ */

const Drawing = styled.div`
    position: relative;
`
const Rope = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 10px;
    background-color: black;
`
const Top = styled.div`
margin-left: 120px;
    height: 10px;
    width: 200px;
    background-color: black;
`
const Stick = styled.div`
    margin-left: 120px;
    height: 400px;
    width: 10px;
    background-color: black;
`
const Bottom = styled.div`
    height: 10px;
    width: 250px;
    background-color: black;
`
const Speeking = styled.h3`
    position: absolute;
    top: 0;
    right:-140px;
    width: 80px;
    text-align: center;
`
/* ------  BODY  ------ */


