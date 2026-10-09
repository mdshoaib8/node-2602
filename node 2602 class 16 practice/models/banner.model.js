const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema(
    {
        banner_title: {
            type: String,
            required: true,
        },
        banner_description: {
            type: String,
            required: true,
        },
        banner_btn_1: {
            type: String,
            required: true,
        },
        banner_btn_2: [
            {
                type: String,
                required: true
            },
            {
                type: String,
                required: true
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Banner = mongoose.model('Banner', bannerSchema);
module.exports = Banner;