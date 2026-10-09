const headerModel = require('../models/header.model');

const createHeaderController = async (req, res) => {
    try {
        let existingHeader = await headerModel.find({});
        if (existingHeader.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Header already exists"
            });
        }

        let header = await headerModel.create(req.body);
        res.status(201).json({
            success: true,
            message: "Header created successfully",
            data: header
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const updateHeaderController = async (req, res) => {
    let headerId = req.params.id;
    try {
        let header = await headerModel.findOneAndUpdate(
            { _id: headerId }, 
            req.body, 
            { returnDocument: 'after' }
        );
        
        if (!header) {
            return res.status(404).json({
                success: false,
                message: "Header not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Header updated successfully",
            data: header
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteHeaderController = async (req, res) => {
    let headerId = req.params.id;

    try {
        let header = await headerModel.findByIdAndDelete(headerId);

        if (!header) {
            return res.status(404).json({
                success: false,
                message: "Header not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Header deleted successfully",
            data: header
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const readHeaderController = async (req, res) => {
    try {
        let header = await headerModel.find({});
        res.status(200).json({
            success: true,
            message: "Headers retrieved successfully",
            data: header
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createHeaderController,
    updateHeaderController,
    deleteHeaderController,
    readHeaderController
};