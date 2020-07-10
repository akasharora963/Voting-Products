const path= require('path');

const fs= require('fs');

const solc= require('solc');

const productPath= path.resolve(__dirname,'contracts','ProductRating.sol');

const source= fs.readFileSync(productPath,'utf8');

//console.log(solc.compile(source,1));

module.exports=solc.compile(source,1).contracts[':Rating'];
