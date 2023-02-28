import React from 'react';


function SearchBar(){
    return(
        <>
        <input type="text" placeholder='Search...' className='searchbar' />
        <button type="submit" className='searchbarButton'><i className='fa fa-search'></i></button>
        </>
    )
}

export default SearchBar;