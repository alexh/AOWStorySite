$( document ).ready(function() {
    console.log( "ready!" );
    $( "#contentWrapper" ).load( "slide1.html");
});


function Switch(page){
	$( "#contentWrapper" ).hide();
	$( "#contentWrapper" ).load( page + ".html", function(){
		$( "#contentWrapper" ).fadeIn(200);
		if (page == "Thwack"){
			alert("fight!");
		}
	});
}