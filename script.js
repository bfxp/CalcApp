
//Function to clear all the values
function clearScreen(){
    document.getElementById("result").value = "";
}

//Function will display the value
function display(value){
    document.getElementById("result").value += value;
}

//Function to evalulate any expressions that are entered and returns the results.
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
