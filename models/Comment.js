const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
    writtenBy: {
        type: String,
    },
    commentBody: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// create the Pizza model using the PizzaSchema
const Comment = model("Comment", CommentSchema);

// export the Pizza model
module.exports = Comment;
