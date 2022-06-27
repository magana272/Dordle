import React, {useContext} from "react";
import {AppContext} from "../App"
function Key({keyValue, bigKey}){

    const {onEnter, onDelete, onSelectLetter,disabled,correct, almostSet} = useContext(AppContext);
    
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

    if(correct.has(keyValue)){
        return <button className= "p-2 flex-shrink key" id = {(bigKey && "big" ) || ("correct")} onClick={selector}>{keyValue}</button>

    }
    if (almostSet.has(keyValue) ){
        return <button className= "p-2 flex-shrink key" id = {(bigKey && "big" ) || ("correct")} onClick={selector}>{keyValue}</button>

    }
    else if (disabled.has(keyValue) && !almostSet.has(keyValue) && !correct.has(keyValue)){

        return <button className= "p-2 flex-shrink key" id = {(bigKey && "big" ) || ("error")} onClick={selector}>{keyValue}</button>

    }
    else {return <button className= "p-2 flex-shrink key" id = {bigKey && "big"} onClick={selector}>{keyValue}</button>
}
    }
export default Key;