const BlogModel = require("../../models/blog")

module.exports = (req, res) => {
    BlogModel.deleteOne({_id: req.params.id}).exec((error) => {
        if(error){
            res.render("error", {message: "/blog/deleteのエラー"})
        }else{
            res.redirect("/")
        }
    })
}