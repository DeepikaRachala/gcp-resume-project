jQuery(document).ready(function(){
    jQuery.getJSON("https://us-central1-lucky-kayak-428217-m0.cloudfunctions.net/visitor-count-function",function(data){
        jQuery('#visitor-count').text(data.currentVisitor);

    }).fail(function(){
        console.log("Error has occurred while retrieving the visitor-count data ")
    });
});


