import React,{Component} from 'react';
import rating from '../../ethereum/instance';
import {Form,Input,Segment,Button,Container,Statistic,Divider,Message,Header,Icon} from 'semantic-ui-react';
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';

class VoterDetails extends Component{

  state = {
    products : [],
    accounts : '',
    pageSize : 5 //default parameter to load page
  }

  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.getPage(0);
  }

  //Auxillary function load page
  async getPage(page) {
    if(page < 0) return;
    this.setState({productCount: await rating.methods.productCount().call()});
    const skip = page * this.state.pageSize;
    let limit = skip + this.state.pageSize;

    if(skip > this.state.productCount)
      return;
    if(limit > this.state.productCount){
      limit = this.state.productCount;
   }

   let products = []; //set products array
   this.setState({products});
   for(let i = skip; i < limit; i++) {
     let p = await rating.methods.getProduct(i).call({from: this.state.accounts[0]}); // get details of product
     products.push(p);
     this.setState({products});
   }

   console.log('products', this.state.products);
 }

//frontend to load details  page
  render(){
    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Segment raised ='true'>
          <div style={{ backgroundColor : 'lightblue'}}>
            <Link route ='/'>
              <Button inverted color='facebook' ><Icon name="home"/>Go to Homes page</Button>
            </Link>
            <Link route ='/products/show'>
              <Button inverted color='google plus'><Icon name="fighter jet"/>Go to Products page</Button>
            </Link>
            <h3> Voters Info : </h3>
            <ul className="list-group">
              {this.state.products.length ? null : <h2>No info available</h2>} //condition when there is no product
              {this.state.products.map(p =>
                  <div>
                    {p.pvoters.length ?  //condition when there is no voters
                    <li className="list-group-item" key={p.id}>
                      <Header size='medium'>Product  : {p.title}</Header> //product name
                      <Segment inverted compact='true'>
                        {p.pvoters.map(arr=>( //mapping is done to read elements of voters array
                          <p>{arr}</p> //Voter details
                        ))}
                      </Segment>
                      <Divider section/>
                    </li> : null}
                  </div>
              )}
            </ul>

          </div>
        </Segment>
      </div>
    );
  }
}

export default VoterDetails;
