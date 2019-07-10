import React, { Component } from 'react';
import './App.css';
import { Card, CardTitle, CardText, Grid, Cell, Content } from 'react-mdl';
import Switch from 'react-toggle-switch';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      workers: [],
      loading: true,
      switched: false
    };
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };

  componentDidMount() {
    this.fetchListing();
    // this.sortApi();
  }

  fetchListing = () => {
    fetch('https://www.hatchways.io/api/assessment/work_orders')
    .then(res => res.json())
    .then(json => {
      this.setState({
        loading: false,
        items: json.orders
      })
      console.log(this.state.items);      
    })
    .catch(err => {
      console.error(err)
    })

    fetch('https://www.hatchways.io/api/assessment/workers/0')
    .then(res => res.json())
    .then(json => {
      this.setState({
        loading: false,
        workers: json.worker
      });
      console.log(this.state.workers);
    });
  }

  sortApi() {
    let itemsJSON = this.state.items;

    itemsJSON.sort((a, b) => Number(a.deadline) - Number(b.deadline));
      console.log("ascending", itemsJSON);
      return itemsJSON;
  }

  render() {
    const { loading, items, workers } = this.state;
    this.sortApi();
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
