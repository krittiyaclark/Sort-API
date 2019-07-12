import React, { Component } from 'react';
import '../App.css';
import * as fetchListing from '../api'
import { Card, CardTitle, CardText, Grid, Cell, Content } from 'react-mdl';
import Switcher from './Switcher';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      workers: [],
      loading: false,
      switched: false
    };
  }
  
  async componentDidMount() {
    const orders = await fetchListing.fetchListingOrders();
    const workers = await fetchListing.fetchListingWorkers();
    this.setState({
      orders: orders,
      workers: workers
    })
      console.log(orders, workers)
      // this.sortApi();
  }

  // sortApi() {
  //   let ordersJSON = this.state.orders;

  //   ordersJSON.sort((a, b) => Number(a.deadline) - Number(b.deadline));
  //     console.log("ascending", ordersJSON);
  //     return ordersJSON;
  // }


  render() {
    const { loading, orders, workers } = this.state;
    // this.sortApi();
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <h1>Work Orders</h1>
        <Content>
        <Grid className="demo-grid-1">
          <Cell col={12}>              
                <Switcher />
          </Cell>                      
          {orders.map(item => (
            <Cell col={4} key={item.id}>              
            <div className="page-content">

              <Card shadow={0} style={{ margin: 'auto' }}>
                <CardTitle>
                  Name : {item.name}
                </CardTitle>
                <CardText>
                    <p><strong>Description:</strong> {item.description}</p>
                    <p><strong>Deadline:</strong> {item.deadline}</p>
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