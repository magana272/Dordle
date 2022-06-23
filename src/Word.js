import React from 'react'
export const DefaultBorad = [
    [" ","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]];

export function guessFunc(guess, correct_word){
    let guess_answer = [];
    for( let i = 0 ; 0 < correct_word.length; i++){
        if (guess[i]===correct_word[i]){
            guess_answer.push(1)
        }
        else if(guess.includes(guess[i])){
            guess_answer.push(2);
        }
        else{
            guess.push(2);
        }
    }
    return guess_answer
}
export function guessing(word){
    if (word === "xxxxx"){
      return "Daisy. -Your Bug 🌷"}
    return "xxxxx";
  }
