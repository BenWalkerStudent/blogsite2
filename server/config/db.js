const mongoose = require('mongoose');

const dbPath = process.env.MONGO_URI;

const connectDB = async ()=> {

    try {
        await mongoose.connect(dbPath)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("door does not open from this side")
        console.log(error)
        process.exit(1)
    }   

}

// const Post = require("../models/Post")

// function insertPostData() {

//     Post.insertMany([
//         {

//             title: "zebra review",
//             body: `zebras are cool`

//     }
//     ])

// }

// insertPostData()

module.exports = connectDB