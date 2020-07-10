import React,{Component} from 'react';
import rating from '../../ethereum/instance';
import {Form,Input,Segment,Button,Container,Statistic,Divider,Message,Header,Icon} from 'semantic-ui-react';
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';

class VoterDetails extends Component{

  state = {
    products : [],
    accounts : '',
    pageSize : 5,
  }

  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.getPage(0);
  }

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

   let products = [];
   this.setState({products});
   for(let i = skip; i < limit; i++) {
     let p = await rating.methods.getProduct(i).call({from: this.state.accounts[0]});
     products.push(p);
     this.setState({products});
   }

   console.log('products', this.state.products);
 }

  render(){
    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Segment raised ='true'>
          <div style={{ backgroundColor : 'violet'}}>
            <Link route ='/'>
              <Button color='purple' ><Icon name="home"/></Button>
            </Link>
            <Link route ='/products/show'>
              <Button color='red'><Icon name="fighter jet"/>Go to Products page</Button>
            </Link>
            <h3> Voters Info : </h3>
            <ul className="list-group">
              {this.state.products.length ? null : <h2>No info available</h2>}
              {this.state.products.map(p =>
                  <div>
                    {p.pvoters.length ?
                    <li className="list-group-item" key={p.id}>
                      <Header size='medium'>Product  : {p.title}</Header>
                      <Segment inverted compact='true'>
                        <p>{p.pvoters[0]}</p>
                        <p>{p.pvoters[1]}</p>
                        <p>{p.pvoters[2]}</p>
                        <p>{p.pvoters[3]}</p>
                        <p>{p.pvoters[4]}</p>
                        <p>{p.pvoters[5]}</p>
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
