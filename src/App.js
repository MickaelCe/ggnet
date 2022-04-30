import './App.css';
import React from 'react';
import Row from "./components/Row";
// const RowLoaded = React.lazy(() => import ("./components/Row"));


function App() {

  return (
    <div className="App">
      <h1>Hello dude</h1>
      <Row title="Top played" />
      <Row title="Best rated" />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
