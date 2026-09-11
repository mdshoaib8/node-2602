const mongoose = require("mongoose");
const userUrl = process.env.md_shoaibUrl;

const dbConnect = () => {
    mongoose.connect(userUrl).
        then(() => {
            console.log("User is connected to the 'crud' database successfully!");
        }).
        catch((error) => {
            console.error("MongoDB Connection Error:", error);
        })
};


module.exports = dbConnect;