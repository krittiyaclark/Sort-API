import React, { Component } from 'react';
import '../App.css';
import * as fetchListing from '../api'
import { Card, CardTitle, CardText, Grid, Cell, Content } from 'react-mdl';
import Switch from 'react-toggle-switch';
// import SliderApp from './SliderApp';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      workers: {},
      ascs: '',
      dscs: '',
      loading: false,
      isToggleOn: false,
      switched: false
    };

    this.sortAscApi =  this.sortAscApi.bind(this);
    this.sortDscApi =  this.sortDscApi.bind(this);
    // this.handleClick = this.handleClick.bind(this);
        
    }
  
  async componentDidMount() {
    const ordersApi = await fetchListing.fetchListingOrders();
    const workersApi = await fetchListing.fetchListingWorkers();
    // const { orders, workers } = this.state;

    ordersApi.map(i => i)
    this.setState({
      orders: ordersApi,
      workers: workersApi
    })
      console.log(ordersApi, workersApi)
      this.sortAscApi()
      // this.sortDscApi()
  }


  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }
  
  toggleSwitch = () => {
    this.setState({
      switched: !this.state.switched
    }, () => {
      // called after the swtiched state is updated
      const { switched } = this.state;
      if(switched){
        this.sortDscApi();
      }else{
        this.sortAscApi();
      }
    });
  };

  sortAscApi() {
    const { orders, } = this.state;
    console.log("ascending", orders);
    let ascs = orders.sort((a, b) => Number(a.deadline) - Number(b.deadline));
    
    this.setState({  ascs })
      console.log("ascending", ascs);
      // return ascs
  }

  sortDscApi() {
    const { orders } = this.state;
    let dscs = orders.sort((a, b) => Number(b.deadline) - Number(a.deadline));
    this.setState({ dscs })
      console.log("dscsending", dscs);
      // return orders
  }

  render() {
    const { loading, orders, workers } = this.state;
    let sort;

    console.log("ascending", this.state.ascs);
    if (loading) {
      return <div>Loading...</div>;
    }
    // if (this.state.isToggleOn) {
    //   sort = this.sortAscApi();
    // } else {
    //   sort = this.sortDscApi();
    // }
    
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <h1>Work Orders</h1>
        <Content>
        <Grid className="demo-grid-1">
          <Cell col={12}>              
          <Switch onClick={this.toggleSwitch} on={this.state.switched} />
          {/* <button onClick={this.sortDscApi} on={this.state.isToggleOn}>Click</button> */}
          </Cell>                  
          {orders.map(item => (
            <Cell col={6} key={item.id}>              
            <div className="page-content">

              <Card shadow={0} style={{ margin: 'auto' }}>
                <CardTitle>
                  Name : {item.name}
                </CardTitle>
                <CardText>
                    <p><strong>Description:</strong>{item.description}</p>
                    <p><strong>Deadline:</strong> {sort} {item.deadline}</p>
                    <p><strong>CompanyName</strong> {workers.companyName}</p>
                    <p><strong>Email</strong> {workers.email}</p>
                    <p><strong></strong><img src={workers.image} alt="avatar" /></p>
                    <p><strong>Name</strong> {workers.name}</p>
                    </CardText>
              </Card>
            </div>
            </Cell>
          ))}
        </Grid>
       </Content>
      </div>
    );
  }
}

export default Layout;