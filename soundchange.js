import {consonants, vowels, selectedSyllables} from './generatePhonology.js'

// function soundChange(word) {

//     //let vowels = ["a", "ā", "e", "ē", "o", "ō", "u", "ū", "i", "ī", "ə"];
//     //let longVowels = ["ā", "ē", "ō", "ū", "ī", "ə"];
//     //let consonants = ["m", "n", "p", "b", "t", "d", "k", "g", "f", "v", "s", "z", "h", "l", "r", "j", "w"];

//     let letterArray = Array.from(word); /*turns string into an array of individual letters*/

//     /*---------SYNCOPE-----------*/
//     //removes the fourth letter of words longer than four letters, and lengthens the first vowel, or if the third and fourth letters are the same, removes the fifth letter abd lengthens the fourth letter
//     if(vowels.includes(letterArray[0])) {
//         if (letterArray.length > 4) {
//             if (letterArray[1] == letterArray[3]) { //check's if the third and fourth letter are the same
//                 letterArray.splice([4], 1); // 2nd parameter means remove one item only
//                 if (letterArray[2] == "o") {
//                     letterArray[2] = "ō"
//                 } else if (letterArray[2] == "u") {
//                     letterArray[2] = "ū"
//                 } else if (letterArray[2] == "i") {
//                     letterArray[2] = "ī"
//                 } else if (letterArray[2] == "e") {
//                     letterArray[2] = "ē"
//                 } else if (letterArray[23] == "a") {
//                     letterArray[2] = "ā"
//                 }
//             } else if(vowels.includes(letterArray[4])) {
//                 letterArray.splice([2], 1);
//                 if (letterArray[0] == "o") {
//                     letterArray[0] = "ō"
//                 } else if (letterArray[0] == "u") {
//                     letterArray[0] = "ū"
//                 } else if (letterArray[0] == "i") {
//                     letterArray[0] = "ī"
//                 } else if (letterArray[0] == "e") {
//                     letterArray[0] = "ē"
//                 } else if (letterArray[0] == "a") {
//                     letterArray[0] = "ā"
//                 }
//             }
//     }
//     } else { //else if letterArray[0]'s value is a consonant
//         if (letterArray.length > 4) {
//             if (letterArray[2] == letterArray[4]) { //check's if the third and fourth letter are the same
//                 letterArray.splice([5], 1); // 2nd parameter means remove one item only
//                 if (letterArray[3] == "o") {
//                     letterArray[3] = "ō"
//                 } else if (letterArray[3] == "u") {
//                     letterArray[3] = "ū"
//                 } else if (letterArray[3] == "i") {
//                     letterArray[3] = "ī"
//                 } else if (letterArray[3] == "e") {
//                     letterArray[3] = "ē"
//                 } else if (letterArray[3] == "a") {
//                     letterArray[3] = "ā"
//                 }
//             } else if(vowels.includes(letterArray[3])) {
//                 letterArray.splice([3], 1);
//                 if (letterArray[1] == "o") {
//                     letterArray[1] = "ō"
//                 } else if (letterArray[1] == "u") {
//                     letterArray[1] = "ū"
//                 } else if (letterArray[1] == "i") {
//                     letterArray[1] = "ī"
//                 } else if (letterArray[1] == "e") {
//                     letterArray[1] = "ē"
//                 } else if (letterArray[1] == "a") {
//                     letterArray[1] = "ā"
//                 }
//             }
//     }
//     }
    
//     let syncopedString = letterArray.join(""); //turns the array back into a string

//     let lenitionString0 = syncopedString.replace("pb", "fp");
//     let lenitionString1 = lenitionString0.replace("bp", "fp");
//     let lenitionString2 = lenitionString1.replace("gk", "hk");
//     let lenitionString3 = lenitionString2.replace("kg", "hk");
//     let lenitionString4 = lenitionString3.replace("dt", "st");
//     let lenitionString5 = lenitionString4.replace("td", "st");
//     let lenitionString6 = lenitionString5.replace("bm", "mb");
//     let lenitionString7 = lenitionString6.replace("mt", "md");
//     let lenitionString8 = lenitionString7.replace("mp", "mb");
//     let lenitionString9 = lenitionString8.replace("mk", "mg");

//     let furtherChanges = Array.from(lenitionString9);

//     let rejoinedString = furtherChanges.join(""); //turns the array back into a string

