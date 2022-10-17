/*
to test the different methods, i recommend comment all those
methods than you don't want to test  using // 
*/



/*shows all processes that are be running,
It is a  too long information */
console.log(process);

/*shows the enviroment process,
it's a view of the state of the system enviroment 
variables*/ 
console.log(process.env); 

/*shows the arrays containing the arguments passed 
to the process when we run it in the command line */
console.log(process.argv[2]);
console.log(process.argv[3]);

//loop for indeterminated arguments length
for (let i = 2; i < process.argv.length; i++){
  console.log(process.argv[i]);
}

/*shows the memory used information 
about the current process */
console.log(process.memoryUsage());