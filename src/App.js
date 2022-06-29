import React, {useState, useEffect, useRef} from 'react';
import useWordGame from './hooks/useWordGame';
//change game to start running when the user starts typing if he doesnt do that in the course

function App() {
 
  const {
    inputRef,
     handleChange, 
     gameStart, 
     timeRemaining, 
     wordCount, 
     pressedChars, 
     handleWordCount
  } = useWordGame()


  return (
    <div className="App">
<h1>Do You Type Fast?</h1>

<form>
  <textarea
type='text'
value={pressedChars.word}
name='type here'
placeholder='Begin typing here'
onChange={handleChange}
disabled={!gameStart}
ref={inputRef}
/>
</form>

<h4>Time Remaining: {timeRemaining} </h4>
<button onClick={()=> handleWordCount()} disabled={gameStart}>Start Game</button>
<h1>Word Count: {wordCount} </h1>
    </div>
  );
}

export default App;
