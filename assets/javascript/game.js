$(document).ready(function () {

    // Declare Variables
    var randomNumber= "";
    var userNumber= "";
    var rupeeOne= "";
    var rupeeTwo= "";
    var rupeeThree= "";
    var rupeeFour= "";
    var wins= 0;
    var losses= 0;
    var isNumberEqual= false;

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
        
        
        function rupeeValue() {
            $("#rupee-1") = (rupeeOne);
            $("#rupee-2") = (rupeeTwo);
            $("#rupee-3") = (rupeeThree);
            $("#rupee-4") = (rupeeFour);

        };

        rupeeValue();
    }
startGame();

// $(".btn").on("click" , function(){
//     if (isNumberEqual) {
//         return false;
//     };
    
// $("#gathered").html(buttonValue);
    

});














