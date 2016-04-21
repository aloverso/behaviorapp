var routes = {};
var util = require('util');

var Student = require('../models/studentModel.js');
var Response = require('../models/responseModel.js');

routes.home = function(req,res) {
	res.render('home');
},

routes.signin = function(req, res) {
	res.render('signIn', {'students':
		[
      {
        'name': 'Paige'
      },
      {
        'name' : 'Avalon'
      },
			{
        'name': 'John'
      },
			{
        'name': 'Isaac'
      },
			{
        'name': 'Cameron'
      },
			{
        'name': 'Zoe'
      },
			{
        'name': 'Jessica'
      },
			{
        'name': 'Heather'
      }
		]
	});
},


routes.question = function(req, res) {
	res.render('question');
},

routes.saveanswer = function(req, res) {
	var ans = {}
	ans.name = routes.name,
	ans.date = new Date().toJSON().slice(0,10),
	ans.question = req.body.question,
	ans.response = req.body.response

	var saveResp = new Response(ans);

	saveResp.save(function(err) {
		if (err) {console.log('err:', err);}
		else {console.log('save success');}
	});

	console.log(ans);

	// video.id = saveVideo._id;
	// res.send(video);
},

routes.savename = function(req, res) {
	routes.name = req.body.name;
	console.log(routes.name);
}

routes.finish = function(req, res) {
	console.log(routes.name);
	res.render('finish');
}

module.exports = routes;
