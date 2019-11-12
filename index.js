const express = require('express');

const app = express();

app.get('/project', (req, res) => {

    return res.json({message:"novo projeto"})

});


app.post('/project',(req, res)=>{

    

});

app.listen(3000);