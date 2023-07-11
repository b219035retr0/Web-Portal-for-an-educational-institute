import React from 'react'
import { useState } from 'react';
const LoginForm = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
      });
    
      const handleInputChange = (event) => {
        /* event.persist(); NO LONGER USED IN v.17*/
        event.preventDefault();
    
        const { name, value } = event.target;
        setValues((values) => ({
          ...values,
          [name]: value
        }));
      };
      // handleChange = (event) => {
      //   this.setState({selectValue: event.target.value}, ()=> {alert(`Value: ${this.state.selectValue}`)});
      //   } 
    
      const [submitted, setSubmitted] = useState(false);
      const [valid, setValid] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (values.email &&values.password) {
          setValid(true);
        }
        setSubmitted(true);
      };
      return (
        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            {submitted && valid && (
              <div className="success-message">
                <h3>
                  {" "}
                  Welcome {values.email}{" "}
                </h3>
                <div> Your Login was successful! </div>
              </div>
            )}
            {!valid && (
              <input
                class="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}
            
            {!valid && (
              <input
                class="form-field"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.password && (
              <span id="email-error">Please enter an Password</span>
            )}
    
            {!valid && (
              <button className='subbutton' type="submit">
                Login
              </button>
            )}
          </form>
        </div>
      )
    }
    
    export default LoginForm
    
