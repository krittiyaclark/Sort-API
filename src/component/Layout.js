import React, { Component } from 'react';
import * as fetchListing from '../api'
import { Card, CardTitle, CardText, Grid, Cell, Content } from 'react-mdl';
import Switch from 'react-toggle-switch';
import Search from './SearchBar';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      workers: {},
      ascs: '',
      dscs: '',
      loading: false,
      switched: false,
      query: ''
    };

    this.sortAscApi =  this.sortAscApi.bind(this);
    this.sortDscApi =  this.sortDscApi.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
        
    }
  
  async componentDidMount() {
    const ordersApi = await fetchListing.fetchListingOrders();
    const workersApi = await fetchListing.fetchListingWorkers();
    // const filterWorker = workersApi.filter()
    this.setState({
      orders: ordersApi,
      workers: workersApi
    })
      console.log(ordersApi, workersApi)
      this.sortAscApi();
      // this.searchHandler();
  }

 
  toggleSwitch = () => {
    this.setState({
      switched: !this.state.switched
    }, () => {
      // called after the swtiched state is updated
      const { switched } = this.state;
      if(switched){
        this.sortDscApi();
      } else {
        this.sortAscApi();
      }
    });
  };

  searchHandler = async (query) => {
   let workersApi = this.state.workers;
   
   let search = await fetchListing.fetchListingWorkers(query);

   if (!!search && !search.error) {
    //  search.map(query => {
    //    return workers.filter(name => name.id === query.id).map(name => {
    //      query.name = name.name;
    //      return  this.setState({ query: search });
    //    })
    //  })
    //  this.setState({ query: search });
    this.setState({
      workers: search
    })
   } else {
    this.setState({ query: [] });
   }
  }

  sortAscApi() {
    const { orders, } = this.state;
    console.log("ascending", orders);
    let ascs = orders.sort((a, b) => Number(a.deadline) - Number(b.deadline));
    
    this.setState({  ascs })
      console.log("ascending", ascs);
  }

  sortDscApi() {
    const { orders } = this.state;
    let dscs = orders.sort((a, b) => Number(b.deadline) - Number(a.deadline));
    this.setState({ dscs })
      console.log("dscsending", dscs);
  }

  render() {
    const { loading, orders, workers } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <h1>Work Orders</h1>
        <Content>
        <Grid className="demo-grid-1">
        <Cell col={12}>              
          <Search onChange={this.searchHandler} />
          </Cell>   
          <Cell col={12}>              
          <Switch onClick={this.toggleSwitch} on={this.state.switched} />
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
                    <p><strong>Deadline:</strong>{item.deadline}</p>
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