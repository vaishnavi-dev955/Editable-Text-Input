import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {textInput: '', saveBtnClicked: false}

  onchangeText = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSaveBtn = () => {
    this.setState({saveBtnClicked: true})
  }

  onClickEditBtn = () => {
    this.setState({saveBtnClicked: false})
  }

  render() {
    const {textInput, saveBtnClicked} = this.state
    return (
      <div className="main-container1">
        <div className="white-container1">
          <h1 className="heading"> Editable Text Input</h1>
          {saveBtnClicked ? (
            <div className="sub-container1">
              <p className="Edited-paragraph">{textInput}</p>
              <button
                type="button"
                className="Edit-Button"
                onClick={this.onClickEditBtn}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="sub-container1">
              <input
                type="text"
                className="input-style"
                onChange={this.onchangeText}
                value={textInput}
              />
              <button
                type="button"
                className="save-button"
                onClick={this.onClickSaveBtn}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
