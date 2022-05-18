let str = "";
function guessCheck(){
    str = document.getElementById('guess').value.toLowerCase();
    if(isLetter(str)){
        document.getElementById("last-guess").innerHTML = "Last Guess: " + str;
        document.getElementById("invalid-input").innerHTML = "";
    }
    else{
        document.getElementById("invalid-input").innerHTML = "Invalid input!<br>Please enter a letter!";
    }
    document.getElementById("guess").value = "";
}

//function to if input is a valid letter
//because the input box works on change, it will immediately call the function above
function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i);
}