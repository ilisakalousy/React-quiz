import React from 'react';

import { SearchWrapper, StyledSearch, StyledLoupe, StyledPlus } from './styled';
 
function SearchInput({ search, setSearch }) {

  const inputCleaner = () => {
    setSearch('');
  }

  return (
    <SearchWrapper>
        <StyledSearch 
            placeholder='Search for quiz...'
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <StyledLoupe />
        <StyledPlus 
          onClick={inputCleaner}
        />
    </SearchWrapper>
  );
};
 
export default SearchInput;
 