import React from 'react';
import Row from "../Row";
import Header from "../Header";



const Home = () => {
  return (
      <div>
          <Header />
          <Row title="Top played" />
          <Row title="Best rated" />
          <Row title="Trending Now" />
      </div>
  )
}

export default Home