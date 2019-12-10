export const logIn = ({login, password}) => {
  return fetch('http://new.services/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        login: login,
        password: password,
      })
    }).then((res) => {
      console.log(res.json());
      return res.json();
    });
}