const { default: mongoose } = require('mongoose');

const subcategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: false
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Subcategory = mongoose.model('Subcategory', subcategorySchema);
module.exports = Subcategory;
