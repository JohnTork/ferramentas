import express from 'express' //TYPE: module
// CONST EXPRESS = require('express') //TYPE: commonjs
import router from './src/router/ferramenta.js'


const app = express()
app.use(express.json())
//inicializa o express - new

app.use("/api", router)

app.listen(3000, () => {
  console.log("Servidor na porta 3000")
})