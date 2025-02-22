import db from '@/database';
import slugify from 'slugify';
// [POST] /admin/auth/login
export const login = async (req, res, next) => {
	try {
		const { username, password } = req.body;

		// Find user by email address
		const admin = await db.models.User.findOne({ where: { username, role: 'admin' } });
		if (!admin) {
			return res.status(400).json({ code: 400, message: 'There is no user with this username!' });
		}
		// Check user password
		const isValidPassword = await admin.validatePassword(password);
		if (!isValidPassword) {
			return res.status(400).json({ code: 400, message: 'Incorrect password!' });
		}

		// Generate and return token
		const token = admin.generateToken();
		return res.status(200).json({ code: 200, token });
	} catch (err) {
		return next(err);
	}
};

// [POST] /admin/auth/register
export const register = async (req, res, next) => {
	try {
		const { fullName, username, password } = req.body;
		// Check if user exists
		const userExists = await db.models.User.findOne({
			where: {
				username: username,
			},
		});

		if (userExists) {
			return res.status(400).json({ code: 400, message: 'User already exists!' });
		}

		// Create user
		const admin = await db.models.User.create({
			fullName: fullName,
			password: password,
			username: username,
			role: 'admin',
		});

		// Generate and return tokens
		const token = admin.generateToken();
		return res.status(201).json({ code: 201, token });
	} catch (err) {
		next(err);
	}
};
