const pics= require("express").Router()
const {getPics,postPics,putPics,deletePics}= require("../controlers")
pics.get("/pics",getPics)
pics.post("/pics",postPics)
pics.put("/pics/:idPics",putPics)
pics.delete("/pics/:idPics",deletePics)




module.exports=pics