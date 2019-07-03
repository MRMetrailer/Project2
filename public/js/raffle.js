$(function () {

	$('.roulette').find('img').hover(function () {
		console.log($(this).height());
	});
	var appendLogMsg = function (msg) {
		$('#msg')
			.append('<p class="muted">' + msg + '</p>')
			.scrollTop(100000000);

	}
	var p = {
		startCallback: function () {
			appendLogMsg('start');
			$('#speed, #duration').slider('disable');
			$('#stopImageNumber').spinner('disable');
			$('.start').attr('disabled', 'true');
			$('.stop').removeAttr('disabled');
		},
		slowDownCallback: function () {
			appendLogMsg('slowdown');
			$('.stop').attr('disabled', 'true');
		},
		stopCallback: function ($stopElm) {
			appendLogMsg('stop');
			$('#speed, #duration').slider('enable');
			$('#stopImageNumber').spinner('enable');
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
		}

	}
	var rouletter = $('div.roulette');
	rouletter.roulette(p);
	$('.stop').click(function () {
		var stopImageNumber = $('.stopImageNumber').val();
		if (stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');
	});
	$('.stop').attr('disabled', 'true');
	$('.start').ready(function () {
		rouletter.roulette('start');
	});


});

function loadRaffle() {
	setTimeout(function () {
		var element = document.getElementById("replace");
		element.classList.add("cardRow");
	}, 8000);
}