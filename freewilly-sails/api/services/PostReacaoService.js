module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO PostReacao (idPost, usuario, reacao, compartilhou) VALUES ("
						+request.idPost+", "+PostReacao.setMarks(request.usuario)+", "
						+request.reacao+", "+request.compartilhou+");";

		PostReacao.query(query, function (error, result) {

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

		var query = "UPDATE PostReacao SET reacao = "+request.reacao+", compartilhou = "+request.compartilhou+" "
						+"WHERE idPost = "+request.idPost+" AND usuario = "+PostReacao.setMarks(request.usuario)+";";

		PostReacao.query(query, function (error, result) {

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

		var query = "DELETE FROM PostReacao WHERE idPost = "+request.idPost
						+" AND usuario = "+PostReacao.setMarks(request.usuario)+";";

		PostReacao.query(query, function (error, result) {

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

		var query = "SELECT * FROM PostReacao WHERE idPost = "+request.idPost
			+" AND usuario = "+PostReacao.setMarks(request.usuario)+";";

		PostReacao.query(query, function (error, result) {

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