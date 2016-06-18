/**
 * GrupoController
 *
 * @description :: Server-side logic for managing follows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (request, response) {

		var grupo = {};
		grupo.usuario = Grupo.setUndefined(request.param('usuario'));
		grupo.nome = Grupo.setUndefined(request.param('nome'));
		grupo.foto = Grupo.setUndefined(request.param('foto'));
		grupo.descricao = Grupo.setUndefined(request.param('descricao'));

		GrupoService.insert(grupo, function (result) {
			response.json(result);
		});
	},

	set: function (request, response) {
		
		var grupo = {};
		grupo.idGrupo = Grupo.setUndefined(request.param('idGrupo'));
		grupo.usuario = Grupo.setUndefined(request.param('usuario'));
		grupo.nome = Grupo.setUndefined(request.param('nome'));
		grupo.foto = Grupo.setUndefined(request.param('foto'));
		grupo.descricao = Grupo.setUndefined(request.param('descricao'));

		GrupoService.update(grupo, function (result) {
			response.json(result);
		});
	},

	remove: function (request, response) {

		var grupo = {};
		grupo.idGrupo =  Grupo.setUndefined(request.param('idGrupo'));
		
		GrupoService.delete(grupo, function (result) {
			response.json(result);
		});
	},

	get: function (request, response) {

		var grupo = {};
		grupo.idGrupo =  Grupo.setUndefined(request.param('idGrupo'));

		GrupoService.select(grupo, function (result) {
			response.json(result);
		});
	},

	getByUsuario: function (request, response) {

		var grupo = {};
		grupo.usuario = Grupo.setUndefined(request.param('usuario'));

		GrupoService.selectByUsuario(grupo, function (result) {
			response.json(result);
		});
	}
}