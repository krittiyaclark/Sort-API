import React, { Component } from 'react';
import '../App.css';
import Switch from 'react-toggle-switch';

class SliderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
    
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

}
  render() {
 

  return (
    <>
    <Switch onClick={this.toggleSwitch} on={this.state.switched} />
</>
  );
}
}

export default SliderApp;