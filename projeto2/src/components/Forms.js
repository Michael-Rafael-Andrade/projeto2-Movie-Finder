import { useState } from 'react';

function Form({ handleSubmit }) {

    const [searchEntry, setSearchEntry] = useState("");

    function updateSearchInput(e) {
        setSearchEntry(e.target.value);
    }

    return (
        <form
            onSubmit={e=> {
                handleSubmit(e, searchEntry);
            }}
            className="search-form"
        >
            <input
                type="text"
                name="search"
                placeholder="Search..."
                onChange={updateSearchInput}
                value={searchEntry}
            />
            <button
                type="submit"
                disabled={!searchEntry.trim()}
                className={`search-button ${searchEntry.trim() ? "active" : ""}`}
            >
                <svg height='32px' width='32px'>
                    <path
                        d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        fill="lightgray" // deixa o desenho da lupa cinza claro
                        fillRule='evenodd'
                    />

                </svg>

            </button>
        </form>
    );
}

export default Form;