/**
 * GrupoUsuariosController
 *
 * @description :: Server-side logic for managing grupoUsuarioss
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	create: function (request, response) {

		var grupoUsuarios = {};
		grupoUsuarios.idGrupo = GrupoUsuarios.setUndefined(request.param('idGrupo'));
		grupoUsuarios.usuario = GrupoUsuarios.setUndefined(request.param('usuario'));

		GrupoUsuariosService.insert(grupoUsuarios, function (result) {
			response.json(result);
		});
	},

	/*set: function (request, response) {
		
		var grupoUsuarios = {};
		grupoUsuarios.grupoUsuarios = GrupoUsuarios.setUndefined(request.param('grupoUsuarios'));
		grupoUsuarios.senha = GrupoUsuarios.setUndefined(request.param('senha'));
		grupoUsuarios.nome = GrupoUsuarios.setUndefined(request.param('nome'));
		grupoUsuarios.aniversario = GrupoUsuarios.setUndefined(request.param('aniversario'));
		grupoUsuarios.foto = GrupoUsuarios.setUndefined(request.param('foto'));
		grupoUsuarios.descricao = GrupoUsuarios.setUndefined(request.param('descricao'));

		GrupoUsuariosService.update(grupoUsuarios, function (result) {
			response.json(result);
		});
	},*/

	remove: function (request, response) {

		var grupoUsuarios = {};
		grupoUsuarios.idGrupo = GrupoUsuarios.setUndefined(request.param('idGrupo'));
		grupoUsuarios.usuario = GrupoUsuarios.setUndefined(request.param('usuario'));
		
		GrupoUsuariosService.delete(grupoUsuarios, function (result) {
			response.json(result);
		});
	},

	getByUsuario: function (request, response) {

		var grupoUsuarios = {};
		grupoUsuarios.usuario = GrupoUsuarios.setUndefined(request.param('usuario'));

		GrupoUsuariosService.selectByUsuario(grupoUsuarios, function (result) {
			response.json(result);
		});
	},

	getByIdGrupo: function (request, response) {

		var grupoUsuarios = {};
		grupoUsuarios.idGrupo = GrupoUsuarios.setUndefined(request.param('idGrupo'));

		GrupoUsuariosService.selectByIdGrupo(grupoUsuarios, function (result) {
			response.json(result);
		});
	},

	getByIdGrupoUsuario: function (request, response) {

		var grupoUsuarios = {};
		grupoUsuarios.idGrupo = GrupoUsuarios.setUndefined(request.param('idGrupo'));
		grupoUsuarios.usuario = GrupoUsuarios.setUndefined(request.param('usuario'));

		GrupoUsuariosService.selectByIdGrupoUsuario(grupoUsuarios, function (result) {
			response.json(result);
		});
	}
};