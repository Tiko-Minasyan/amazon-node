const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		hex: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ collection: "colors" }
);

module.exports = mongoose.model("Color", schema);
