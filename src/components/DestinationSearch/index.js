// Write your code here
import DestinationItem from './components/DestinationItem'

import {Component} from 'react'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSelectDestination = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div>
        <h1 className="main-heading">Destination Search</h1>
        <input
          type="search"
          onChange={this.onSelectDestination}
          value={searchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul>
          {searchResults.map(eachItem => {
            ;<DestinationItem destinationsList={eachItem} key={eachItem.id} />
          })}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
