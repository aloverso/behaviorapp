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
};

module.exports = routes;
