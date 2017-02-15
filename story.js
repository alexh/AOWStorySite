$( document ).ready(function() {
    console.log( "ready!" );
    $( "#contentWrapper" ).load( "slide1.html");
});


function Switch(page){
	$( "#contentWrapper" ).load( page + ".html");
}