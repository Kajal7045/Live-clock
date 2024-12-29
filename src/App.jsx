import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Live Clock</h1>
        <div className="clock">
          <p>{time}</p>
        </div>
      </header>
      <footer className="App-footer">
        <p>Developed by Kajal Dhumal</p>
      </footer>
    </div>
  );
}

export default App;
