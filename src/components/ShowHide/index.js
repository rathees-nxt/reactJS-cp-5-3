// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  getFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  getLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="show-hide-app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="showAndHide-container">
          <div className="each-container">
            <button
              className="button"
              type="button"
              onClick={this.getFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div className="each-container">
            <button className="button" type="button" onClick={this.getLastName}>
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
