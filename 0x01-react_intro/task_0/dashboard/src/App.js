import logo from "./holberton-logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="School dashboar" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">Login to access the full dashboard</div>
      <div className="App-footer">Copyright 2020 - holberton School</div>
    </div>
  );
}

export default App;
