import React from 'react'
import Navbar from '../Parts/Navbar'
import "./Login.css"
function L() {
  return (
    <div>
        <Navbar></Navbar>
      <div class="container">
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <button className = "loginx">Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default L

    
