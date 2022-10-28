const express = require('express');

const {maths} = require('../courses').courses;

const router_maths = express.Router();

router_maths.use(express.json());
/*routes for maths courses*/
router_maths.get('/', (req, res) => {
    res.send(JSON.stringify(maths));
}); 

 
/* routes parameters for maths*/
router_maths.get('/:title', (req ,res) => {
    const title = req.params.title;
    const result = maths.filter(courses => courses.title === title);

    if (result.length === 0){
        return res.status(404).send(`no se encontro la materia ${title}`);
    }
    res.send(JSON.stringify(result));
});

module.exports = router_maths;