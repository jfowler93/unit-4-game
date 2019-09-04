$(document).ready(function () {

    // Declare Variables
    var randomNumber= "";
    var userNumber= "";
    var wins= 0;
    var losses= 0;
    var isNumberEqual= false;

    function startGame() {
        randomNumber= Math.floor(Math.random() * (120-19) +19);
        userNumber= "0";
        wins= 0;
        losses= 0;
        isNumberEqual= false;
        $("#ransom").html(randomNumber);
        $("#gathered").html(userNumber);
        $("#wins").html("Triumphs Over Evil: " + wins);
        $("#losses").html("OOPS: " + losses);
        
        
    }
startGame();

















})