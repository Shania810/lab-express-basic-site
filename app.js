import express from 'express'
import path from 'path'
const app = express()
app.use(express.static('public'))
app.get('/',(resquest,response,next)=>{
  response.sendFile(path.resolve("./views/home-page.html"))
})
app.listen(3000,()=>{ console.log('Server Started')})