import React,{Component} from 'react';
import rating from '../ethereum/instance';
import {Form,Input,Segment,Button,Container,Divider,Message,Icon} from 'semantic-ui-react';
import {Link} from '../routes';
import web3 from '../ethereum/web3';

class ProductIndex extends Component{
  state = {
    owner: '',
    newProductName: '',
    accounts: '',
    status: '',
    loading : false,
    errorMessage : ''
  };

  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({owner: await rating.methods.owner().call()});
  }


 addProduct = async (event) => {
   event.preventDefault();
   this.setState({loading : true,errorMessage : ''})
   this.setState({status: 'Adding product...'});
   try{
     await rating.methods.addProduct(this.state.newProductName).send({from: this.state.accounts[0]});
     this.setState({status: 'Product added!'});
   }catch(err){
     this.setState({errorMessage : err.message});
     this.setState({status: 'Try again!'});
   }
   this.setState({loading : false});

 }

  render() {
    if(!web3) return (
      <div>
        You need to install the MetaMask extension.
      </div>
    );

    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Segment raised='true'>
          <div style={{ backgroundColor : 'violet'}}>
            <Container>
              <div className="jumbotron">
                <Segment inverted color='purple' compact='true'><h2>Voting Different Products </h2></Segment>
                <Segment inverted>The owner of this contract is : <b>{this.state.owner} </b> </Segment>
              </div>
            </Container>
            <Divider section/>
            <Container>
              <Form onSubmit={this.addProduct} error={!!this.state.errorMessage}>
                <Form.Field>
                  <Input focus placeholder="Type product name..." value={this.state.newProductName} onChange={event => {this.setState({newProductName: event.target.value})}} />
                </Form.Field>
                <Button color='red' loading = {this.state.loading}><Icon name="add circle"/>Add new product</Button>
                <Message error header= "Oops!!" content = {this.state.errorMessage}/>
              </Form>
              <h3>{this.state.status}</h3>
            </Container>
            <Divider section/>
            <Link route='/products/show'>
              <Button primary><Icon name="tv"/> Show Products </Button>
            </Link>
          </div>
        </Segment>
      </div>
    );
  }

}

 export default ProductIndex;

/*

<p><b>Products:</b></p>
<p>Total Product Count  : {this.state.productCount}</p>
<p>Total Voters : {this.state.votersCount}</p>
<ul className="list-group">
  {this.state.products.length ? null : <li>Loading...</li>}
  {this.state.products.map(p =>
    <li className="list-group-item" key={p.id}>
      <Divider section/>
      <Button primary value={p.id} onClick={this.addReview}>Vote this product</Button>
      <Statistic horizontal label='Counts' value={p.reviewsCount} floated='right'/>
      <Segment><p className="product-info"><b>{p.title}</b></p></Segment>
      <p> Voter Details </p>
      <Segment color="black">
        <p>{p.pvoters[0]}</p>
        <p>{p.pvoters[1]}</p>
        <p>{p.pvoters[2]}</p>
        <p>{p.pvoters[3]}</p>
        <p>{p.pvoters[4]}</p>
      </Segment>
    </li>
  )}
</ul>
<div className="pagination">
  <button type="button" className="btn btn-secondary" disabled={this.state.currPage === 0} onClick={event => this.getPage(this.state.currPage - 1)}>&lt;</button>
  Page: {this.state.currPage+1}
  <button type="button" className="btn btn-secondary" disabled={this.state.lastPage} onClick={event => this.getPage(this.state.currPage + 1)}>&gt;</button>
</div>
*/
