# Voting-Products
***
#### Restrictions:
  - Only the owner can add products
  - A user can only rate a product once
*** 
#### Set up MetaMask
Download it from https://metamask.io/ and make its extention to browser  (reference https://medium.com/@followcoin/how-to-install-metamask-88cbdabc1d28)
***
#### Getting started

- Install Node.js from https://nodejs.org/en/
- Install git from https://git-scm.com/downloads

check version by following commands:
- node -v
- npm -v
- git --version
***
#### Ethereum side Packages
``` sh
$ npm install fs fs-extra
$ npm install solc@0.4.17
$ npm install web3
$ npm install @truffle/hdwallet-provider
$ npm install ganache-cli
$ npm install mocha
```
***
#### User interface side Packages
```sh
$ npm install next
$ npm install next-routes
$ npm install react react-dom
$ npm install semantic-ui-react
$ npm install semantic-ui-css
```
***
To run test :
```sh
$ npm run test
```
#### Preview
![image](https://user-images.githubusercontent.com/45670997/87297355-e8e4ec00-c525-11ea-909f-84bfc9ec671c.png)
***
To compile, Go to Ethereum directory and use command :
```sh
$ node compile.js
```
To deploy , Go to Ethereum directory and use command :
```sh
$ node deploy.js
```
#### Preview
![image](https://user-images.githubusercontent.com/45670997/87298242-7d9c1980-c527-11ea-9e88-4238001597f6.png)
Copy interface and contract address and put in instance.js
***
To run server
```sh
$ npm run dev
```
#### Preview
![image](https://user-images.githubusercontent.com/45670997/87298711-41b58400-c528-11ea-8b69-c93edcbcb233.png)
***
At the start
### Home page
![image](https://user-images.githubusercontent.com/45670997/87299133-12ebdd80-c529-11ea-8577-742553f79184.png)

### Products Page
![image](https://user-images.githubusercontent.com/45670997/87301132-a7a40a80-c52c-11ea-9a5e-d73e199e73ff.png)

###  Voter Details Page
![image](https://user-images.githubusercontent.com/45670997/87301187-bd193480-c52c-11ea-9b18-d4c6d3814e7e.png)




