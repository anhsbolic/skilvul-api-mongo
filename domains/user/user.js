const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        role: {
            type: String,
            required: true,
            enum: ['admin', 'buyer', 'seller'],
        },
        status: {
            type: String,
            required: true,
            enum: ['active', 'inactive'],
            default: 'active',
        },
        registered_at: {
            type: Date,
            default: Date.now,
        },
    },
    {timestamps: true}
);

// index filter
userSchema.index({email: 1}, {name: "user_email_idx"});
userSchema.index({status: 1}, {name: "user_status_idx"});

// index search
userSchema.index(
    {
        description: "text"
    },
    {
        name: "user_search_idx",
        weights: {
            first_name: 2,
            last_name: 1,
        }
    }
);

exports.User = mongoose.model("User", userSchema);
