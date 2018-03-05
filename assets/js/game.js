
$(document).ready(function(){
});
function intializeGame(){

   
    var arrayQuestions = [
       "what is the color",
       "what time is it",
    ]
};

    function getQuestion(){
      ind =  Math.floor(Math.random()* arrayQuestions.length);
      gameQuestion = ind[arrayQuestions];
      $("#trivia-questions").append($(gameQuestion));

    }
   
    
    
    


$("#startBtn").on("click", function() {
    initializeGame();
});