const user = require("../modules")
const controlUser = {}

controlUser.getUser = (req,res)=>{
    return res.json({
        Message:"magic user"
    })
}
controlUser.postUser = (req,res)=>{
    return res.json({
        Message:"magic user"
    })
}
controlUser.putUser = (req,res)=>{
    const idUser = req.params["idUser"] 
    return res.json({
        Message:"magic user"
    })
}
controlUser.deleteUser = (req,res)=>{
    const idUser = req.params["idUser"]
    return res.json({
        Message:"magic user"
    })
}