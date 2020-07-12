const HDwalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require('web3');

const {interface, bytecode} = require('./compile'); //fetch contract attributes

const provider = new HDwalletProvider(
  '',//Add  Mnemonic phrase of Host account
  ''//Add your infra link
);

const web3 = new Web3(provider);

const deploy = async () =>{

  const accounts= await web3.eth.getAccounts();
  console.log('Attempt to deploy from account ', accounts[0]);//host address

  const result = await  new web3.eth.Contract(JSON.parse(interface))
                           .deploy({ data : '0x' + bytecode })
                           .send({ from : accounts[0] });

  console.log(interface); //contract interface attribute
  console.log('Contract deploy to ', result.options.address); //Contract address
};

deploy();
