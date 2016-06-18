module.exports={
	index: function (req, res) {
		res.view('paginas/index', {cwd: 'index'});
	},
	login: function (req, res) {
		res.view('paginas/login', {cwd: 'login'});
	},
	register: function (req, res) {
		res.view('paginas/register', {cwd: 'register'});
	},
	group: function (req, res) {
		res.view('paginas/group', {cwd: 'group'});
	},
	spicy: function (req, res) {
		res.view('spicy', {cwd: 'spicty'});
	},
	users: function (req, res) {
		res.view('paginas/allusers', {cwd: 'spicty'});
	},
	about: function (req, res) {
		res.view('paginas/about', {cwd: 'spicty'});
	}
};