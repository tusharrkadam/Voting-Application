const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Use bcryptjs for compatibility

// Define the User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String },
    mobile: { type: String },
    address: { type: String, required: true },
    aadharCardNumber: { type: Number, required: true, unique: true }, // Fixed typo: unique
    password: { type: String, required: true },
    role: { type: String, enum: ['voter', 'admin'], default: 'voter' },
    isVoted: { type: Boolean, default: false }
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Skip if password is unchanged
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
