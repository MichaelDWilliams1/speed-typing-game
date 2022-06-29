import { useState, useEffect, useRef } from "react"

const useWordGame = () => {
const START_TIME = 10

    const [pressedChars, setPressedChars] = useState({
        word: ''
      })
      const [wordCount, setWordCount] = useState(0)
      const [timeRemaining, setTimeRemaining] = useState(START_TIME)
      const [gameStart, setGameStart] = useState(false)
      const inputRef = useRef(null)
      
      const handleChange = (event) => {
        setPressedChars(prev => ({
      ...prev,
      word: event.target.value
        }))
      
      }
      
      const handleWordCount = (text) => {
       setTimeRemaining(START_TIME)
       setWordCount(0)
       setPressedChars({
         word: ''
       })
        setGameStart(true)
        inputRef.current.disabled = false
        inputRef.current.focus();
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
 
      return { inputRef, handleChange, gameStart, timeRemaining, wordCount, pressedChars, displayWordsCounted, handleWordCount }
}

export default useWordGame