const Category = require('../models/category.model'); 

exports.createCategoryController = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Category name is required" });
        }

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