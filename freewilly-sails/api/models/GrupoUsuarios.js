module.exports = {

	tableName: 'grupousuarios',
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

	},

	setUndefined: function (field) {
		
		if(field != "" || field != undefined)
			return field;

		return null;
	},

	setMarks: function (string) {

		if(string != null)
			return "'"+string+"'";

		return string;
	}
};