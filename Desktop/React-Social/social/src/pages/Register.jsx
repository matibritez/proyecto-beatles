import React from 'react';
import add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Mati dev</span>
          <span className='logo'>Register</span>
            <form>
                <input type='text' placeholder='display name'></input>
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='password'></input>
                <input style={{display:"none"}} type='file' id='file'></input>
                <label htmlFor='file'>
                  <img src={add} alt=''/>
                  <span>Add an avatar</span>
                </label>
                <button>Sing up </button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
export default Register