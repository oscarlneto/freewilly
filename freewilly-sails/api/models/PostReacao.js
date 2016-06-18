module.exports = {

	tableName: 'postreacao',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	
	attributes: {

		idPost : {
			type: 'integer',
			primaryKey: true
		},

		usuario : {
			type: 'string',
			primaryKey: true
		},

		reacao : {
			type: 'integer'
		},

		compartilhou : {
			type: 'boolean'
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