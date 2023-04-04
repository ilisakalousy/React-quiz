import React, { useState } from 'react';

import {
    StyledNewQuiz,
    StyledHeading
} from "./styled";

import NewQuizForm from '../../Forms/NewQuiz/newQuiz';
import QuestionsList from '../QuestionsList/questionList';
 
function NewQuizPage() {

  const [pageNumber, setPageNumber] = useState(0);
  const [pages, setPages] = useState([]);


  const addingClick = (e) => {
    const newPage = `item-${pageNumber}`;
    for (let page = 0; page <= pageNumber; page++) {
      setPages([...pages, newPage]);
    };
    setPageNumber(pageNumber + 1); 
  };

  const backPageHandler = () => {
    setPageNumber(pageNumber - 1);
    pages.pop();
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
            backPageHandler={backPageHandler}
         />
      }
    </StyledNewQuiz>
  );
};
 
export default NewQuizPage;
 