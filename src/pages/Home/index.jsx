import React from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";

const Home = (searchKey) => {
    const setSearchKey = () => {};
    const handleClearSearch = () => {};
    const handleSearchBar = () => {};

    return (
        <div>
            {/* Page Header */}
            <Header />
            {/* Search Bar */}
            <SearchBar />
            {/* <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            /> */}

            {/* Blog & Empty View */}
            {/* {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />} */}
        </div>
    );
};

export default Home;
