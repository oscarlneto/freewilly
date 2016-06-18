module.exports = {

	tableName: 'grupo',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	
	attributes: {

		idGrupo : {
			type: 'integer',
			primaryKey: true
		},

		usuario : {
			type: 'string'
		},

		nome : {
			type: 'string'
		},

		foto : {
			type: 'string'
		},

		descricao : {
			type: 'string'
		}

	},

	setUndefined: function (field) {
		
		if(field != "" && field != undefined)
			return field;

		return null;
	},

	setMarks: function (string) {

		if(string != null)
			return "'"+string+"'";

		return string;
	}
};