import React, {useEffect, useCallback, useContext}from 'react';
import Key from "./Key"
import {AppContext} from "../App";

function KeyBoard(){
    const {board, curAttempt, word, correct, almost, error, onEnter, onDelete, onSelectLetter} = useContext(AppContext); 
    const top_keys = ["Q","W","E","R","T", "Y", "U", "I", "O", "P"]
    const mid_keys = ["A","S","D","F","G","H","J","K","L"]
    const low_keys = ["Enter","Z","X", "C", "V", "B", "N", "M", "Delete"]
    const handleKeyBoard = useCallback(
      (event) => {
        if(event.key === "Enter"){
            onEnter();
        }
        else if(event.key === "Backspace"){
            onDelete();
        }
        else{
            top_keys.forEach(key => {
                if(event.key.toUpperCase() === key){
                    onSelectLetter(key)
                }
                
            });
            mid_keys.forEach(key => {
                if(event.key.toUpperCase() === key){
                    onSelectLetter(key)
                }
                
            });
            low_keys.forEach(key => {
                if(event.key.toUpperCase() === key){
                    onSelectLetter(key)
                }
                
            });
        }
      },
    )
    
    useEffect(()=>{
        document.addEventListener("keydown",handleKeyBoard)
        return () => document.removeEventListener("keydown",handleKeyBoard)

    },[handleKeyBoard])
    return (
        <div className= "keyboard" onKeyDown ={handleKeyBoard}>
            <div className = "d-flex justify-content-center">{top_keys.map((key)=>{
                return <Key keyValue = {key}/>
                })}
            </div>
            <div className = "d-flex justify-content-center">{mid_keys.map((key)=>{
                return <Key keyValue = {key}/>
                })}
            </div>
            <div className = "d-flex justify-content-center">{low_keys.map((key)=>{
                if (key === "Enter" || key === "Delete"){
                    return <Key keyValue = {key} bigKey/>
                }
                return <Key keyValue = {key}/>
                })}
            </div>
    </div>
       )
}
export default KeyBoard;