//var DEF_USER_PHOTO = '/images/views/profile_default.png';
//var DEF_COVER_PHOTO = '/images/views/cover_default.png';

module.exports = {

	tableName: 'usuario',
	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {

		usuario : {
			type: 'string',
			primaryKey: true
		},

		senha : {
			type: 'string'
		},

		nome : {
			type: 'string'
		},

		aniversario : {
			type: 'date'
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
	},

	formatDate: function (result) {
		
		for (var i = 0; i < result.rowCount; i++) {

			if (result.rows[i].aniversario != null){

				var date = new Date(result.rows[i].aniversario);
				result.rows[i].aniversario = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
			}
		}
	}
};