import React  from 'react';

import QuestionsPage from '../QuestionsPage/questionPage';
import CloseButton from '../../UI/CloseButton/closeButton';

import {
    StyledList,
} from "./styled";
 
function QuestionsList({ 
  pages, // array of pages
  addingClick, // adds page
  pageNumber, // number of current page
  backPageHandler, // previous page
  nextPageHandler,  // next page
  isShowMicro, // are you sure ?
  setIsShowMicro, // are you sure ? state changer
  setPageNumber, // set page number 
}) {

  const isNextDisabled = pages.length - 1 === pageNumber;

  return (
    <StyledList>
      <CloseButton />
       {
        pages.map((page, index) => 
          {if (pageNumber === index+1) {
            return (
            <QuestionsPage 
              key={index}
              addingClick={addingClick}
              backPageHandler={backPageHandler}
              pageNumber={pageNumber}
              nextPageHandler={nextPageHandler}
              isNextDisabled={isNextDisabled}
              isShowMicro={isShowMicro}
              setIsShowMicro={setIsShowMicro}
              setPageNumber={setPageNumber}
            />)
          }}
        )
       }
    </StyledList>
  );
};
 
export default QuestionsList;
 