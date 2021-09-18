import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

// 클래스 방식 COMPONENET 선언
class App extends Component {
  render(){
    return (
      <div className ="App">
        <header className="App-header">
        <h1>Hello React</h1>
       </header>
      </div>
    )
  }
}

// 함수방식 COMPONENT 선언
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
