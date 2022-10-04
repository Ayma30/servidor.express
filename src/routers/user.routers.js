const user= require("express").Router()
const {getUser,postUser,putUser,deleteUser}= require("../controlers")
user.get("/user",getUser)
user.post("/user",postUser)
user.put("/user/:idUser",putUser)
user.delete("/user/:idUser",deleteUser)




module.exports=user