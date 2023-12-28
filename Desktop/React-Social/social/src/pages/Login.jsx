import React from 'react';
import add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Mati dev</span>
          <span className='logo'>Login</span>
            <form>
                
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='password'></input>
                
                <button>Sing up </button>
            </form>
            <p>You dont have an account? Login</p>
        </div>
    </div>
  )
}
export default Login