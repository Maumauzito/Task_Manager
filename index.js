const express = require('express');

const app = express();

app.use(express.json());

function CheckProjectExist(req,res,next){
    
    const { id } = req.params;
    const newId = req.body.id;

    if( id!=null ){
        let project = projects.find(p => p.id == id);
        
        if(!project){
            return res.status(400).json({ error: 'Project not found' });
        }
        else{
            return next();
        }
    }
    else{
        if( newId != null ){
            //aqui verificamos se o id para o novo projeto já esta em uso
            let project = projects.find(p => p.id == newId);
            if(!project){
                return next();
            }
            else{
                return res.status(400).json({ error: 'The id project is already in used' });
            }
        }
        else{
            return res.status(400).json({ error: 'Project not found' });
        }
    }

}

const projects = [ ]


function logRequests(req, res, next) {

    console.count("Número de requisições");
  
    return next();
  }

  app.use(logRequests);

// retorna lista com os projetos
app.get('/projects', (req, res) => {

    return res.json(projects);

});



//retorna o projeto pelo seu Id
app.get('/projects/:id', CheckProjectExist , (req, res) => {

    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    return res.json(project);

});

//Cadastra um novo projeto
app.post('/projects', CheckProjectExist ,(req, res)=>{

    const { id,title } = req.body;

    const project = {
                    id,
                    title,
                    tasks:[]
                    };

                 
    projects.push(project);

    return res.json(project);
});


app.post('/projects/:id/tasks', CheckProjectExist ,(req,res)=>{

    const { id } = req.params;
    const { task } = req.body;

    const project = projects.find(p => p.id == id);

    project.tasks.push(task);

    return res.json(project);


});


//atualiza o tittulo do projeto
app.put('/projects/:id', CheckProjectExist ,(req,res)=>{

    const { id } = req.params;
    const {title} = req.body;

    const project = projects.find(p => p.id == id);

    project.title = title;

    return res.json(project);

});



// Exclui um projeto pelo seu Id
app.delete('/projects/:id', CheckProjectExist ,(req,res)=>{

    const { id } = req.params;
    const projectIndex = projects.findIndex(p => p.id == id);

    projects.splice(projectIndex,1);

    return res.json(projects);

});


app.listen(3000);