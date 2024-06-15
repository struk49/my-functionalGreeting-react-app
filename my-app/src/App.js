import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './component/FunctionalGreetingWithProps';
import FunctionalGreeting from './component/FunctionalGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
      <FunctionalGreeting />
    </div>
  );
}

export default App;