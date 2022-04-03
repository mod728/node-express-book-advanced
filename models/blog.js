const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: String,      
    summary: String,    
    image: String,      
    textBody: String,      
})

const BlogModel = mongoose.model("Blog", BlogSchema)

module.exports = BlogModel 