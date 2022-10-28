





const express = require('express');
const {programming} = require('../courses').courses;
const router_prog = express.Router();
router_prog.use(express.json());
/*routes for programming courses*/
router_prog.get('/', (req, res) => {
    res.send(JSON.stringify(programming));
});

/* routes parameters*/
router_prog.get('/:language', (req,res) =>{
    const language = req.params.language;
    const result = programming.filter(courses => courses.language === language);

    if (result.length === 0) {
        return res.status(404).send(`no se encontro el lenguaje:${language}`);
    }
    res.send(JSON.stringify(result));
});

/*routes with more than 1 parameter*/
router_prog.get('/:language/:level', (req, res) => {
    const language = req.params.language;
    const level = req.params.level;

    const result = programming.filter(courses => courses.language === language && courses.level === level);

    if (result.length === 0){
        return res.status(404).send(`no existe el curso ${language} con el nivel ${level} requerido`);
    }
    res.send(JSON.stringify(result));
});

/* routes parameters with querys*/
router_prog.get('/:language', (req,res) =>{
    const language = req.params.language;
    const result = programming.filter(courses => courses.language === language);

    if (result.length === 0) {
        return res.status(404).send(`no se encontro el lenguaje:${language}`);
    }

    if(req.query.order === 'views'){
        return res.send(JSON.stringify(result.sort((a , b) => b.views - a.views)));
    }
    res.send(JSON.stringify(result));
});

router_prog.post('/', (req, res) => {
  let newcourse = req.body;
  programming.push(newcourse);
  res.send(JSON.stringify(programming));
}); 

module.exports = router_prog;