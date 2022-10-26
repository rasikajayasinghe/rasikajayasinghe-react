import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./router/Router";
import Header from "./components/header/Header";

function App() {
  return (
    <main className="main">
      <Router>
        <Header />
        <Routes />
      </Router>
    </main>
  );
}

export default App;
