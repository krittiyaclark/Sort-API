import React, { Component } from 'react';
import './App.css';
import * as fetchListing from './api'
import { Card, CardTitle, CardText, Grid, Cell, Content } from 'react-mdl';
import Switch from 'react-toggle-switch';


class App extends Component {

    state = {
      items: [],
      workers: [],
      loading: false,
      switched: false
    };

  async componentDidMount() {
    const items = await fetchListing.fetchListing1();
    const workers = await fetchListing.fetchListing2();
    this.setState({
      items: items,
      workers: workers
    })
      console.log(items, workers)
      this.sortApi();
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };

  sortApi() {
    let itemsJSON = this.state.items;

    itemsJSON.sort((a, b) => Number(a.deadline) - Number(b.deadline));
      console.log("ascending", itemsJSON);
      return itemsJSON;
  }

  render() {
    const { loading, items, workers } = this.state;
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
                <Switch onClick={this.toggleSwitch} on={this.state.switched} />
          </Cell>                      
          {items.map(item => (
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

export default App;
