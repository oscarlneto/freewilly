module.exports = {

	tableName: 'follow',
	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {

		usuario : {
			type: 'string',
			primaryKey: true
		},

		follow : {
			type: 'string',
			primaryKey: true
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