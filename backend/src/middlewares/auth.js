const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Sequelize User model

module.exports = async function(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;

        // Check if user exists in the database
        const user = await User.findByPk(req.user.id);
        if (!user) {
            return res.status(401).json({ msg: 'User no longer exists' });
        }

        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};