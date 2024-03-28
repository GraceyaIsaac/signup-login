import React,{useState} from 'react'
import './loginSignUp.css'
import user from '../Assets/user.png' 
import password from '../Assets/password.png' 
import email from '../Assets/email.png' 


export const LoginSignUp = () => {
    const[action,setAction]=useState("Sign Up")


    return (
      <div className='container'>
          <div className='header'>
              <div className='text'>{action}</div>
              <div className='underline'></div>
          </div>
          <div className='inputs'>
              {action==="Login"?<div></div>:
              <div className='input'>
              <img src={user} alt="user" style={{ width: '50px', height: '50px' }}/>
              <input type="text" placeholder='Name'/>
          </div>
              }
          
              <div className='input'>
                  <img src={email} alt="email" style={{ width: '50px', height: '50px' }}/>
                  <input type="email" placeholder='Email Id'/>
              </div>
              <div className='input'>
                  <img src={password} alt="password" style={{ width: '50px', height: '50px' }}/>
                  <input type="password" placeholder='Password'/>
              </div>
          </div>
          {action==="Sign Up"?<div></div>:        <div className='forgot-password'>Lost Password?<span>Click Here!</span></div>
              }
          <div className='submit-containers'>
              <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>SignUp</div>
              <div className={action==="Sign Up"?'submit gray':"submit"} onClick={()=>setAction("Login")}>Login</div>
          </div>
      </div>
    )
  }
  
