/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing follows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (request, response) {

		var usuario = {};
		usuario.usuario = Usuario.setUndefined(request.param('usuario'));
		usuario.senha = Usuario.setUndefined(request.param('senha'));
		usuario.nome = Usuario.setUndefined(request.param('nome'));
		usuario.aniversario = Usuario.setUndefined(request.param('aniversario'));
		usuario.foto = Usuario.setUndefined(request.param('foto'));
		usuario.descricao = Usuario.setUndefined(request.param('descricao'));

		UsuarioService.insert(usuario, function (result) {
			response.json(result);
		});
	},

	set: function (request, response) {
		
		var usuario = {};
		usuario.usuario = Usuario.setUndefined(request.param('usuario'));
		usuario.senha = Usuario.setUndefined(request.param('senha'));
		usuario.nome = Usuario.setUndefined(request.param('nome'));
		usuario.aniversario = Usuario.setUndefined(request.param('aniversario'));
		usuario.foto = Usuario.setUndefined(request.param('foto'));
		usuario.descricao = Usuario.setUndefined(request.param('descricao'));

		UsuarioService.update(usuario, function (result) {
			response.json(result);
		});
	},

	remove: function (request, response) {

		var usuario = {};
		usuario.usuario =  Usuario.setUndefined(request.param('usuario'));
		
		UsuarioService.delete(usuario, function (result) {
			response.json(result);
		});
	},

	get: function (request, response) {

		var usuario = {};
		usuario.usuario =  Usuario.setUndefined(request.param('usuario'));

		UsuarioService.select(usuario, function (result) {
			response.json(result);
		});
	},

	getAll: function (request, response) {
		var usuario = {};

		var usuario = {};
		usuario.usuario =  Usuario.setUndefined(request.param('usuario'));

		UsuarioService.selectAll(usuario, function (result) {
			response.json(result);
		});
	},

	login: function (request, response) {

		var usuario = {};
		usuario.usuario =  Usuario.setUndefined(request.param('usuario'));
		usuario.senha =  Usuario.setUndefined(request.param('senha'));

		UsuarioService.selectByUsuarioAndSenha(usuario, function (result) {
			 response.json(result);
		});
	}
}