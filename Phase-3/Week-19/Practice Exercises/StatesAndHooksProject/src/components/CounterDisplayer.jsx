import { Component } from 'react'

class CounterDisplayer extends Component {
  render() {
    // react alls render() to determine what the component should display.
    return (
      <>
        <p>Click {this.props.clickCount} times</p>

        {/* this => refers to the current class componet instant
        props=> contains data passed to this component
        clickCount => is the specific props we will pass from `MyCounter`
        */}
      </>
    )
  }
}
export default CounterDisplayer