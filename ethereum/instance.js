import web3 from './web3';

const address = '0x5756EcEa78DBE66146323964b8BA10A018C66dEA';//'0xA4F044492aD02B3983F4eA65501c91446e398a68';
const accounts = web3.eth.getAccounts();
const abi =
[{"constant":false,"inputs":[{"name":"_productId","type":"uint256"}],"name":"addReview","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalVoters","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"productId","type":"uint256"}],"name":"getProduct","outputs":[{"name":"id","type":"uint256"},{"name":"title","type":"string"},{"name":"reviewsCount","type":"uint256"},{"name":"hasReviewed","type":"bool"},{"name":"pvoters","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_title","type":"string"}],"name":"addProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"productCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"title","type":"string"}],"name":"ProductAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"}],"name":"ProductReviewed","type":"event"}];

let rating = new web3.eth.Contract(abi,address);
export default rating;
