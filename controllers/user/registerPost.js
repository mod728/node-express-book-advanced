const UserModel = require("../../models/user")

module.exports = (req, res) => {
    UserModel.create(req.body, (error, savedUserData) => {
        if(error){
            res.render("error", {message: "/user/createのエラー"})
        }else{
            res.redirect("/user/login")
        }
    })
}