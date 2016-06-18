module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Follow (usuario, follow) VALUES ("+Follow.setMarks(request.usuario)+", "
						+Follow.setMarks(request.follow)+");";

		Follow.query(query, function (error, results) {

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

		var query = "UPDATE Follow SET ";

		Follow.query(query, function (error, results) {

			if(error)
				sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(results);
		});
	},*/

	delete: function(request, response) {

		var query = "DELETE FROM Follow WHERE usuario = "+Follow.setMarks(request.usuario)
						+" AND follow = "+Follow.setMarks(request.follow)+";";

		Follow.query(query, function (error, results) {

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

		var query = "SELECT * FROM Follow WHERE usuario = "+Follow.setMarks(request.usuario)+";";

		Follow.query(query, function (error, results) {

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