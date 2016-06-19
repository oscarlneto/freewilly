/**
 * PostController
 *
 * @description :: Server-side logic for managing follows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

/* Metodo create:
 *
 * Parametros:
 *
 * Retorno:
 *
 */
	create: function (request, response) {

		var post = {};
		post.usuario = Post.setUndefined(request.param('usuario'));
		post.titulo = Post.setUndefined(request.param('titulo'));
		post.conteudo = Post.setUndefined(request.param('conteudo'));
		post.idGrupo = Post.setUndefined(request.param('idGrupo'));

		console.log(post);
		
		PostService.insert(post, function (result) {
			response.json(result);
		});
	},

	set: function (request, response) {
		
		var post = {};
		post.idPost = Post.setUndefined(request.param('idPost'));
		post.usuario = Post.setUndefined(request.param('usuario'));
		post.titulo = Post.setUndefined(request.param('titulo'));
		post.conteudo = Post.setUndefined(request.param('conteudo'));
		post.idGrupo = Post.setUndefined(request.param('idGrupo'));

		PostService.update(post, function (result) {
			response.json(result);
		});
	},

	remove: function (request, response) {

		var post = {};
		post.idPost = Post.setUndefined(request.param('idPost'));
		
		PostService.delete(post, function (result) {
			response.json(result);
		});
	},

	get: function (request, response) {

		var post = {};
		post.idPost = Post.setUndefined(request.param('idPost'));

		PostService.select(post, function (result) {
			response.json(result);
		});
	},

	getByUsuario: function (request, response) {

		var post = {};
		post.usuario = Post.setUndefined(request.param('usuario'));

		PostService.selectByUsuario(post, function (result) {
			response.json(result);
		});
	},

	getByGrupo: function (request, response) {

		var post = {};
		post.idGrupo = Post.setUndefined(request.param('idGrupo'));

		PostService.selectByGrupo(post, function (result) {
			response.json(result);
		});
	},

	getByUsuarioFollow: function (request, response) {

		var post = {};
		post.usuario = Post.setUndefined(request.param('usuario'));

		PostService.selectByUsuarioFollow(post, function (result) {
			response.json(result);
		});
	}
}