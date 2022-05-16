let str = "itsTOOLIT";

function tooLIT(){
    document.getElementById("demo").innerHTML += str + "<br>";
}
function updateStr(){
    str = document.getElementById('updateStr').value;
    document.getElementById("testArea1").innerHTML = str;
}
function reset(){
    document.getElementById("demo").innerHTML = "";
    
    str = "itsTOOLIT";
}