/**
 * FollowController
 *
 * @description :: Server-side logic for managing follows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	create: function (request, response) {

		var follow = {};
		follow.usuario = Follow.setUndefined(request.param('usuario'));
		follow.follow = Follow.setUndefined(request.param('follow'));

		FollowService.insert(follow, function (result) {
			response.json(result);
		});
	},

	/*set: function (request, response) {
		
		var follow = {};
		follow.follow = Follow.setUndefined(request.param('follow'));
		follow.senha = Follow.setUndefined(request.param('senha'));
		follow.nome = Follow.setUndefined(request.param('nome'));
		follow.aniversario = Follow.setUndefined(request.param('aniversario'));
		follow.foto = Follow.setUndefined(request.param('foto'));
		follow.descricao = Follow.setUndefined(request.param('descricao'));

		FollowService.update(follow, function (result) {
			response.json(result);
		});
	},*/

	remove: function (request, response) {

		var follow = {};
		follow.usuario = Follow.setUndefined(request.param('usuario'));
		follow.follow = Follow.setUndefined(request.param('follow'));
		
		FollowService.delete(follow, function (result) {
			response.json(result);
		});
	},

	getByUsuario: function (request, response) {

		var follow = {};
		follow.usuario = Follow.setUndefined(request.param('usuario'));

		FollowService.selectByUsuario(follow, function (result) {
			response.json(result);
		});
	},

	getByFollow: function (request, response) {

		var follow = {};
		follow.follow = Follow.setUndefined(request.param('usuario'));

		FollowService.selectByFollow(follow, function (result) {
			response.json(result);
		});
	},

	getByUsuarioFollow: function (request, response) {

		var follow = {};
		follow.usuario = Follow.setUndefined(request.param('usuario'));
		follow.follow = Follow.setUndefined(request.param('follow'));

		FollowService.selectByUsuarioFollow(follow, function (result) {
			response.json(result);
		});
	}
};

