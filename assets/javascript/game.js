$(document).ready(function () {

    // Declare Variables
    var randomNumber= "";
    var userNumber= 0;
    var rupeeOne;
    var rupeeTwo;
    var rupeeThree;
    var rupeeFour;
    var wins= 0;
    var losses= 0;
    // var isNumberEqual= false;

    // start game function
    function startGame() {
        randomNumber= Math.floor(Math.random() * (120-19) +19);
        rupeeOne= Math.floor(Math.random() * (12-1) +12);
        rupeeTwo= Math.floor(Math.random() * (12-1) +12);
        rupeeThree= Math.floor(Math.random() * (12-1) +12);
        rupeeFour= Math.floor(Math.random() * (12-1) +12);
        userNumber= 0;
        wins= 0;
        losses= 0;
        isNumberEqual= false;
        $("#ransom").html(randomNumber);
        $("#gathered").html(userNumber);
        $("#wins").html("Triumphs Over Evil: " + wins);
        $("#losses").html("OOPS: " + losses);
        $("#rupee-1").attr("data-rupeevalue", rupeeOne);
        $("#rupee-2").attr("data-rupeevalue", rupeeTwo);
        $("#rupee-3").attr("data-rupeevalue", rupeeThree);
        $("#rupee-4").attr("data-rupeevalue", rupeeFour);
        
        // function rupeeValue() {
        //     $("#rupee-1") = (rupeeOne);
        //     $("#rupee-2") = (rupeeTwo);
        //     $("#rupee-3") = (rupeeThree);
        //     $("#rupee-4") = (rupeeFour);

        // };

        rupeeValue();
    }
startGame();

// click event

$(".button").on("click", function(){
if(userNumber >= randomNumber){
    return;
}

var rupeeValue = $(this).attr("data-rupeevalue");
rupeeValue = parseInt(rupeeValue);
userNumber += rupeeValue;
$("#gathered").text(userNumber)

if (userNumber === randomNumber) {
    wins++;
    startGame()
}
else if (userNumber > randomNumber) {
    losses++;
    startGame()
}
});
    

});













