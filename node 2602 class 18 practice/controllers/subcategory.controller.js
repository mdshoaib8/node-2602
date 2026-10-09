const Subcategory = require('../models/subcategory.model');
const Category = require('../models/category.model');

exports.createSubcategoryController = async (req, res) => {
    try {
        const { name, description, categoryId } = req.body;

        // ১. চেক করুন ক্যাটাগরি আইডি পাঠানো হয়েছে কিনা
        if (!categoryId) {
            return res.status(400).json({ message: "categoryId is required" });
        }

        // ২. সাব-ক্যাটাগরি তৈরি করুন
        const subcategory = await Subcategory.create({
            name,
            description,
            category: categoryId // Schema তে ফিল্ডের নাম 'category' হলে
        });

        // ৩. মূল Category-র ভেতরে এই subcategory এর ID টি Push করে দিন
        await Category.findByIdAndUpdate(
            categoryId,
            { $push: { subcategories: subcategory._id } },
            { returnDocument: 'after' }
        );

        return res.status(201).json({
            success: true,
            data: subcategory
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.readAllSubcategoriesController = async (req, res) => {
    try {
        const subcategories = await Subcategory.find().populate('category', 'name'); // Populate category name 
        return res.status(200).json({
            success: true,
            data: subcategories
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
