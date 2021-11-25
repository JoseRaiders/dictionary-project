
import logo from "./logov2.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (    
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="image-fluid App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          <small>Open-source coded by Anuska Jose</small>
        </footer>
      </div>
    </div>
  );
}
