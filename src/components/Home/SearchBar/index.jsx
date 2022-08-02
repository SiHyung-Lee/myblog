import React from "react";

const SearchBar = ({ value, handleSearchKey, clearSearch }) => {
    return (
        <div className='searchBar-wrap'>
            <form>
                <input
                    type='text'
                    onChange={handleSearchKey}
                    placeholder='Search By Category'
                    value={value}
                />
                {value && <span onClick={clearSearch}>X</span>}
            </form>
        </div>
    );
};

export default SearchBar;
