
// var questionstruggle = {
// 	'q':'What King Value did you struggle with today?',
// 	'values': [
// 		{'name':'Respect', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/respect.mp3'},
// 		{'name':'Responsibility', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/responsibility.mp3'},
// 		{'name':'Kindness', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/kindness.mp3'},
// 	]
// };

// var questionwell = {
// 	'q':'What King Value did you do well today?',
// 	'values': [
// 		{'name':'Respect', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/respect.mp3'},
// 		{'name':'Responsibility', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/responsibility.mp3'},
// 		{'name':'Kindness', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/kindness.mp3'},
// 	]
// };

var qwell = 'What King Value did you do well today?';
var qstruggle = 'What King Value did you struggle with today?';

var values = [
		{'name':'Respect', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/respect.mp3'},
		{'name':'Responsibility', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/responsibility.mp3'},
		{'name':'Kindness', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/kindness.mp3'},
	];

var scenarios = {
	"Respect" : [
		{'text':'With a classmate'},
		{'text':'With the teacher'},
		{'text':'With a class assistant'},
		{'text':"With someone's belongings"},
		{'text':'With school property'}
	],
	"Responsibility" : [
		{'text':'Doing my best work'},
		{'text':'Sitting quietly'},
		{'text':'Following directions'},
		{'text':'Using self control'}
	],
	"Kindness" : [
		{'text':'Using kind words'},
		{'text':'Using manners'},
		{'text':'Being nice to friends'},
		{'text':'Being inclusive'}
	]
};

function makequestions(q) {
	$('#hella').html('');
	$('#q').html(q);
	for (var i=0; i<values.length; i++) {
		txt = values[i]['name'];
		var $valbox = $('#template').clone();
		$valbox.attr('onclick','makevals("'+txt+'",'+(q===qwell)+')');
		$valbox.attr('id','');
		$valbox.find('div.option').attr('id',txt);
		$valbox.css('display','block');
		$valbox.find('i').attr('id', 'icon'+ txt);
		$valbox.find('p').html(txt);
		$valbox.find('audio').attr('id', 'audio'+txt);
		$valbox.find('audio').attr('src', values[i]['url']);
		$('#values').append($valbox);
	}
}

function makevals(val, finish) {
	$('#values').html('');
	console.log(val);
	if (!finish) {
		$('#q').html('In what way did you struggle with '+val+'?');
	}
	else {
		$('#q').html('In what way did you do '+val+' well?');
	}
	for (var i=0; i<scenarios[val].length; i++) {
		txt = scenarios[val][i]['text'];
		var $valbox = $('#template').clone();
		if (!finish) {
			$valbox.attr('onclick','makequestions(qwell)');
		}
		else {
			$valbox.attr('onclick',''); //redirect here
		}
		$valbox.css('display','block');
		$valbox.find('i').remove();
		$valbox.find('p').html(txt);
		$valbox.find('audio').remove();
		$('#hella').append($valbox);
	}
		
}

makequestions(qstruggle);