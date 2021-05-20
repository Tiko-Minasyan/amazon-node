const express = require("express");
const router = express.Router();
const Color = require("./color.entity");
const asyncHandler = require("express-async-handler");

router.use(function timeLog(req, res, next) {
	console.log("Colors request received. Time: ", new Date());
	next();
});

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const result = await Color.find({});
		res.json(result);
	})
);

module.exports = router;
