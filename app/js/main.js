
$(document).ready( function() {

	$('#epicleptic').height( $(window).height() );

	$(window).resize( function() {
		$('#epicleptic').height( $(window).height() );
	});

	setInterval( function() {
		$('#epicleptic').css({
			backgroundColor: get_random_color()
		})
	}, 50 );

	
	// setInterval(function() {
	// 	var audio = document.createElement("audio");
	// 	if (audio != null && audio.canPlayType && audio.canPlayType("audio/mp3"))
	// 	{
	// 		audio.src = "sound/hypnotoad.mp3";
	// 		audio.loop = true;
	// 		audio.play();
	// 	}
	// 	$('body').append($(audio));
	// 	// audio.addEventListener('ended', function() {
	// 	// 	$(audio).remove();
	// 	// });
	// }, 1000);


	// var audio = document.createElement("audio");
	// 	if (audio != null && audio.canPlayType && audio.canPlayType("audio/mp3"))
	// 	{
	// 		audio.src = "sound/hypnotoad.mp3";
	// 		audio.loop = true;
	// 		audio.play();
	// 	}
	// 	$('body').append($(audio));

	// var e = document.getElementById("epicleptic");

	e.onclick = function() {

		if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
			RunPrefixMethod(document, "CancelFullScreen");
		}
		else {
			RunPrefixMethod(e, "RequestFullScreen");
		}

	}


});

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

var pfx = ["webkit", "moz", "ms", "o", ""];
function RunPrefixMethod(obj, method) {
	
	var p = 0, m, t;
	while (p < pfx.length && !obj[m]) {
		m = method;
		if (pfx[p] == "") {
			m = m.substr(0,1).toLowerCase() + m.substr(1);
		}
		m = pfx[p] + m;
		t = typeof obj[m];
		if (t != "undefined") {
			pfx = [pfx[p]];
			return (t == "function" ? obj[m]() : obj[m]);
		}
		p++;
	}

}