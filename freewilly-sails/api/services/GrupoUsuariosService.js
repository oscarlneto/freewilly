module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO GrupoUsuarios (idGrupo, usuario) VALUES ("+request.idGrupo+", "
						+GrupoUsuarios.setMarks(request.usuario)+");";

		GrupoUsuarios.query(query, function (error, result) {

			if(error) {
				result.sucesso = false;
				return response(result);
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	/*update: function(request, response) {

		var query = "UPDATE GrupoUsuarios SET ";

		GrupoUsuarios.query(query, function (error, result) {

			if(error)
				//sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(result);
		});
	},*/

	delete: function(request, response) {

		var query = "DELETE FROM GrupoUsuarios WHERE idGrupo = "+request.idGrupo+" AND usuario = "
						+GrupoUsuarios.setMarks(request.usuario)+";";

		GrupoUsuarios.query(query, function (error, result) {

			if(error) {
				result.sucesso = false;
				return response(result);
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	selectByUsuario: function(request, response) {

		var query = "SELECT * FROM GrupoUsuarios WHERE usuario = "+GrupoUsuarios.setMarks(request.usuario)+";";

		GrupoUsuarios.query(query, function (error, result) {

			if(error || result.rowCount == 0) {
				result.sucesso = false;
				return response(result);
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	selectByIdGrupo: function(request, response) {

		var query = "SELECT * FROM GrupoUsuarios WHERE idGrupo = "+request.idGrupo+";";

		GrupoUsuarios.query(query, function (error, result) {

			if(error || result.rowCount == 0) {
				result.sucesso = false;
				return response(result);
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	}
}