import '../../components-css/Search.css';
import React, { useEffect, useState } from 'react';

const Search = () => {

  const [searchs, setSearch] = useState([]);
  const [userSearchs, setUserSearch] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
      const getSearch = async () => {
          const searchFromServer = await fetchSearch()
          setSearch(searchFromServer)
      }
      getSearch()
  }, [userSearchs])

  const fetchSearch = async () => {
      const res = await fetch('https://gamergategg.herokuapp.com/api/games');
      const data = await res.json();
        return data
  }
  

  return (
    <div className='search'>
      <input type="text" value={userSearchs} onChange={e => setUserSearch(e.target.value)} className="search__input" placeholder='Search a game or a categories' />
      <div className='search__container'> 
        
        <div className='search__images'>
        {searchs.map(search => (search.names.toLowerCase().includes(userSearchs.toLowerCase()) || search.categories.toLowerCase().includes(userSearchs.toLowerCase()) ? (
                  <div key={search.id} className='search__image'>
                      <img src={search.img_url} alt={search.id} key={search.id}  />
                  </div>
              ) : ('')))}
        </div>
      </div>
    </div>
  )
}

export default Search