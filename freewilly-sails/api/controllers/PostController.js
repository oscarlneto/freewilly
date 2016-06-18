/**
 * PostController
 *
 * @description :: Server-side logic for managing follows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (request, response) {

		var post = {};
		post.usuario = Post.setUndefined(request.param('usuario'));
		post.titulo = Post.setUndefined(request.param('titulo'));
		post.conteudo = Post.setUndefined(request.param('conteudo'));
		
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
	}
}