import React, { Component } from 'react';
import '../App.css';
import Switch from 'react-toggle-switch';

class SwitchSort extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
     
      render() {
        return (
            <div>
                <Switch onClick={this.toggleSwitch} on={this.state.switched} />
            </div>
        );
      }
}

export default SwitchSort;