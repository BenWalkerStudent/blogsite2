const Post = require("../models/Post")

function insertPostData() {

    Post.insertMany([
        {

            title: "Computer Program",
            body: "Ive finnally reached a point where i can almost move on from this program, i cant wait to move on and go home, i miss my cat"

    }
    ])

}

exports.module(insertPostData)