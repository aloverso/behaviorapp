
// the question headers for the questions that get asked
var qwell = 'What King Value did you do well today?';
var qstruggle = 'What King Value did you struggle with today?';

// storing the values and the url for the audio file
var values = [
		{'name':'Respect', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/respect.mp3'},
		{'name':'Responsibility', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/responsibility.mp3'},
		{'name':'Kindness', 'url':'https://ssl.gstatic.com/dictionary/static/sounds/de/0/kindness.mp3'},
	];

// the text for each "scenario" option for each value
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

function hella(txt) {
	console.log('holla'+txt);
}

/*
this function sets the header question to the text of q and
sets the #values div to be boxes, each one having the text of one of the
King Values as an option
*/
function makequestions(q) {
	$('#scenarios').html('');
	$('#q').html(q);
	for (var i=0; i<values.length; i++) {
		txt = values[i]['name']; // name of King Value
		url = values[i]['url'];
		var $valbox = $('#template').clone();

		// when clicking box, it makes the values for that value
		
		$valbox.attr('id','');
		$valbox.css('display','block');
		$valbox.find('i').attr('id', txt);

		$valbox.find('audio').attr('id', 'audio'+txt);
		$valbox.find('audio').attr('src', url);

		$valbox.find('i').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			$('#audio'+this.id)[0].play();
			return false;
		});

		$valbox.attr('onclick','makevals("'+txt+'",'+(q===qwell)+')');
		$valbox.find('p').html(txt);
		$('#values').append($valbox);
	}
}

/*
this function makes the layout for the user to choose in what scenario
they struggled with or did well with that value

the finish variable indicates whether we are finished with questions:
if it's false, after answering this question it swicthes back to make questions
for the next question.  if true, it currently does nothing when clicked
but should eventually go to the logout/finish screen
*/
function makevals(val, finish) {
	$('#values').html(''); // clear the values answer boxes
	console.log(val);

	// if it's the last question, it's 'what did you do well'
	// if it's not the last (it's first), it's the struggle with question
	if (!finish) {
		$('#q').html('In what way did you struggle with '+val+'?');
		$.post('saveanswer',{
			'question':'StruggleQuestion',
			'response':val
		});
	}
	else {
		$('#q').html('In what way did you do '+val+' well?');
		$.post('saveanswer',{
			'question':'WellQuestion',
			'response':val
		})
	}

	// loop through scenario for the give value
	for (var i=0; i<scenarios[val].length; i++) {
		txt = scenarios[val][i]['text'];
		var $valbox = $('#template').clone();

		$valbox.attr('onclick','logScenario("'+txt+'",'+finish+')');
		
		$valbox.css('display','block');
		$valbox.find('i').remove();
		$valbox.find('p').html(txt);
		$valbox.find('audio').remove();
		$('#scenarios').append($valbox);
	}

}

function logScenario(txt, finish) {
	$.post('saveanswer',{
			'question': (finish ? 'WellScenario' : 'StruggleScenario'),
			'response':txt
		});
	if (finish) {
		location.href='/finish';
	}
	else {
		makequestions(qwell);
	}
}

// start by making questions about what you struggled with
makequestions(qstruggle);
