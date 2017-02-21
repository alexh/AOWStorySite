$( document ).ready(function() {
    console.log( "ready!" );
    $( "#contentWrapper" ).load( "slide1.html");
});


var r = 30;
var g = 35;
var b = 40;
function Switch(page){
	// $(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
	$( "#contentWrapper" ).hide();
	$( "#contentWrapper" ).load( page + ".html", function(){
		$( "#contentWrapper" ).fadeIn(200);
		if (page == "Thwack"){
			var audio = new Audio('assets/punches.mp3');
			audio.play();
		}
		if (page == "Q3_confrontational" || page == "Q7_murder" ){
			$(".blended").css("background-color", "rgb(" + 200+ "," + 20+","+ 20+ ")");
		}
		if (page == "Open"){
			r = 89;
			g = 90;
			b = 100;
			$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
			$("#onSwitch").attr('checked', 'checked');
			$("#offSwitch").removeAttr('checked');
		}
		if (page == "slide1"){
			var r = 70;
			var g = 75;
			var b = 80;
			$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
		}
		if (page == "Restart"){
			r = 30;
			g = 35;
			b = 40;
			$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
			$(".blended").css("background-image", "url('./assets/bg2.png')");
			$("#onSwitch").removeAttr('checked');
			$("#offSwitch").attr('checked', 'checked');
		}
		if (page == "Q5_control"){
			$(".blended").css("background-image", "url('./assets/bg4.png')");
		}
		if (page == "Q6_violence"){
			var r = 50;
			var g = 55;
			var b = 60;
			$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
			$(".blended").css("background-image", "url('./assets/bg5.png')");
		}
		if (page == "End_Final"){
			var r = 90;
			var g = 90;
			var b = 90;
			$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
			$(".blended").css("background-image", "url('./assets/fire.gif')");
		}
	});
}