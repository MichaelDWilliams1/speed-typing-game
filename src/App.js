import React, {useState, useEffect} from 'react';

//change game to start running when the user starts typing if he doesnt do that in the course
//change
function App() {

const [pressedChars, setPressedChars] = useState({
  word: ''
})
const [wordCount, setWordCount] = useState(0)
const [timeRemaining, setTimeRemaining] = useState(10)
const [gameStart, setGameStart] = useState(false)

const handleChange = (event) => {
  setPressedChars(prev => ({
...prev,
word: event.target.value
  }))
}

const handleWordCount = (text) => {
 setTimeRemaining(10)
 setWordCount(0)
 setPressedChars({
   word: ''
 })
  setGameStart(true)
} 

const displayWordsCounted = () => {
  let wordsCounted = pressedChars.word
  .trim()
  .split(' ')
  .filter(words => words !== '')
  setWordCount(wordsCounted.length)
}

useEffect(()=>{
  if(timeRemaining > 0 && gameStart){
  setTimeout(()=>
  {
setTimeRemaining(timeRemaining - 1)
  }, 1000)
}else if(timeRemaining === 0) {
  setGameStart(false)
  displayWordsCounted()
}
}, [timeRemaining, gameStart])

  return (
    <div className="App">
<h1>Do You Type Fast?</h1>
<form><textarea
type='text'
value={pressedChars.word}
name='type here'
placeholder='Begin typing here'
onChange={handleChange}
disabled={!gameStart}

/>
</form>
<h4>Time Remaining: {timeRemaining} </h4>
<button onClick={()=> handleWordCount()} disabled={gameStart}>Start Game</button>
<h1>Word Count: {wordCount} </h1>
    </div>
  );
}

export default App;
