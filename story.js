$( document ).ready(function() {
    console.log( "ready!" );
    $( "#contentWrapper" ).load( "slide1.html");
});


var r = 30;
var g = 35;
var b = 40;
function Switch(page){
	$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
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
			r = 30;
			g = 35;
			b = 40;
			$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
		}
		if (page == "Restart"){
			var r = 30;
			var g = 35;
			var b = 40;
			$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
			$("#onSwitch").removeAttr('checked');
			$("#offSwitch").attr('checked', 'checked');
		}
		if (page == "Q6_violence"){
			var r = 20;
			var g = 35;
			var b = 30;
			$(".blended").css("background-color", "rgb(" + r+ "," + g+","+ b+ ")");
		}
		if (page == "End_Final"){
			var r = 20;
			var g = 35;
			var b = 30;
			$(".blended").hide();
			$("body").css("background-image", "url('../assets/fire.gif')");
		}
	});
}