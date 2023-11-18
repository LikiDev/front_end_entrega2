import React from 'react';
import './SearchBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchBar = ({ value, onSearch }) => {
    return (
        <div className="searchbar d-flex">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
                value={value}
                onChange={onSearch}
            />
            <button className="btn btn-outline-success" type="button">
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
};

export default SearchBar;
