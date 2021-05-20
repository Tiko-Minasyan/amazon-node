const Color = require("./color.entity");

class ColorService {
	async findOne(id) {
		const color = await Color.findById(id);
		return color;
	}
}

module.exports = new ColorService();
