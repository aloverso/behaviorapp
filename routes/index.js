var routes = {};
var util = require('util');

routes.home = function(req, res) {
	res.render('home');
}

module.exports = routes;
