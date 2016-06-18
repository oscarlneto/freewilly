/**
 * PostReacaoController
 *
 * @description :: Server-side logic for managing follows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (request, response) {

		var postReacao = {};
		postReacao.idPost = PostReacao.setUndefined(request.param('idPost'));
		postReacao.usuario = PostReacao.setUndefined(request.param('usuario'));
		postReacao.reacao = PostReacao.setUndefined(request.param('reacao'));
		postReacao.compartilhou = Post.setUndefined(request.param('compartilhou'));
		
		PostReacaoService.insert(postReacao, function (result) {
			response.json(result);
		});
	},

	set: function (request, response) {
		
		var postReacao = {};
		postReacao.idPost = PostReacao.setUndefined(request.param('idPost'));
		postReacao.usuario = PostReacao.setUndefined(request.param('usuario'));
		postReacao.reacao = PostReacao.setUndefined(request.param('reacao'));
		postReacao.compartilhou = PostReacao.setUndefined(request.param('compartilhou'));

		PostReacaoService.update(postReacao, function (result) {
			response.json(result);
		});
	},

	remove: function (request, response) {

		var postReacao = {};
		postReacao.idPost = PostReacao.setUndefined(request.param('idPost'));
		postReacao.usuario = PostReacao.setUndefined(request.param('usuario'));
		
		PostReacaoService.delete(postReacao, function (result) {
			response.json(result);
		});
	},

	get: function (request, response) {

		var postReacao = {};
		postReacao.idPost = PostReacao.setUndefined(request.param('idPost'));
		postReacao.usuario = PostReacao.setUndefined(request.param('usuario'));

		PostReacaoService.select(postReacao, function (result) {
			response.json(result);
		});
	}
}