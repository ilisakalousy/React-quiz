import React from 'react';

import LoginForm from '../../Forms/LoginForm/loginForm'; 
import CloseButton from '../../UI/CloseButton/closeButton';

import { 
    PopupWrapper, 
    PopupBody,
} from './styled';
import SignupForm from '../../Forms/SignupForm/signupForm';

function HeaderPopup({ isShowLog, setIsShowLog, isShowSign, setIsShowSign }) {

    const handleClose = () => {
        setIsShowLog(false);
        setIsShowSign(false);
    }

    return isShowLog || isShowSign ? (
    <PopupWrapper
        onClick={handleClose}
    >
        <PopupBody
            onClick={e => e.stopPropagation()}
        >
            <CloseButton 
                onClick={handleClose}
            />
            { isShowLog 
              ? <LoginForm />
              : <SignupForm />
            }
        </PopupBody>
    </PopupWrapper>
  ) : null;
};
 
export default HeaderPopup;
 