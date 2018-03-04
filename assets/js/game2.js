function displayTriviaInfo(){
    var question = $(this).attr("data-name");
    var queryUrl = "https://opentdb.com/api.php?amount=10";
 
    $.ajax({
        url : queryUrl,
        method : "get"
    }).then(function(response){
        console.log(response);
    }

    })

}