module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Post (usuario, titulo, conteudo, idGrupo) VALUES ("
						+Post.setMarks(request.usuario)+", "+Post.setMarks(request.titulo)+", "
						+Post.setMarks(request.conteudo)+", "+request.idGrupo+");";

		console.log(query);

		Post.query(query, function (error, result) {

			if(error) {
				return response({sucesso: false});
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	update: function(request, response) {

		var query = "UPDATE Post SET usuario = "+Post.setMarks(request.usuario)+", titulo = "+Post.setMarks(request.titulo)+", "
						+"conteudo = "+Post.setMarks(request.conteudo)+", idGrupo = "+request.idGrupo
						+" WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, result) {

			if(error) {
				return response({sucesso: false});
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	delete: function(request, response) {

		var query = "DELETE FROM Post WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, result) {

			if(error) {
				return response({sucesso: false});
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	select: function(request, response) {

		var query = "SELECT * FROM Post WHERE idPost = "+request.idPost+";";

		Post.query(query, function (error, result) {

			if(error || result.rowCount == 0) {
				return response({sucesso: false});
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	selectByUsuario: function(request, response) {

		var query = "SELECT * FROM Post JOIN Usuario ON Post.usuario = Usuario.usuario "
					+"WHERE Post.usuario = "+Post.setMarks(request.usuario)+" ORDER BY Post.data DESC;";

		Post.query(query, function (error, result) {

			if(error || result.rowCount == 0) {
				return response({sucesso: false});
			}

			else {

				Post.formatDateTime(result);

				result.sucesso = true;
				return response(result);
			}
		});
	},

	selectByGrupo: function(request, response) {

		var query = "SELECT Post.idPost, Post.usuario, Post.titulo, Post.conteudo, Post.data, Usuario.foto "
						+"FROM Post JOIN Usuario ON Post.usuario = Usuario.usuario "
						+"WHERE Post.idGrupo = "+request.idGrupo+" ORDER BY data DESC;";

		Post.query(query, function (error, result) {

			if(error || result.rowCount == 0) {
				return response({sucesso: false});
			}

			else {
				Post.formatDateTime(result);

				result.sucesso = true;
				return response(result);
			}
		});
	},

	selectByUsuarioFollow: function(request, response) {

		var query = "SELECT Post.idPost, Post.usuario, Post.titulo, Post.conteudo, Post.data, Usuario.foto "
						+"FROM Post JOIN Follow ON Post.usuario = Follow.follow "
						+"JOIN Usuario ON Post.usuario = Usuario.usuario "
						+"WHERE Follow.usuario = "+Post.setMarks(request.usuario)+" ORDER BY Post.data DESC;";

		Post.query(query, function (error, result) {

			if(error || result.rowCount == 0) {
				return response({sucesso: false});
			}

			else {
				Post.formatDateTime(result);

				result.sucesso = true;
				return response(result);
			}
		});
	}
}