import './App.css';
import Board from "./Component/Board";
import React, { useState, createContext } from 'react';
import Keyboard from "./Component/KeyBoard";
import {DefaultBorad, guessFunc, guessing} from "./Word"
export const AppContext = createContext();
function App() {
  const [guess, setguess] = useState("xxxxx");
  const [board, setBoard] = useState(DefaultBorad);
  const [curAttempt, setCurrAttempt] = useState({attempt:0 ,letterPos :0})
  const [word, setWord] = useState({word:"DAISY"});


  const onDelete = (keyValue) =>{
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
      setCurrAttempt({attempt: curAttempt.attempt+1, letterPos:0});
      setBoard(newBoard);
      onCheck();
      return;
      // need to check the guess 
    }
     else if (keyValue != "Enter" && curAttempt.letterPos==5){
      // Fully Spelt Word
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
  const onCheck = () =>{
    const newBoard = [...board]
    if(newBoard[curAttempt.attempt].join("").valueOf() === word.word.valueOf()){
      alert("YOU WIN!")
    }
    
  }
  return (
      <div className="App">
      <div className = "container-fluid"> 
          <nav><h1>Dordle</h1></nav>
          <AppContext.Provider value ={{board, setBoard, curAttempt, setCurrAttempt, word, setWord, onDelete, onEnter, onSelectLetter, onCheck}} >
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
