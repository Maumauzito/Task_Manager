const express = require('express');

const app = express();

app.use(express.json());


const projects = [ ]


// retorna lista com os projetos
app.get('/projects', (req, res) => {

    return res.json(projects);

});



//retorna o projeto pelo seu Id
app.get('/projects/:id', (req, res) => {

    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    return res.json(project);

});

//Cadastra um novo projeto
app.post('/projects',(req, res)=>{

    const { id,title } = req.body;

    const project = {
                    id,
                    title,
                    tasks:[]
                    };

                 
    projects.push(project);

    return res.json(project);
});


app.post('/projects/:id/tasks',(req,res)=>{

    const {id} = req.params;
    const {task}


});


//atualiza o tittulo do projeto
app.put('/projects/:id',(req,res)=>{

    const { id } = req.params;
    const {title} = req.body;

    const project = projects.find(p => p.id == id);

    project.title = title;

    return res.json(project);

});



// Exclui um projeto pelo seu Id
app.delete('/projects/:id',(req,res)=>{

    const { id } = req.params;
    const projectIndex = projects.findIndex(p => p.id == id);

    projects.splice(projectIndex,1);

    return res.json(projects);

});


app.listen(3000);