require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT;

app.use(express.json());

app.get('/', (req,res) => res.json({message:'funcionando'}));

app.listen(port, ()=> {
    console.log("Servidor rodando na porta ???")
});