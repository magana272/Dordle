import React, {useContext} from "react";
import {AppContext} from "../App"
function Key({keyValue, bigKey}){

    const {board, setBoard, curAttempt,setCurrAttempt, word, correct, almost, error, onEnter, onDelete, onSelectLetter} = useContext(AppContext);
    
    const selector  = () =>{
        if (keyValue.toUpperCase() == "DELETE"){
            ///Try to delete at 0
            onDelete()
            return;
        }
        else if(keyValue.toUpperCase() === "ENTER" )
        { onEnter(keyValue)
            return;}
        else{onSelectLetter(keyValue)
            return;}
    }
    ///
    return <button className= "p-2 flex-shrink key" id = {bigKey && "big"} onClick={selector}>{keyValue}</button>
    }
export default Key;