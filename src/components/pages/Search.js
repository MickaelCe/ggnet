import '../../components-css/Search.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import '../ToTop';
import ToTop from '../ToTop';

const Search = () => {

  const [searchs, setSearch] = useState([]);
  const [userSearchs, setUserSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [idSearch, setIdSearch] = useState(16);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  useEffect(() => {

    const getSearch = async () => {
      const searchFromServer = await fetchSearch()
      setSearch(searchFromServer)
    };


    const getId = e => {
      const searchIdFromServer = idSearch + 1;
      setIdSearch(searchIdFromServer)
    };

    getSearch()
    if (idSearch <= 1000) {
      window.addEventListener("scroll", getId);
    } else {
      console.log('')
    }
  }, [userSearchs , idSearch])

  const fetchSearch = async () => {
    const res = await fetch('https://gamergategg.herokuapp.com/api/games');
    const data = await res.json();
    setLoading(true);
    return data
  }
  

  const getIdSearch = e => {
    const searchIdFromServer = idSearch + 100;
    setIdSearch(searchIdFromServer)
  };

  const resetIdSearch = e => {
    const resetIdFromServer = 16;
    setIdSearch(resetIdFromServer)
  };

  return (
    <div className='search'>
      <input type="text" value={userSearchs} onChange={e => {
        setUserSearch(e.target.value);
        if (idSearch <= 1000 && userSearchs.trim() !== '') {
          getIdSearch();
        };
        if (e.target.value.length <= 1) {
          resetIdSearch()
        };
      }
      } className="search__input" placeholder='Search a game or a category' />
      <ToTop />
      <div className='search__container'>
        <div className='search__images'>
        {loading ? (searchs.map(search => ((search.names.toLowerCase().trim().includes(userSearchs.toLowerCase().trim()) && search.id <= idSearch) || (search.categories.toLowerCase().trim().includes(userSearchs.toLowerCase().trim()) && search.id <= idSearch) ? (
                  <div key={search.id}  className='search__image' >
                    <Link to={`/game/${search.names}`} className='search__image'>
                      <img src={search.img_url} alt={search.id} key={search.id} data-aos="fade-right" />
                    </Link>
                  </div>
        ) : ('')))) : (
      <div className='loadingSearch'>
                <div className='loadingSquareSearch'><img src={require('../../assets/loader.gif')} alt="loader" className='loader' /></div>
                <h2>Loading...</h2>
      </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Search