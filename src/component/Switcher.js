import React, { Component } from 'react';
import '../App.css';
// import * as fetchListing from './api';
// import Layout from './component/Layout';
import { Switch } from 'react-mdl';


class Switcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      asc: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.sortAscApi =  this.sortAscApi.bind(this);

    }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

  
  sortAscApi() {
    let asc = this.props.orders;
     this.setState(state => ({
      // asc.sort((a, b) => Number(a.deadline) - Number(b.deadline));
      // console.log("ascending", asc);
      // return asc
    }))
    console.log("ascending", asc);
    
  }


  // sortDescApi() {
  //   let itemsJSON = this.state.items;

  //   itemsJSON.sort((a, b) => Number(b.deadline) - Number(a.deadline));
  //     console.log("descending", itemsJSON);
  //     return itemsJSON;
  // }
    render() {
        return (
            <div>
                <Switch 
                        onClick={this.handleClick}
                > {this.state.isToggleOn ? 'ON' : 'OFF'}
                </Switch>
            </div>
        );
      }
}

export default Switcher;