//     //removes "h" if it occurs both after another consonant and before "k". Due to interference with the "h" in the accusative prefix, I had to make this rather clunky workaround. This turns "hk" clusters into "X" (all cases of post-consonantal "h" occur befor "h") and then check if "X" if after a consonant, if it is, then "X" becomes "k", else, it becomes "hk" again
//     let hKtoX = rejoinedString.replace("hk", "X");
//     let beforeX = consonants.includes(hKtoX.charAt(hKtoX.indexOf("X") - 1));
//     let removeCX = hKtoX.includes("X") && beforeX ? hKtoX.replace("X", "k") : hKtoX;
//     let returnXtoHK = removeCX.replace("X", "hk");
    
//     //checks if "r" is before and after a consonant, and turns it into schwa if so
//     let syllabliseR = returnXtoHK.includes("r") && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") + 1)) && consonants.includes(returnXtoHK.charAt(returnXtoHK.indexOf("r") - 1)) ? returnXtoHK.replace("r", "ə") : returnXtoHK;

//     //checks if "l" is before and after a consonant, and turns it into schwa if so
//     let syllabliseL = syllabliseR.includes("l") && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") + 1)) && consonants.includes(syllabliseR.charAt(syllabliseR.indexOf("l") - 1)) ? syllabliseR.replace("l", "ə") : syllabliseR;

//     //turns geminates into singletons
//     let reduceGeminate = syllabliseL.replace("pp", "p");
//     let reduceGeminate1 = reduceGeminate.replace("bb", "b");
//     let reduceGeminate2 = reduceGeminate1.replace("tt", "t");
//     let reduceGeminate3 = reduceGeminate2.replace("dd", "d");
//     let reduceGeminate4 = reduceGeminate3.replace("kk", "k");
//     let reduceGeminate5 = reduceGeminate4.replace("gg", "g");
//     let reduceGeminate6 = reduceGeminate5.replace("ss", "s");
//     let reduceGeminate7 = reduceGeminate6.replace("ll", "l");
//     let reduceGeminate8 = reduceGeminate7.replace("rr", "r");
//     let reduceGeminate9 = reduceGeminate8.replace("nn", "n");
//     let reduceGeminate10 = reduceGeminate9.replace("mm", "m");
//     let reduceGeminate11 = reduceGeminate10.replace("hh", "h");
    
//     let syllabliseJ = reduceGeminate11.includes("j") && consonants.includes(reduceGeminate11.charAt(reduceGeminate11.indexOf("j") + 1)) || reduceGeminate11[reduceGeminate11.length - 1] == "j" ? reduceGeminate11.replace("j", "i") : reduceGeminate11;

//     let syllabliseW = syllabliseJ.includes("w") && consonants.includes(syllabliseJ.charAt(syllabliseJ.indexOf("w") + 1)) || syllabliseJ[syllabliseJ.length - 1] == "w" ? syllabliseJ.replace("w", "u"): syllabliseJ;

//     let fixMacronUPlusU = syllabliseW.replace("ūu", "ū");
//     let fixUPlusMacronU = fixMacronUPlusU.replace("uū", "ū");
//     let fixUPlusU = fixUPlusMacronU.replace("uu", "ū");
//     let fixMacronUPlusU2 = fixUPlusU.replace("ūu", "ū"); //because "uuw" becomes "uuu" then "ūu" which happens after the first "ūu" > "ū"

//     let fixMacronIPlusI = fixMacronUPlusU2.replace("īi", "ī");
//     let fixIPlusMacronI = fixMacronIPlusI.replace("iī", "ī");
//     let fixIPlusI = fixIPlusMacronI.replace("ii", "ī");

//     let fixMacronEplusE = fixIPlusI.replace("ēe", "ē");
//     let fixEPlusMacronE = fixMacronEplusE.replace("eē", "ē");
//     let fixEPlusE = fixEPlusMacronE.replace("ee", "ē");

//     let fixMacronOplusO = fixEPlusE.replace("ōo", "o");
//     let fixOPlusMacronO = fixMacronOplusO.replace("oō", "ō");
//     let fixOPlusO = fixOPlusMacronO.replace("oo", "ō");

//     let fixMacronAplusA = fixOPlusO.replace("āa", "ā");
//     let fixAPlusMacronA = fixMacronAplusA.replace("aā", "ā");
//     let fixAPlusA = fixAPlusMacronA.replace("aa", "ā");

//     return fixAPlusA;
// }







