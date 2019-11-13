const express = require('express');

const app = express();

app.use(express.json());

const projects = [{id:"1",title:"Nome do projeto",tasks:["tarefa 1"]},
                  {id:"2",title:"Nome do projeto 2",tasks:["tarefa 2"]}]


// retorna lista com os projetos
app.get('/projects', (req, res) => {

    return res.json(projects);

});

// retorna o projeto atravez do id ou index
// (neste caso será index pois não estou usando o banco de dados)
app.get('/projects/:id', (req, res) => {
    const{id} = req.params; 
    return res.json(projects[id-1]);

});

//inclui um novo projeto
app.post('/projects',(req, res)=>{

    const body = req.body;

    projects.push(body);

    return res.json(projects);
});

app.post('/projects/:id/tasks')


app.listen(3000);