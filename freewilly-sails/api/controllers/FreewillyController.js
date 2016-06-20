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
	},
	profile: function (req, res) {
		res.view('paginas/profile', {cwd: 'spicty'});
	},
	newpost: function (req, res) {
		res.view('paginas/newpost', {cwd: 'spicty'});
	},
	newgroup: function (req, res) {
		res.view('paginas/newgroup', {cwd: 'spicty'});
	},
	groupindex: function (req, res) {
		res.view('paginas/groupindex', {cwd: 'spicty'});
	},
	user: function (req, res) {
		res.view('paginas/user', {cwd: 'spicty'});
	},
	updatepost: function (req, res) {
		res.view('paginas/updatepost', {cwd: 'spicty'});
	}
};