let voiced = ["b", "d", "g", "z", "bʰ", "dʰ", "gʰ", "ʐ", "ɖ", "ɣ", "v", "ɦ", "dʒ", "ɟ", "ʁ", "ʒ", "ɟ", "ʕ", "bʲ", "dʲ", "gʲ", "bʷ", "dʷ", "gʷ", , "bʰʲ", "dʰʲ", "gʰʲ", "bʷʰ", "dʷʰ", "gʷʰ", "ð", "ɮ"];
let unvoiced = ["p", "t", "k", "s", "pʰ", "tʰ", "kʰ", "ʂ", "ʈ", "x", "f", "h", "tʃ", "c", "χ", "ʃ", "ç", "ħ", "pʲ", "tʲ", "kʲ", "pʷ", "tʷ", "kʷ", "pʰʲ", "tʰʲ", "kʰʲ", "pʷʰ", "tʷʰ", "kʷʰ", "θ", "ɬ"
]
let highVowels = ["i", "u", "y", "ɯ", "ɨ", "ʉ"];
let midVowels = ["e", "o", "ø", "ɤ", "ɘ", "ɵ"];

let resonants = ["r", "l", "rʲ", "lʲ", "ʎ","ɽ", "ɭ"];


let syllablestructuresThatHaveWordFinalConsonants = ["CVC", "VVC", "VVCC", "VCC", "AVC", "CAVCC", "CVNC", "VNC", "CVFC", "FCVC", "CCFV", "CVRC", "CVCR", "CRVC", "CVH", "HVC", "VC"];

function checkIfWordFinalConsonantsArePossible() {
    for(let i = 0; i < syllablestructuresThatHaveWordFinalConsonants.length; i++) {
        if(selectedSyllables.includes(syllablestructuresThatHaveWordFinalConsonants[i])) {
            return true
        } else {
            return false;
        }
}
}

function checkIfVoicingIsPresent() {
    for(let i = 0; i < voiced.length; i++) {
    if(consonants.includes(voiced[i]))
        return true
    }
}

//A list of titles for every sound change is placed into the array "potentialSoundChanges". Then a random number and selection of these titles are pushed into the "chosenSoundChanges" array. If the "chosenSoundChanges" contains a sound changes title, the sound change may occur.

let potentialSoundChanges = [];
let chosenSoundChanges = [];
let wordArray = [];
let wordFinalDevoicingTrueOrFalse = "";
let randomNumForNoResonantsBeforeConsonants = "";

function selectSoundChanges() {
    potentialSoundChanges = [];
    chosenSoundChanges = [];
    wordArray = [];
    wordFinalDevoicingTrueOrFalse = "";
    potentialSoundChanges.push("wordFinalDevoicing");
    potentialSoundChanges.push("interVocalicLenition");
    potentialSoundChanges.push("lenitionofPlosivebeforeOtherPlosive");
    potentialSoundChanges.push("wordFinalHighVowelsLower");
    potentialSoundChanges.push("NoResonantsBeforeConsonants");
    potentialSoundChanges.push("PreventPlosivesFromClustering");
   
    while(chosenSoundChanges.length < 6) {
        let randomNumber = Math.floor(Math.random()* potentialSoundChanges.length);
        if(chosenSoundChanges.includes(potentialSoundChanges[randomNumber]) === false) {
            chosenSoundChanges.push(potentialSoundChanges[randomNumber]) 
        }
        
    }
    console.log(chosenSoundChanges)

    randomNumForNoResonantsBeforeConsonants = Math.floor(Math.random() * 4)
}



