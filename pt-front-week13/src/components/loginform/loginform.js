import React from 'react'

export default function loginform() {
  return (
    <div className="login-form">
        <h3>Log In</h3>
        <input className="login-input" type="text" placeholder="Username" />
        <br />
        <input className="login-input" type="password" placeholder="Password" />
        <br />
        <button className="login-input" type="submit">Login</button>
    </div>
  )
}
