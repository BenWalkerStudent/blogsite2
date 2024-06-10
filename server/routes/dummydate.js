const Post = require("../models/Post")

function insertPostData() {

    Post.insertMany([
        {

            title: "Post One",
            body: "nice way to get excersize is to just run in perfectly straight lines for 10 plus hours. any deviation will completely throw off the balance of this activity."

    },{

    title: "Post two",
    body: "the apocolypse is looming, we need to start hoarding beans, i prefer busch's baked beans but store brand will also suffice"

    }
    ])

}

//insertPostData()