/*first we need to import express with requiere
 then i need to call app to return an express aplication
 after that process we are ready to create our routes*/
const express = require('express'); 
const app = express();

const {courses} = require('./courses.js');

/*routers
i made only one, but you can do how many you need*/
const routers = express.Router();
app.use('/api/courses', routers);

/*routing*/
app.get('/', (req,res) => {
    res.send('my first server');
});
/*route for all courses*/
routers.get('/', (req, res) => {
    res.send(courses);
});

/*routes for programming courses*/
routers.get('/programming', (req, res) => {
    res.send(JSON.stringify(courses.programming));
}); 

/*routes for maths courses*/
routers.get('/maths', (req, res) => {
    res.send(JSON.stringify(courses.maths));
}); 

/* routes parameters*/
routers.get('/programming/:language', (req,res) =>{
    const language = req.params.language;
    const result = courses.programming.filter(courses => courses.language === language);

    if (result.length === 0) {
        return res.status(404).send(`no se encontro el lenguaje:${language}`);
    }
    res.send(JSON.stringify(result));
});
 
/* routes parameters for maths*/
routers.get('/maths/:title', (req ,res) => {
    const title = req.params.title;
    const result = courses.maths.filter(courses => courses.title === title);

    if (result.length === 0){
        return res.status(404).send(`no se encontro la materia ${title}`);
    }
    res.send(JSON.stringify(result));
}); 

/*routes with more than 1 parameter*/
routers.get('/programming/:language/:level', (req, res) => {
    const language = req.params.language;
    const level = req.params.level;

    const result = courses.programming.filter(courses => courses.language === language && courses.level === level);

    if (result.length === 0){
        return res.status(404).send(`no existe el curso ${language} con el nivel ${level} requerido`);
    }
    res.send(JSON.stringify(result));
});

/* routes parameters with querys*/
routers.get('/programming/:language', (req,res) =>{
    const language = req.params.language;
    const result = courses.programming.filter(courses => courses.language === language);

    if (result.length === 0) {
        return res.status(404).send(`no se encontro el lenguaje:${language}`);
    }

    if(req.query.order === 'views'){
        return res.send(JSON.stringify(result.sort((a , b) => b.views - a.views)));
    }
    res.send(JSON.stringify(result));
});

const PORT = process.env.PORT || 3000; /*this is because in the real world, 
we don know which port is going to be asignated*/

app.listen(PORT, () => {
    console.log(`the port is listening in http://localhost: ${PORT}...`);
});