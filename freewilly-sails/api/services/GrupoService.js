module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Grupo (usuario, nome, foto, descricao) VALUES ("
			+Grupo.setMarks(request.usuario)+", "+Grupo.setMarks(request.nome)+", "
			+Grupo.setMarks(request.foto)+", "+Grupo.setMarks(request.descricao)+");";

		Grupo.query(query, function (error, result) {

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

	update: function(request, response) {

		var query = "UPDATE Grupo SET usuario = "+Grupo.setMarks(request.usuario)+", nome = "+Grupo.setMarks(request.nome)+", "
		+"foto = "+Grupo.setMarks(request.foto)+", descricao = "+Grupo.setMarks(request.descricao)
		+" WHERE idGrupo = "+request.idGrupo+";";

		Grupo.query(query, function (error, result) {

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

	delete: function(request, response) {

		var query = "DELETE FROM Grupo WHERE idGrupo = "+request.idGrupo+";";

		Grupo.query(query, function (error, result) {

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

	select: function(request, response) {

		var query = "SELECT * FROM Grupo WHERE idGrupo = "+request.idGrupo+";";

		Grupo.query(query, function (error, result) {

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

	selectByUsuario: function(request, response) {

		var query = "SELECT * FROM Grupo WHERE usuario = "+Grupo.setMarks(request.usuario)+";";

		Grupo.query(query, function (error, result) {

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