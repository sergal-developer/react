import React, { useContext } from 'react'
import { PruebaContext } from '../contexts/PruebaContext';

export const Login = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);

  const loginUser = (e) => {
    e.preventDefault();
    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    setUsuario(user);
    console.log('ctxShared: ', usuario);
  }

  return (
    <div>
      <h1>Login</h1>
    
    
    <form onSubmit={ loginUser }>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="password" placeholder="Password" />

      <button type='submit'>Login</button>
    </form>
    </div>
  )
}
