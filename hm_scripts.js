let str = "";
let guesses = new Set();

function guessCheck(){
    str = document.getElementById('guess').value.toLowerCase();
    if(isLetter(str)){
        if(guesses.has(str)){
            document.getElementById("invalid").innerHTML = "You already guessed that one! Try again.";
        }
        else{
            document.getElementById("last-guess").innerHTML = "Last Guess: " + str;
            document.getElementById("invalid").innerHTML = "";
            document.getElementById("guesses").innerHTML += str;
            guesses.add(str);
        }
    }
    else{
        document.getElementById("invalid").innerHTML = "Invalid input!<br>Please enter a letter!";
    }
    document.getElementById("guess").value = "";
}

//function to if input is a valid letter
//because the input box works on change, it will immediately call the function above
function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i);
}