module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Post (usuario, titulo, conteudo) VALUES ("
						+Post.setMarks(request.usuario)+", "+Post.setMarks(request.titulo)+", "
						+Post.setMarks(request.conteudo)+");";

		Post.query(query, function (error, results) {

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

		var query = "UPDATE Post SET usuario = "+Post.setMarks(request.usuario)+", titulo = "+Post.setMarks(request.titulo)+", "
						+"conteudo = "+Post.setMarks(request.conteudo)+" WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, results) {

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

		var query = "DELETE FROM Post WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, results) {

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

		var query = "SELECT * FROM Post WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, results) {

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

		var query = "SELECT * FROM Post WHERE usuario = "+Post.setMarks(request.usuario)+";";

		Post.query(query, function (error, results) {

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