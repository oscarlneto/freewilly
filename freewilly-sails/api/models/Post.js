module.exports = {

	tableName: 'post',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	
	attributes: {

		idPost : {
			type: 'integer',
			primaryKey: true
		},

		usuario : {
			type: 'string'
		},

		titulo : {
			type: 'string'
		},

		conteudo : {
			type: 'string'
		},

		data : {
			type: 'date'
		},

		idGrupo : {
			type: 'integer'
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

	formatDateTime: function (result) {
		
		for (var i = 0; i < result.rowCount; i++) {

			if (result.rows[i].data != null){

				var date = new Date(result.rows[i].data);
				result.rows[i].data = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
			}
		}
	}
};