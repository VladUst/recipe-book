import React from 'react';
import { useState } from 'react';

function Search({ handleSearch = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        handleSearch(value);
    };
    return (
        <div className="row">
            <div className="input-field">
                <input
                    type="search"
                    id="search-field"
                    placeholder="Category name"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className="btn search-btn  cyan darken-4"
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search };
