$(document).ready(function(){
    $.getJSON("https://asia-east1-lucky-kayak-428217-m0.cloudfunctions.net/visitor-count-trigger",function(data){
        $('#visitor-count').text(data.currentVisitor);

    }).fail(function(){
        console.log("Error has occurred while retrieving the visitor-count data ")
    });
});


