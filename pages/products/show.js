import React,{Component} from 'react'
import rating from '../../ethereum/instance';
import {Form,Input,Segment,Button,Container,Statistic,Divider,Message,Header,Icon} from 'semantic-ui-react';
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';

class ProductShow extends Component{
  state = {
    productCount : 0,
    votersCount : 0,
    products : [], // Auxillary array to store product details
    accounts : '',
    pageSize : 5, // default parameter to load page and create products array
  }
 //things to be load first
  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({votersCount : await rating.methods.totalVoters().call()});
    this.getPage(0);
  }
 //Auxillary function to load page and create products array
  async getPage(page) {
    if(page < 0) return;

    this.setState({productCount: await rating.methods.productCount().call()}); //productCount is set
    //Logic for creaing product array
    const skip = page * this.state.pageSize; // helper variables
    let limit = skip + this.state.pageSize;

    if(skip > this.state.productCount)
      return;
    if(limit > this.state.productCount){
      limit = this.state.productCount;
   }
   // product array formation
   let products = [];
   this.setState({products});
   for(let i = skip; i < limit; i++) {
     let p = await rating.methods.getProduct(i).call({from: this.state.accounts[0]}); //product details fetched from contract
     products.push(p);
     this.setState({products});
   }

   console.log('products', this.state.products); //to know product array status
 }

//function to add  REVIEW:
  addReview = async (event) => {
      event.preventDefault();

      let productId = event.target.value;
      window.alert("Adding Review, Please wait..");  // to alert  user
      try{
        let x = await rating.methods.addReview(productId).send({from: this.state.accounts[0]});
        this.setState({votersCount : await rating.methods.totalVoters().call()});
        console.log("oq voltou", x);; //ethereum block status details
        window.alert("Review Added, Refresh to see changes");
      }catch(err){
        window.alert("Error Occured !!");
      }
   }
// frontend for show product page
  render(){
    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Segment raised ='true'>
          <div style={{ backgroundColor : 'lightblue'}}>
            <Link route ='/'>
              <Button inverted color='facebook'><Icon name="home"/>Go to Homes page</Button> //to go home page
            </Link>
            <h3> Products Info : </h3>
            <h5>Total Product Count  : {this.state.productCount}</h5>
            <h5>Total Voters : {this.state.votersCount}</h5>
            <Link route='/products/voter-details'>
              <Button color='pink'><Icon name="eye"/> Voter Details </Button> //to go to voter details page
            </Link>
            <ul className="list-group">
              {this.state.products.length ? null : <h2><li>No Product Added</li></h2>} //when no product is added
              {this.state.products.map(p =>  //product array is mapped to get product details
                  <li className="list-group-item" key={p.id}>
                    <Divider section/>
                    <Button primary value={p.id} onClick={this.addReview}><Icon name="arrow alternate circle up outline"/>Vote this product </Button>
                    <Statistic horizontal label='Counts' value={p.reviewsCount} size="large" floated='right'/> //to show votersCount
                    <Segment inverted compact='true'>{p.title}</Segment>
                  </li>
              )}
            </ul>

          </div>
        </Segment>
      </div>
    );
  }
}

export default ProductShow;
