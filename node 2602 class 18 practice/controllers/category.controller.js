const Category = require('../models/category.model');

exports.createCategoryController = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Category name is required"
            });
        }

        // ১. আগে থেকেই এই নামের ক্যাটাগরি আছে কিনা চেক করুন
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category already exists with this name"
            });
        }

        // ২. নতুন ক্যাটাগরি তৈরি করুন
        const category = await Category.create({ name, description });

        return res.status(201).json({
            success: true,
            data: category
        });
    } catch (error) {
        console.error("Error creating category:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


exports.readAllCategoriesController = async (req, res) => {
    try {
        // .populate() যোগ করার ফলে আইডি-র বদলে সাব-ক্যাটাগরির অবজেক্ট আসবে
        const categories = await Category.find().populate('subcategories');

        return res.status(200).json({
            success: true,
            data: categories
        });
    } catch (error) {
        console.error("Error reading categories:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
