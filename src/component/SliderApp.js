import React, { Component } from 'react';
import '../App.css';
// import * as fetchListing from './api';
// import Layout from './Layout';
import Slider from 'react-input-slider';

class SliderApp extends Component {
  render() {
  const [state, setState] = useState({ x: 10, y: 10 });
 

  return (
    <div>
    <Layout>
    console.log(this.props.sortAscApi)
      {this.state.sortAscApi}
    </Layout>
      ({state.x}, {state.y})
      <Slider axis="xy" x={state.x} y={state.y} onChange={setState} />
    </div>
  );
}
}

export default SliderApp;