import React, { Component } from 'react';
import '../App.css';
import * as fetchListing from './api'
import Switch from 'react-toggle-switch';

class SwitchSort extends Component {

    state = {
        items: [],
        workers: [],
        loading: false,
        switched: false,
        display: "recent"
    }

  async componentDidMount() {
    const items = await fetchListing.fetchListing1();
    const workers = await fetchListing.fetchListing2();

    this.setState({
        items: items,
        workers: workers
    })
      console.log(items, workers)
  }

    // toggleSwitch = (evt) => {
    //     evt.preventDefault();

    //     this.setState(prevState => {
    //         return {
    //         switched: !prevState.switched
    //         };
    //     });
    // };
     
  // sortAscendingApi() => {
  //   const items = await fetchListing.fetchListing1();
  //   const workers = await fetchListing.fetchListing2();

  //   itemsJSON.sort((a, b) => Number(a.deadline) - Number(b.deadline));
  //     console.log("ascending", itemsJSON);
  //     return itemsJSON;
  // }

  // sortDescendingApi() {
  //   let itemsJSON = this.state.items;

  //   itemsJSON.sort((a, b) => Number(b.deadline) - Number(a.deadline));
  //     console.log("descending", itemsJSON);
  //     return itemsJSON;
  // }
      render() {
    const { loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
          }
        return (
            <div>
                <Switch onClick={this.toggleSwitch} on={this.state.switched} />
            </div>
        );
      }
}

export default SwitchSort;