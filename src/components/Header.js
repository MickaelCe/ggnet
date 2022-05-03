import React, { useEffect, useState } from 'react';
import "../components-css/Header.css";

const Header = () => {

    const [headers, setHeader] = useState([]);
    const rand = Math.floor(Math.random() * 1000);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getHeader = async () => {
            const headerFromServer = await fetchHeader()
            setHeader(headerFromServer)
        }
        getHeader()
    }, [])

    const fetchHeader = async () => {
        const res = await fetch('https://gamergategg.herokuapp.com/api/games');
        const data = await res.json();
        setLoading(true);
          return data
      }

    
  return (
      <header>
              {loading ? (headers.map(header => (header.id === rand ? (
                  <div key={header.id} className='header__container'>
                      <img src={header.img_url} alt={header.id} key={header.id} className='header__image' />
                      <h1 className='header__name'>{header.names}</h1>
                      <p className='header__description'>{header.user_reviews}<span>By : {header.developer}</span></p>
                      <div className='header__actions'><a href={header.link} target='blank_' className='header__buttons'>Infos</a><a href={header.link} target='blank_' className='header__buttons'>Buy now</a></div>
                      <div className='filter__header'></div>
                  </div>
              ) : ('')))) 
                : (<div className='header__container'>
                <div className='loading__header'><img src={require('../assets/loader.gif')} alt="loader" className='loader'/></div>
              </div>)
            }   
      </header>
  )
}

export default Header