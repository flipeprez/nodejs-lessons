const myurl = new URL('https://www.isanexample.org/courses/courses_categories?orderby=visit&values=5');

//i use console.log to show the result in the console

console.log(myurl.hostname); // return www.isanexample.org
console.log(myurl.pathname); // return /courses/courses_categories

console.log(myurl.searchParams); //return an object
console.log(myurl.searchParams.get('orderby')); //return visit
console.log(myurl.searchParams.get('values')); //return 5

console.log(myurl.protocol); //return https:
