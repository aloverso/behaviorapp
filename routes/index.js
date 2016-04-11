var routes = {};
var util = require('util');

routes.home = function(req, res) {
	res.render('signIn', {'students':
		[
      {
        'name': 'Paige'
      },
      {
        'name' : 'Avalon'
      },
			{
        'name': 'Paige'
      },
			{
        'name': 'Paige'
      },
			{
        'name': 'Paige'
      },
			{
        'name': 'Paige'
      },
			{
        'name': 'Paige'
      },
			{
        'name': 'Paige'
      },
			{
        'name': 'Paige'
      },
		]
	});
};

module.exports = routes;
