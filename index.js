import express from "express";
import {PORT, SECRET_JWT_KEY} from './config.js'

const app=express();

app.use(express.json())
app.use(express.static("public"))

app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(PORT,() => console.log(`Abierto en el puerto ${PORT}`))

// Inici dels endpoints

app.get('/', (req, res) =>{
    //Definició o resposta
    //const {user}=req.session
    res.render('login')
})

app.post('/register', (req, res) => {
    const {username, password} = req.body //cuando se hace el submit esto que desectructure el body para sacar lo que quiero usar
})