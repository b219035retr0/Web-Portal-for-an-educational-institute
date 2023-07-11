import React from 'react'
import { useState } from 'react'
import './style.css';

const SignInForm = () => {
  const [values, setValues] = useState({
    Name: "",
    email: "",
    password: "",
    role:""
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
    if (values.Name && values.email &&values.password) {
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
              Welcome {values.Name}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        )}
        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Name"
            name="Name"
            value={values.Name}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.Name && (
          <span id="first-name-error">Please enter Your name</span>
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

          {
            !valid && (
              <div>
                  <label>Register as:</label>
              <div style={{ width: '300px' }}>
                <select onChange={handleInputChange} id="colours" class="form-field" >
                  <option value="red">Faculty</option>
                  <option value="green">Student</option>
                </select>
              </div>
              </div>
              
            )
          }
        {!valid && (
          <button className='subbutton' type="submit">
            Register
          </button>
        )}
      </form>
    </div>
  )
}

export default SignInForm
