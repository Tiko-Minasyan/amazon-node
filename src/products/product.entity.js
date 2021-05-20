const mongoose = require("mongoose");
const User = require("../users/user.entity");
const Color = require("../colors/color.entity");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		description: {
			type: String,
			required: true,
			trim: true,
		},

		brand: {
			type: String,
			required: true,
			trim: true,
		},

		price: {
			type: Number,
			required: true,
		},

		colors: [
			{
				color: {
					type: String,
					required: true,
					trim: true,
				},
			},
		],

		images: [
			{
				image: {
					type: Buffer,
					required: true,
				},

				isDefault: {
					type: Boolean,
					default: false,
				},
			},
		],

		published: {
			type: Boolean,
			default: true,
		},

		timesBought: {
			type: Number,
			default: 0,
		},

		earnings: {
			type: Number,
			default: 0,
		},

		owner: {
			type: mongoose.Types.ObjectId,
			ref: User,
			required: true,
		},

		colors: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: Color,
			},
		],
	},
	{ collection: "products" }
);

module.exports = mongoose.model("Product", schema);
