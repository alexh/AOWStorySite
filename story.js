$( document ).ready(function() {
    console.log( "ready!" );
    $( "#contentWrapper" ).load( "End_final.html");
});


function Switch(page){
	$( "#contentWrapper" ).hide();
	$( "#contentWrapper" ).load( page + ".html", function(){
		$( "#contentWrapper" ).fadeIn(200);
		if (page == "Thwack"){
			var audio = new Audio('assets/punches.mp3');
			audio.play();
		}
	});
}