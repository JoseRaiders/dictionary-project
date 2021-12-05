
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
          <small><a href="https://github.com/JoseRaiders/dictionary-project" target="_blank" rel="noreferrer">Open-source coded</a> by Anuska Jose</small>
        </footer>
      </div>
    </div>
  );
}
