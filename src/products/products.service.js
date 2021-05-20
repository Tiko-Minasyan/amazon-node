const Product = require("./product.entity");

class ProductService {
	async getAll() {
		const products = await Product.find({ published: true }).populate("colors");
		return products;
	}

	create(data, id) {
		data.owner = id;
		const product = new Product(data);
		return product.save();
	}

	async findProducts(id) {
		const products = await Product.find({ owner: id }).populate("colors");
		return products;
	}

	async findProduct(id) {
		const product = await Product.findById(id).populate("colors");
		return product;
	}

	async editProduct(data) {
		const product = await Product.findById(data._id);
		Object.assign(product, data);
		return product.save();
	}

	deleteProduct(id) {
		const product = Product.findByIdAndRemove(id);
		return product;
	}
}

module.exports = new ProductService();
