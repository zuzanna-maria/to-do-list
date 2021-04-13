import logo from './logo.svg';
import './App.css';
import Heading from './components/heading/heading.js';
import InputBar from './components/input-bar/input-bar.js'
// import Checkbox from './components/checkbox/checkbox.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading />
        <InputBar />
        {/* <Checkbox /> */}
        
      </header>
    </div>
  );
}

export default App;
