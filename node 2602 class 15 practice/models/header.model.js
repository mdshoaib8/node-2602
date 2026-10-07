const mongoose = require('mongoose');

const headerSchema = new mongoose.Schema(
    {
        logo: {
            type: String,
            required: true
        },
        navList: {
            type: [String],
            required: true
        },
        searchIcon: {
            type: String,
            required: true 
        },
        cartIcon: {
            type: String,
            required: true
        },
        contactBtn: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Header = mongoose.model("Header", headerSchema);
module.exports = Header;