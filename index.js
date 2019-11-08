const express = require('express');

const app = express();

app.get('/teste', (req, res) => {

    return res.json({message:"lula é uma puta"})

});


app.post('/project',(req, res)=>{

    

});

app.listen(3000);