import express from 'express'
import path from 'path'
const app = express()
app.use(express.static('public'))
app.get('/',(resquest,response,next)=>{
  response.sendFile(path.resolve("./views/home-page.html"))
})
app.get('/about',(request,response,next)=>{
    response.sendFile(path.resolve("./views/about-page.html"))
})
app.get('/works',(request,response,next)=>{
    response.sendFile(path.resolve("./views/works-page.html"))
})
app.get('/photos',(request,response,next)=>{
  response.sendFile(path.resolve("./views/gallery-page.html"))
})
app.listen(3000,()=>{ console.log('Server Started')})