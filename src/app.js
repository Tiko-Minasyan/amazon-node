require("dotenv").config({
	path: ".env",
});
require("./db-connection");
const cors = require("cors");
const users = require("./users/users.controller");
const products = require("./products/products.controller");
const colors = require("./colors/colors.controller");
const express = require("express");
const app = express();
const { handleError } = require("./middlewares/error-handler");
const authMiddleware = require("./middlewares/auth");

app.use(cors());
app.use(express.json());

app.use(
	authMiddleware.unless({
		path: ["/users/login", "/users/register", "/products"],
	})
);

app.use("/users", users);
app.use("/products", products);
app.use("/colors", colors);

app.use(handleError);

module.exports = app;
