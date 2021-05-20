const User = require("./user.entity");
const { NotFound, Forbidden, Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

class UserService {
	create(data) {
		const user = new User(data);
		return user.save();
	}

	async login(data) {
		const user = await User.findOne({ email: data.email });
		if (!user) throw new NotFound("User not found!");
		if (user.password !== data.password) throw new Forbidden("Wrong password!");

		const token = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{
				expiresIn: process.env.JWT_EXPIRES_IN,
			}
		);

		return token;
	}

	async findOne(id) {
		const user = await User.findById(id);
		if (!user) throw new NotFoud("User not found!");
		return user;
	}

	async update(data, id) {
		let user = await User.findById(id);

		if (data.password !== "") {
			if (user.password !== data.oldPassword)
				throw new Forbidden("Wrong password!");
			user.password = data.password;
		}

		user.firstName = data.firstName;
		user.lastName = data.lastName;
		user.email = data.email;

		return user.save();
	}
}

module.exports = new UserService();
