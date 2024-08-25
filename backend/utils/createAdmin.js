const mongoose = require('mongoose');
const User = require('../models/User');

const createAdmin = async () => {
  try {
    const admin = await User.findOne({ username: 'admin' });
    if (!admin) {
      const newAdmin = new User({
        username: 'admin',
        password: 'admin',
        role: 'admin',
      });
      await newAdmin.save();
      console.log('Admin user created');
    } else {
      console.log('Admin user already exists');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

module.exports = createAdmin;
