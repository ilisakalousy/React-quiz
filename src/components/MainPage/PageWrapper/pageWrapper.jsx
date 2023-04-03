import React, { useMemo, useState } from 'react';
 
import { StyledPageWrapper } from './styled';
import QuizListWrapper from '../QuizWrapper/quizWrapper';
import { quizCards } from '../../../mocks/cards';
import Header from '../../Layout/Header/header';
import HeaderPopup from '../../Popups/HeaderPopup/headerPopup';
import NewQuiz from '../../Popups/NewQuizPopup/newQuizPopup';

function PageWrapper() {
  
  const [search, setSearch] = useState('');
  const [isShowLog, setIsShowLog] = useState(false);
  const [isShowSign, setIsShowSign] = useState(false);
  const [isShowNewQuiz, setIsShowNewQuiz] = useState(false);

  const searchedQuizes = useMemo(() => {
    return quizCards.filter((quizCard) => quizCard.title.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  return (
    <StyledPageWrapper>
        <Header 
          search={search}
          setSearch={setSearch}
          setIsShowLog={setIsShowLog}
          setIsShowSign={setIsShowSign}
          setIsShowNewQuiz={setIsShowNewQuiz}
        />
        <QuizListWrapper
          quizCards={searchedQuizes}
        />
        <HeaderPopup 
          isShowLog={isShowLog}
          setIsShowLog={setIsShowLog}
          isShowSign={isShowSign}
          setIsShowSign={setIsShowSign}
        />
        <NewQuiz 
          isShowNewQuiz={isShowNewQuiz}
          setIsShowNewQuiz={setIsShowNewQuiz}
        />
    </StyledPageWrapper>
  );
};
 
export default PageWrapper;
 