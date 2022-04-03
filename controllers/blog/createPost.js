const BlogModel = require("../../models/blog")

module.exports = (req, res) => {
    BlogModel.create(req.body, (error, savedBlogData) => {
        if(error){
            res.render("error", {message: "/blog/createのエラー"})
        }else{
            res.redirect("/")
        }
    })     
}