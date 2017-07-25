import React from 'react';

export default function SearchForm(props) {
  const countNoun = props.characterCount === 1 ? 'result' : 'results'
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search</label>&emsp;
            <input type="search" id="search" name="search" placeholder="Dale Cooper" 
                onChange={e => props.onChange(e.target.value)} />
            <span className="results-count" 
              aria-live="assertive" 
              aria-atomic="true">
                {props.characterCount} {countNoun}
              </span>
        </form>
    );
}