module.exports = {

	insert: function(request, response) {

		var query = "INSERT INTO Follow (usuario, follow) VALUES ("+Follow.setMarks(request.usuario)+", "
						+Follow.setMarks(request.follow)+");";

		Follow.query(query, function (error, result) {

			if(error) {
				return response({sucesso: false});
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	/*update: function(request, response) {

		var query = "UPDATE Follow SET ";

		Follow.query(query, function (error, result) {

			if(error)
				sails.log.debug(error);
				return response({sucesso: false});

			else 
				return response(result);
		});
	},*/

	delete: function(request, response) {

		var query = "DELETE FROM Follow WHERE usuario = "+Follow.setMarks(request.usuario)
						+" AND follow = "+Follow.setMarks(request.follow)+";";

		Follow.query(query, function (error, result) {

			if(error) {
				return response({sucesso: false});
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	},

	selectByUsuario: function(request, response) {

		var query = "SELECT * FROM Follow WHERE usuario = "+Follow.setMarks(request.usuario)+";";

		Follow.query(query, function (error, result) {

			if(error || result.rowCount == 0) {
				return response({sucesso: false});
			}

			else {
				result.sucesso = true;
				return response(result);
			}
		});
	}
}