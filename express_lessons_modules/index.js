/*first we need to import express with requiere
 then i need to call app to return an express aplication
 after that process we are ready to create our routes*/
const express = require('express'); 
const app = express();

const {courses} = require('./courses.js');

/*routing*/
app.get('/', (req,res) => {
    res.send('my first server');
});
/*route for all courses*/
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

/*routes for programcion courses*/
app.get('/api/courses/programming', (req, res) => {
    res.send(JSON.stringify(courses.programming));
}); 

/*routes for maths courses*/
app.get('/api/courses/maths', (req, res) => {
    res.send(JSON.stringify(courses.maths));
});
const PORT = process.env.PORT || 3000; /*this is because in the real world, 
we don know which port is going to be asignated*/

app.listen(PORT, () => {
    console.log(`the port is listening in http://localhost: ${PORT}...`);
});