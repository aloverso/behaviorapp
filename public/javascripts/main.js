// $('#iconRespect').click(function() {
// 	$('#audioRespect')[0].play();
// });

// $('.option').click(function() {
// 	console.log(this);
// 	makevals(this.id);
// });

// var vals = ["Respect", "Responsibility", "Kindness"];

// var scenarios = {
// 	"Respect" : [
// 		{'text':'With a classmate'},
// 		{'text':'With the teacher'},
// 		{'text':'With a class assistant'},
// 		{'text':"With someone's belongings"},
// 		{'text':'With school property'}
// 	],
// 	"Responsibility" : [
// 		{'text':'Doing my best work'},
// 		{'text':'Sitting quietly'},
// 		{'text':'Following directions'},
// 		{'text':'Using self control'}
// 	],
// 	"Kindness" : [
// 		{'text':'Using kind words'},
// 		{'text':'Using manners'},
// 		{'text':'Being nice to friends'},
// 		{'text':'Being inclusive'}
// 	]
// };

// var questionstruggle = {
// 	'q':'What King Value did you do well today?',
// 	'values': [
// 		{'name':'Respect', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/respect.mp3'},
// 		{'name':'Responsibility', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/responsibility.mp3'},
// 		{'name':'Kindness', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/kindness.mp3'},
// 	]
// }

// function qstruggle(val) {
// 	$('#q').html(questionstruggle['q'])
// 	for (var i=0; i<questionstruggle['values'].length; i++) {
// 		txt = questionstruggle['values'][i]['name'];
// 		var $valbox = $('#template').clone();
// 		$valbox.id("");
// 		$valbox.find('div.option').id(txt);
// 		console.log($valbox.find('div.option'));
// 		$valbox.css('display','block');
// 		$valbox.find('i').attr('id', 'icon'+ txt);
// 		$valbox.find('p').html(txt);
// 		$valbox.find('audio').attr('id', 'audio'+txt);
// 		$valbox.find('audio').attr('src', questionstruggle['values'][i]['url']);
// 		$('#values').append($valbox);
// 	}
// }

// function makevals(val) {
// 	$('#values').remove();
// 	console.log(val);
// 	for (var i=0; i<scenarios[val].length; i++) {
// 		txt = scenarios[val][i]['text'];
// 		var $valbox = $('#template').clone();
// 		$valbox.css('display','block');
// 		$valbox.find('i').attr('id', 'icon'+ txt);
// 		$valbox.find('p').html(txt);
// 		$valbox.find('audio').attr('id', 'audio'+txt);
// 		$('#hella').append($valbox);
// 	}
		
// }