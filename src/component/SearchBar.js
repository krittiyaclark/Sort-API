import React, {Component} from 'react';

 
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchName: [],
            searchTerm: []
        }
      }
      
      SearchHandler = (e) => {
        this.setState({
          workersFilter: e.target.value
        })
      }
      
      render() {
        return (
          <div>
            <label htmlFor="filter">Filter by Worker: </label>
            <input type="text" id="filter" 
              value={this.state.workersFilter} 
              onChange={this.searchHandler}/>
          </div>
          )
      }
    }

export default Search;