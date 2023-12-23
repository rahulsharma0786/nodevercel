const express=require("express")
const app=express()
const mongoose=require("mongoose")
const Student=require("./stucontrolar/stucon")
const DB="mongodb+srv://rkumar45650:1234@cluster0.zqqxiua.mongodb.net/stumeg?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("connect")
})
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/studisplay", Student.Studentdisplay)
app.post("/stusave",Student.sturecord)
app.post("/stusearch",Student.stuSearch)
app.get("/studeleted/:id",Student.stuDel)
app.get("/stuedit/:id" ,Student.stuEdit)
app.post("/editsave/:id" ,Student.stuEditsave)

app.listen(8000)



   