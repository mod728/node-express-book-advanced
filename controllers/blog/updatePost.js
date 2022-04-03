const BlogModel = require("../../models/blog")

module.exports = (req, res) => {
    BlogModel.updateOne({_id: req.params.id}, req.body).exec((error) => {
        if(error){
            res.render("error", {message: "/blog/updateのエラー"})
        }else{
            res.redirect("/")
        }
    })
}