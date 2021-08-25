import express from 'express'
import mongoose from 'mongoose'
import Post from "./Post.js"
import router from "./router.js"

const PORT = 5003;
const DB_URL = "mongodb+srv://andrew:bird@cluster0.3ytke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT '+ PORT ))
    } catch (e) {
        console.log(e)
    }
}
startApp()
