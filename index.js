const express = require("express");
const { wordsToNumbers } = require ("words-to-numbers")

const app = express();

app.use(express.json());

app.post('/',(req, res)=>{

     const { numberliteral } = req.body;

    return res.send({number:wordsToNumbers(numberliteral)})
})

app.listen(3000,()=>console.log("Running on port 3000"))