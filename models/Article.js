let mongoose = require("mongoose");
let schema = mongoose.schema;

let ArticleSchema = new Schema({
    title: {
        type:string
    },
    date: {
        type:Date
    },
    url: {
        type:string
    }
});


let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;