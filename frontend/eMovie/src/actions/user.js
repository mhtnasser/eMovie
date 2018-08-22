import {checkStatus} from '../utils';

export const createUser = user => ({
    type: 'SET_USER',
    user: user
});

export const updateUser = user => ({
    type: 'UPDATE_USER',
    user: user
});

export const logout = () => ({
    type: 'LOGOUT_USER'
});

export const login = (params) => {
  return (dispatch) => {
      // Je fais appel a mon api pour récupérer mes données
      return fetch("https://dev.kioskp.com/api/login", {
          method: 'POST',
          accept:'application/json',
          headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body: JSON.stringify(params)
      })
      .then(checkStatus)
      .then((response) =>{
          let api_key = response.api_key;
          const user = response.token.user;
          user.apikey = api_key;

          dispatch(createUser(user));
          return response;
      })
  }
};