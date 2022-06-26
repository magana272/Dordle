import React, {useContext} from "react";
import {AppContext} from "../App"
function Key({keyValue, bigKey}){

    const {onEnter, onDelete, onSelectLetter,disabled,correct, almost} = useContext(AppContext);
    
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
    if(disabled.has(keyValue)){
        return <button className= "p-2 flex-shrink key" id = {(bigKey && "big" ) || ("error")} onClick={selector}>{keyValue}</button>

    }
    else if (correct.has(keyValue)){
        return <button className= "p-2 flex-shrink key" id = {(bigKey && "big" ) || ("correct")} onClick={selector}>{keyValue}</button>

    }
    if(almost.has(keyValue)){
        return <button className= "p-2 flex-shrink key" id = {(bigKey && "big" ) || ("almost")} onClick={selector}>{keyValue}</button>

    }
    return <button className= "p-2 flex-shrink key" id = {bigKey && "big"} onClick={selector}>{keyValue}</button>
    }
export default Key;