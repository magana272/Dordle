import React, {useContext} from 'react';
import {AppContext} from "../App";
function Letter({letterPos, attemptValue}){
    const {board, curAttempt, word,disabled, setDisabled,correct,setCorrect, almost, setAlmost} = useContext(AppContext); 
    const letter = board[attemptValue][letterPos];
    // Make tupils if you get it right ... :+)
    // ALL 5 letter words from Taylor Swift song and Say Anything 

    if(attemptValue < curAttempt.attempt){
        console.log(word.slice(0,letterPos).includes(""+letter))
        
        if(word[letterPos]===letter){
            let new_correct= correct;
            setCorrect(new_correct.add(letter))
            return <div className ="letter" id= "correct_b"> {letter}</div>
        }
        else if(word.slice(0,letterPos).includes(""+letter) || word.slice(letterPos+1, word.length).includes(""+letter)){
            let new_almost= almost;
            setAlmost(new_almost.add(letter))
            return <div className ="letter" id= "almost"> {letter}</div>
        }
        else{
            let newerr = disabled;
            setDisabled(newerr.add(letter))
            return <div className ="letter" id= "error"> {letter}</div>
        }
    }
    return <div className ="p-2 flex-shrink-1 letter" id> {letter}</div>

}
export default Letter;