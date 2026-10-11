import  { Component } from 'react'
import CounterDisplayer from './CounterDisplayer'
import EvenCounterDisplayer from './EvenCounterDisplayer';
// import chiled component that will display count
class MyCounter extends Component {
  // create the parent componet that manage the counter

  constructor(props) {
    // runs when a new instance of this class component created
    // React calls the constructor when it creates this component.

    super(props); // calls the parent class constructor
    // Calls is required before accessing "this" derived  class constructor before using "this"

    // When do you use it
    // we use the constructor to initialize the component  'state'  and bind the even handler.

    this.state = {
      clickCount: 0 // Initializes the counter to zero
    };
    // creates the initial state. The state object stores clicks, and the initial count is zero

    this.allClicksCounter = this.allClicksCounter.bind(this);

    // binds the method to this component instance. Without binding, this can be undefined inside a regular event-handler method.

    // Make sure "this" refer to MyCounter inside the click handler
  }

  allClicksCounter() {
    //declares the function that responds to a click.
    this.setState((previosState) => ({
      // setState => tells React to update components state.
      // previosState => is the state value used to calculate the next value. for a counter we add one

      // uses React's state-update method with an updater function.
      // This is safer when the new value depends on the previous value.
      clickCount: previosState.clickCount + 1,
      // adds one to the latest stored count.
    }));
  }
 // Q2 evenClickCount
  evenClickCount() {
    // calculates the even total less than or equal to clicks.


    // return this.state.clickCount - (this.state.clickCount % 2);

    // Notice the pattern:
        // Even numbers have remainder 0 when divided by 2.
        // Odd numbers have remainder 1 when divided by 2.
    // Eg1:- 7 - (7 % 2)    3 - (3 % 2)
          // 7 - (1)        3 - (1)
          //  6               2
          // then brouser is not change its display 6  or 2
          // "Browser 3 gize click senaderg 2 nw emiyasayen"  
    // Eg2:- 8 - (8 % 2)
            // 8 - (0)
            // 8



// in if statement 
    const count = this.state.clickCount;
    if(count % 2 === 0) {
      return count
    }else{
      return count -1;
    }





    // this.state.clickCount =>
    //  is the actual total click count. It is the source value.

    // this.state.clickCount % 2 =>
    //

    // even number has remainder 0 after division by 2, while an odd number has remainder 1. So 5 - 1 becomes 4.
  }
  render() {
    
    const evenClick = this.evenClickCount();
    console.log(evenClick);
    return (
      <>
        <div>
          <button type="button" onClick={this.allClicksCounter}>
            Click me
          </button>
          <CounterDisplayer clickCount={this.state.clickCount} />
          <EvenCounterDisplayer clickCount={evenClick} />
        </div>
      </>
    );
  }
}
export default MyCounter










// Q2 evenClickCount


// import { Component } from 'react'
// import CounterDisplayer from './CounterDisplayer'
// import EvenCounterDisplayer from './EvenCounterDisplayer';

// class MyCounter extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       clickCount: 0,
//       evenClickCount: 0,
//     }; // stores both counter values starting 0 
//     this.allClicksCounter = this.allClicksCounter.bind(this);
//     this.evenClickCount = this.evenClickCount.bind(this)
//   }
//     allClicksCounter(){
//       this.setState(
//         (previousState) => ({
//           clickCount: previousState.clickCount + 1,
//         }),
//         this.evenClickCount
//       );
//     }
  
//     evenClickCount() {
//       this.setState((previousState) =>{
//         const latest = previousState.clickCount;

//         const evenCount = latest % 2 === 0 ? latest : latest -1; 

//         return {
//           evenClickCount: evenCount,
//         }
//       })
//     }

    

//   }


// //   // Q2 evenClickCount
// //   evenClickCount() {
// //     // calculates the even total less than or equal to clicks.
// //     return this.state.clickCount - (this.state.clickCount % 2);
// //     // this.state.clickCount =>
// //     //  is the actual total click count. It is the source value.

// //     // this.state.clickCount % 2 =>
// //     //

// //     // even number has remainder 0 after division by 2, while an odd number has remainder 1. So 5 - 1 becomes 4.
// //   }
// //   render() {
// //     return <div></div>;
// //   }
// // }


// rend
// export default MyCounter



