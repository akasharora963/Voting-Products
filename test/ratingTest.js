const assert = require('assert');

const ganache= require('ganache-cli');

const Web3 = require('web3');

const provider= ganache.provider();
const web3= new Web3(provider);
const {interface, bytecode} = require('../ethereum/compile');
let accounts;
let product;
beforeEach(async ()=>{
  //get list of accounts
  accounts= await web3.eth.getAccounts();

  // use account to deploy contract
  product= await new web3.eth.Contract(JSON.parse(interface))
                           .deploy({ data : bytecode })
                           .send({ from : accounts[0],  gas : '1000000' }); // gas : '1000000'
  // product.setProvider(provider);
});

describe('Product Rating',()=>{

  it('deploys a contract',()=>{
     assert.ok(product.options.address);
  });
});
