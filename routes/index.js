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

routes.finish = function(req, res) {
	res.render('finish');
}

module.exports = routes;