function soundChange(word) {
    wordArray = Array.from(word)

    //The below changes are merely corrective to clean up some awkward unrealistic clusters that often get produced, thus they always apply and are not considered a part of the true sound changes.
        for(let i = 0; i < wordArray.length; i++) {
        if(unvoiced.includes(wordArray[i]) && voiced.includes(wordArray[i + 1])) {
            let unvoicedIndex = unvoiced.indexOf(wordArray[i])
            if(wordArray[i + 1] === voiced[unvoicedIndex]) {
                wordArray.splice(i, 1);
                    }          
        } else {
            for(let i = 0; i < wordArray.length; i++) {
                if(unvoiced.includes(wordArray[i]) && voiced.includes(wordArray[i + 1])) {
                    let unvoicedIndex = unvoiced.indexOf(wordArray[i])
                    if(wordArray[i + 1] === voiced[unvoicedIndex]) {
                    wordArray.splice(i+1, 1);
                    }
                }
            }
        }
        if(voiced.includes(wordArray[i]) && unvoiced.includes(wordArray[i + 1])) {
            let voicedIndex = voiced.indexOf(wordArray[i])
            if(wordArray[i + 1] === voiced[voicedIndex]) {
                wordArray.splice(i, 1);
                    }          
        } else {
            for(let i = 0; i < wordArray.length; i++) {
                if(voiced.includes(wordArray[i]) && unvoiced.includes(wordArray[i + 1])) {
                    let voicedIndex = voiced.indexOf(wordArray[i])
                    if(wordArray[i + 1] === unvoiced[voicedIndex]) {
                    wordArray.splice(i+1, 1);
                    }
                }
            }
        }
    }

    /*********************************************************************************/
    if(chosenSoundChanges.includes("wordFinalDevoicing") && checkIfWordFinalConsonantsArePossible() && checkIfVoicingIsPresent()) {
        
        if(voiced.includes(wordArray[wordArray.length -1])) {
            document.getElementById("wordFinalDevoicing").style.display = "block"; 
            let voicedIndex = voiced.indexOf(wordArray[wordArray.length -1]);
            wordArray[wordArray.length -1] = unvoiced[voicedIndex] 
                if(voiced.includes(wordArray[wordArray.length -2])) {
                    let voicedIndex = voiced.indexOf(wordArray[wordArray.length -2]);
                    wordArray[wordArray.length -2] = unvoiced[voicedIndex] 
                }
        }
    } else {
        document.getElementById("wordFinalDevoicing").style.display = "none"; 
    }

    /*********************************************************************************/
    if(chosenSoundChanges.includes("wordFinalHighVowelsLower")) {
        document.getElementById("lowersFinalHighVowels").style.display = "block";
        let newMidVowelsToAddTInventory = [];
        if(highVowels.includes(wordArray[wordArray.length -1])) {
            let vowelIndex = highVowels.indexOf(wordArray[wordArray.length -1]);
            wordArray[wordArray.length -1] = midVowels[vowelIndex]
            newMidVowelsToAddTInventory.push(midVowels[vowelIndex])
            if(document.getElementById("mid-vowels").innerHTML === "//") {
                document.getElementById("mid-vowels").innerHTML = `/hello/`
                document.getElementById("mid-vowels").style.display = "inline"
            }
        }
    } else {
        document.getElementById("lowersFinalHighVowels").style.display = "none";
    }
    /*********************************************************************************/

    if(chosenSoundChanges.includes("NoResonantsBeforeConsonants") && checkIfWordFinalConsonantsArePossible()) {
        document.getElementById("noResonantsBeforeConsonants").style.display = "block";

        if(randomNumForNoResonantsBeforeConsonants === 0) {
            //deletes the resonant
            console.log("resonant lost")
            document.getElementById("resonant-lost").style.display = "block";;
            for(let i = 0; i < wordArray.length; i++) {
                if(resonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
                    wordArray.splice(i, 1);
                }
            }
        } else {
             document.getElementById("resonant-lost").style.display = "none";
         }
        if(randomNumForNoResonantsBeforeConsonants === 1) {
            //inserts /i/ between resonant and consonant
            console.log("epenthetic i")
            document.getElementById("epenthetic-i").style.display = "block";
            for(let i = 0; i < wordArray.length; i++) {
                if(resonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
                    wordArray.splice(i+1, 0, "i");
                }
            }
        } else {
            document.getElementById("epenthetic-i").style.display = "none";
        }
        if(randomNumForNoResonantsBeforeConsonants === 2) {
            //inserts /u/ between resonant and consonant
            console.log("epenthetic u")
            document.getElementById("epenthetic-u").style.display = "block";
            for(let i = 0; i < wordArray.length; i++) {
                if(resonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
                    wordArray.splice(i+1, 0, "u");
                }
            }
        } else {
            document.getElementById("epenthetic-u").style.display = "none";
        }
        if(randomNumForNoResonantsBeforeConsonants === 3) {
            //the resonant and consonant switch places
            console.log("metathesis")
            document.getElementById("resonant-metaphesis").style.display = "block";
            for(let i = 0; i < wordArray.length; i++) {
                if(resonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
                    let resonant = wordArray[i]; 
                    let followingConsonant = wordArray[i+1];
                    wordArray[i] = followingConsonant;
                    wordArray[i+1] = resonant;
                    if(resonants.includes(wordArray[i]) && resonants.includes(wordArray[i + 1])) {
                        wordArray.splice(i+1, 0, "u");
                    }
                }
            }
        } else {
            document.getElementById("resonant-metaphesis").style.display = "none";
        }
        
    } else {
       document.getElementById("noResonantsBeforeConsonants").style.display = "none";
    }
        
    //console.log(wordArray)

    let final = wordArray.join("");
    return final;
}




export {soundChange, voiced, chosenSoundChanges,checkIfWordFinalConsonantsArePossible, wordFinalDevoicingTrueOrFalse, selectSoundChanges, resonants};