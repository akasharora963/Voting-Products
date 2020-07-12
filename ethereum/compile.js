const path= require('path'); //to set paths

const fs= require('fs');// to load file system

const solc= require('solc'); // to load compile script

const productPath= path.resolve(__dirname,'contracts','ProductRating.sol');

const source= fs.readFileSync(productPath,'utf8');

//console.log(solc.compile(source,1));

module.exports=solc.compile(source,1).contracts[':Rating']; //to send compile version to deploy script
