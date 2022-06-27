import React from 'react'
import Words from './word.txt'
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
      return "Daisy. - Your Bug 🌷"}
    return "xxxxx";
  }
export const get_randomWord = async()=>{
    let wordSet;
    let random_word;
    let DefaultBorad;
    let correctSet;
    let errorSet;
    let almostSet;
    await fetch(Words)
    .then((response)=> response.text())
    .then((results)=>{
        const wordarr = results.split("\n")
        random_word = wordarr[Math.floor(Math.random() * wordarr.length)]
        wordSet = new Set(wordarr)
        DefaultBorad = [
            [" ","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""]];
        correctSet =  new Set();
        errorSet = new Set();
        almostSet = new Set();

    })
    return {wordSet, random_word,DefaultBorad, correctSet, errorSet, almostSet};
}
