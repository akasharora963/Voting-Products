import Web3 from 'web3';

let web3;

if(typeof window!=='undefined'&& typeof window.web3!=='undefined'){
  web3 = new Web3(window.web3.currentProvider); //with metamask
}else{
  const provider = new Web3.providers.HttpProvider(
    '' //Add infura link
  );
  web3 = new Web3(provider); //without metamask
}
export default web3;
