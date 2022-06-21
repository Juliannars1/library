import { useState } from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = window.localStorage.getItem('loggedNoteAppUser');
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}
export default useToken;