import React, { useState } from 'react';

import NewQuizForm from '../../Forms/NewQuiz/newQuiz';
import QuestionsList from '../QuestionsList/questionList';

import {
    StyledNewQuiz,
    StyledHeading
} from "./styled";
 
function NewQuizPage() {

  const [pageNumber, setPageNumber] = useState(0);
  const [pages, setPages] = useState([]);
  const [isShowMicro, setIsShowMicro] = useState(false);

  const addingClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const newPage = `item-${pageNumber}`;
    for (let page = 0; page <= pageNumber; page++) {
      setPages([...pages, newPage]);
    };
    setPageNumber(pageNumber + 1); 
  };

  const backPageHandler = (e) => {
    if (pageNumber === 1) {
      setIsShowMicro(true)
      return
    };

    e.preventDefault();
    setPageNumber(pageNumber - 1);
    pages.pop();
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber + 1);
  };

  return (
    <StyledNewQuiz>
      {pageNumber === 0 ?
      <>
          <StyledHeading>Create new quiz!</StyledHeading>
          <NewQuizForm 
            pages={pages}
            addingClick={addingClick}
          />
      </>
        :
          <QuestionsList 
              pages={pages}
              addingClick={addingClick}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              backPageHandler={backPageHandler}
              nextPageHandler={nextPageHandler}
              isShowMicro={isShowMicro}
              setIsShowMicro={setIsShowMicro}
          />
      }
    </StyledNewQuiz>
  );
};
 
export default NewQuizPage;
 