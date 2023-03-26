import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import LoginForm from '../Forms/LoginForm/loginForm'; 

import { 
    PopupWrapper, 
    PopupBody,
    CloseButton,
} from './styled';
import SignupForm from '../Forms/SignupForm/signupForm';

function LogInPopup({ isShowLog, setIsShowLog, isShowSign, setIsShowSign }) {
  
    // const [googleUser, setGoogleUser] = useState({});

    // function handleCallbackResponse(response) {
    //     var userGoogleObject = jwt_decode(response.credential);
    //     setGoogleUser(userGoogleObject)
    // };

    // useEffect(() => {
    //     /* global google */
    //     google.accounts.id.initialize({
    //         client_id: "144596461763-jqvpf8rt32g5occvqmtiisoh5rhqp8fa.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     })

    //     google.accounts.id.renderButton(
    //         document.getElementById("signInDiv"),
    //         { 
    //             theme: "outline", 
    //             size: "large",
    //         }
    //     )
    // }, [])

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
 
export default LogInPopup;
 