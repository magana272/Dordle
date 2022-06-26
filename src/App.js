import './App.css';
import Board from "./Component/Board";
import React, { useState, createContext, useEffect } from 'react';
import Keyboard from "./Component/KeyBoard";
import {DefaultBorad, guessing, get_randomWord } from "./Word"
export const AppContext = createContext();
function App() {
  const [guess, setguess] = useState("xxxxx");
  const [board, setBoard] = useState(DefaultBorad);
  const [curAttempt, setCurrAttempt] = useState({attempt:0 ,letterPos :0})
  const [word, setWord] = useState("");
  const [disabled, setDisabled] = useState(new Set());
  const [almost, setAlmost] = useState(new Set());
  const [correct, setCorrect] = useState(new Set());
  const [wordSet, setWordSet] = useState(new Set());
  const [game, setgame] = useState(0);
  const [bounce, setBounce] = useState(0);


  useEffect(() => {
    get_randomWord().then((words)=> {
      setWordSet(words.wordSet)
      setWord(words.random_word.toUpperCase())
      setBoard(words.DefaultBorad);
      setDisabled(words.errorSet);
      setAlmost(words.almostSet);
      setCorrect(words.almostSet);

    }
    )
  }, [game])
  useEffect(() => {
    const newBoard = [...board]
    setBoard(newBoard)

    }, [bounce])
  const onDelete = (keyValue) =>{
    // console.log(word)
    const newBoard = [...board]
    if(curAttempt.letterPos ==0 ){
      newBoard[curAttempt.attempt][curAttempt.letterPos] = ""
      setCurrAttempt({...curAttempt, letterPos:curAttempt.letterPos});
      setBoard(newBoard);}
    else if(curAttempt.letterPos >0 && curAttempt.letterPos <=5){
      //Deleteing any other time
      newBoard[curAttempt.attempt][curAttempt.letterPos-1] = ""
      setCurrAttempt({...curAttempt, letterPos:curAttempt.letterPos-1});
      setBoard(newBoard);
      }
      }
  const onEnter = (keyValue) => {
    const newBoard = [...board];
    if(curAttempt.letterPos!=5){
      // Not a complete word
      return;
    }
    else if(curAttempt.letterPos==5){
      // Makeing a guess
      if(!wordSet.has(newBoard[curAttempt.attempt].join("").valueOf().toLowerCase())){alert("Not a word");return;}
      setCurrAttempt({attempt: curAttempt.attempt+1, letterPos:0});
      onCheck();
      return;
      // need to check the guess 
    }
    else{
      return;
    }
  }
  const onSelectLetter = (keyValue) =>{
    const newBoard = [...board]
    if(curAttempt.letterPos >=0 && curAttempt.letterPos <=4){
      setCurrAttempt({...curAttempt, letterPos:curAttempt.letterPos+1})
      newBoard[curAttempt.attempt][curAttempt.letterPos] = keyValue;
      setBoard(newBoard)
      return;
  }}
  const new_game =()=>{
    const newBoard = [...board]
    setCorrect(new Set())
    setDisabled(new Set())
    setAlmost(new Set())
    setBoard(newBoard);
    setCurrAttempt({attempt:0 ,letterPos:0 })
    setWord(wordSet[Math.floor(Math.random() * wordSet.length)]);
    setgame(game+1)
    setBounce(false);
  }

  const onCheck = () =>{
    const newBoard = [...board]
    if(newBoard[curAttempt.attempt].join("").valueOf() === word.valueOf()){
      setBounce(true)

    }
    else if(newBoard[curAttempt.attempt].join("").valueOf() !== word.valueOf() && curAttempt.attempt ==5){
      alert("You lost! The word was: " + word);
      setCorrect(new Set())
      setDisabled(new Set())
      setAlmost(new Set())
      setBoard(newBoard);
      setCurrAttempt({attempt:0 ,letterPos:0 })
      setWord(wordSet[Math.floor(Math.random() * wordSet.length)]);
      setgame(game+1)

    }
    else{return;
    
  }}

  return (
      <div className="App">
      <div className = "container-fluid"> 
          <nav><h1>Dordle</h1></nav>
          <AppContext.Provider value ={{board, setBoard, curAttempt, setCurrAttempt, word, setWord,disabled, setDisabled,correct,setCorrect, onDelete, onEnter, onSelectLetter, onCheck, almost, setAlmost, bounce, new_game}} >
            <div className = "col"> 
            <div className = "container-fluid"> 
              <div className ="game">
                <div className = "row justify-content-center"> 
                <div className = "container-fluid"> 
                  <Board/>
                </div>
                </div>
                <div className = "row justify-content-center"> 
                <div className = "container-fluid">
                  <Keyboard/>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </AppContext.Provider>
          <button onClick={()=>setguess(guessing(guess))} >{guess}</button>

      </div>
      
    </div>
  );
}
export default App;
