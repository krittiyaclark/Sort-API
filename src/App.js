import React, { Component } from 'react';
import './App.css';
import { Card, CardTitle, CardText, Grid, Cell } from 'react-mdl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      workers: [],
      loading: true
    };
  }

  componentDidMount() {
    // const url = 'https://www.hatchways.io/api/assessment/work_orders';
    fetch('https://www.hatchways.io/api/assessment/work_orders')
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: false,
          items: json.orders
        });
        // console.log(this.state.items);
        
      });

      fetch('https://www.hatchways.io/api/assessment/workers/0')
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: false,
          workers: json.worker
        });
        // console.log(this.state.workers);

      });
  }

  render() {
    const { loading, items, workers } = this.state;
  // let results = this.state.items.concat(this.state.workers)
  // console.log(results)

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <h1>Work Orders</h1>
        <Grid className="demo-grid-1">
          {items.map(item => (
            <Cell col={4} key={item.id}>
              <Card shadow={0} style={{ margin: 'auto' }}>
                <CardTitle>
                  Name : {item.name}
                </CardTitle>
                <CardText>
                    <p><strong>Description:</strong> {item.description}</p>
                    <p><strong>Deadline:</strong> {item.deadline}</p>
                    <p><strong>CompanyName</strong> {workers.companyName}</p>
                    <p><strong>Email</strong> {workers.email}</p>
                    <p><strong>Image:</strong> {workers.image}</p>
                    <p><strong>Name</strong> {workers.name}</p>
                    </CardText>
              </Card>
            </Cell>
          ))}
          
        </Grid>
      </div>
    );
  }
}

export default App;
