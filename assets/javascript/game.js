$(document).ready(function () {

    // Declare Variables
    var randomNumber= "";
    var userNumber= 0;
    var wins= 0;
    var losses= 0;
    var isNumberEqual= false;

    function startGame() {
        document.getElementById("ransom").innerHTML = randomNumber= Math.floor(Math.random() * (120-19) +19);
        userNumber= 0;
        wins= "";
        losses= "";
        var isNumberEqual= false;
        
    }
startGame();

















})