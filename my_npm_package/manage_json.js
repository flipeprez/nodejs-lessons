/* i declare a object to to convert to json*/ 

let = objeto_con_info_del_curso = {
    "titulo": "aprendiendo node.js", 
    "numVistas": 32165,
    "temas":[
        "javaScript",
        "Node.js"
    ],
    "esUnCursoPublico": true
}; 

/* if i want to check if the object is an object we can use the next commands*/
console.log(typeof objeto_con_info_del_curso); 

/* if i want to change to json(transfor the object to text),
we can use the stringify function*/
let objeto_con_info_del_cursoObjeto = JSON.stringify(objeto_con_info_del_curso);
console.log(objeto_con_info_del_cursoObjeto);
console.log(typeof objeto_con_info_del_cursoObjeto);
/* if we want to access to the previous object we can't because now 
is a text. we can see it because the result of theconsole log now
is undefined*/ 
console.log(objeto_con_info_del_cursoObjeto.titulo); 

/* if we want to transform a json to an object we use parse function*/

let objeto_con_info_del_cursostring = JSON.parse(objeto_con_info_del_cursoObjeto);
console.log(objeto_con_info_del_cursoObjeto);
console.log(typeof objeto_con_info_del_cursostring);

console.log(objeto_con_info_del_curso.titulo);