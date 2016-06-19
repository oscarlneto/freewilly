module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Usuario (usuario, senha, nome, aniversario, foto, descricao) "
						+"VALUES ("+Usuario.setMarks(request.usuario)+", "+Usuario.setMarks(request.senha)+", "
						+Usuario.setMarks(request.nome)+", TO_DATE("+Usuario.setMarks(request.aniversario)+", 'DD/MM/YYYY'), "
						+Usuario.setMarks(request.foto)+", "+Usuario.setMarks(request.descricao)+");";

		Usuario.query(query, function (error, result) {

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

		var query = "UPDATE Usuario SET senha = "+Usuario.setMarks(request.senha)+", nome = "+Usuario.setMarks(request.nome)+", "
						+"aniversario = "+Usuario.setMarks(request.aniversario)+", foto = "+Usuario.setMarks(request.foto)+", "
						+"descricao = "+Usuario.setMarks(request.descricao)+" WHERE usuario = "+Usuario.setMarks(request.usuario)+";";

		Usuario.query(query, function (error, result) {

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

		var query = "DELETE FROM Usuario WHERE usuario = "+Usuario.setMarks(request.usuario)+";";

		Usuario.query(query, function (error, result) {

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

		var query = "SELECT * FROM Usuario WHERE usuario = "+Usuario.setMarks(request.usuario)+";";

		Usuario.query(query, function (error, result) {

			console.log(result);

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

	selectByUsuarioAndSenha: function(request, response) {

		var query = "SELECT * FROM Usuario WHERE usuario = "+Usuario.setMarks(request.usuario)
						+" AND senha = "+Usuario.setMarks(request.senha)+";";

		Usuario.query(query, function (error, result) {

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