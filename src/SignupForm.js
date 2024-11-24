import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    console.log(JSON.stringify(userData));
    alert(`User data: ${JSON.stringify(userData)}`);
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <h1>Come join us!</h1>
        <p className='p1'>
          We are so excited to have you here. If you haven't already, create an
          account to get access to exclusive offers, rewards, and discounts.
        </p>
        <button className="signin-button">Already have an account? Sign in</button>
      </div>
      <div className="right-panel">
        <h2>Signin</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Submit</button>
        </form>
        <p>or signup with</p>
      </div>
    </div>
  );
};

export default SignupForm;
