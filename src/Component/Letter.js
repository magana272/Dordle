import React, {useContext} from 'react';
import {AppContext} from "../App";
function Letter({letterPos, attemptValue}){
    const {board, curAttempt, word, correct, almost, error} = useContext(AppContext); 
    const letter = board[attemptValue][letterPos];
    // Make tupils if you get it right ... :+)
    // ALL 5 letter words from Taylor Swift song and Say Anything 

    if(attemptValue < curAttempt.attempt){
        if(word.word[letterPos]===letter){
            return <div className ="letter" id= "correct"> {"🌷"}</div>
        }
        else if(word.word.includes(""+letter)){
            return <div className ="letter" id= "almost"> {letter}</div>
        }
        else{
            return <div className ="letter" id= "error"> {letter}</div>
        }
    }
    return <div className ="p-2 flex-shrink-1 letter" id> {letter}</div>

}
export default Letter;