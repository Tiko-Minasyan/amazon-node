const express = require("express");
const router = express.Router();
const products = require("./products.service");
const asyncHandler = require("express-async-handler");

router.use(function timeLog(req, res, next) {
	console.log("Products request received. Time: ", new Date());
	next();
});

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const result = await products.getAll();
		res.json(result);
	})
);

router.post(
	"/create",
	asyncHandler(async (req, res) => {
		const body = req.body;
		const result = products.create(body, req.user.id);
		res.status(201).json(result);
	})
);

router.get(
	"/myproducts",
	asyncHandler(async (req, res) => {
		const results = await products.findProducts(req.user.id);
		res.json(results);
	})
);

router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const product = await products.findProduct(req.params.id);
		res.json(product);
	})
);

router.patch(
	"/:id",
	asyncHandler(async (req, res) => {
		const body = req.body;
		const result = await products.editProduct(body);
		res.json(result);
	})
);

router.delete(
	"/:id",
	asyncHandler(async (req, res) => {
		const result = await products.deleteProduct(req.params.id);
		res.json(result);
	})
);

module.exports = router;
