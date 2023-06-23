import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="form-container">
          <div className="login-form">
            <div className="logo-container">
              <img src="https://app.salescaptain.com/static/media/loginLogo.3814067f45867b0a416c.png" alt="Logo" className="logo" />
            </div>
            <div className="login-text">Login</div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="submit">Sign in</button>

              <div className="forgot-password">
                <span className="forgot-password-icon"></span>
                <a href="https://app.salescaptain.com/login/check-forget-password">Forgot Password</a>
              </div>
            </form>
          </div>
        </div>

        <div className="image-container">
          <div className="text-overlay">
            <h1>Give your business a</h1>
            <h1>SalesCaptain Upgrade</h1>
            <br/>
            <p>Our AI-powered tools help local businesses modernize how they communicate with their customers by facilitating online reviews, personalized marketing campaigns, web chats, payments, and more.</p>

            <button type='submit'>Book an appointment</button>
          </div>
          <img src="https://thumbnails.production.thenounproject.com/j6s-Tl5kuYJwYx844BV9mI_HLl4=/fit-in/1000x1000/photos.production.thenounproject.com/photos/DBCC24C0-AD78-49BB-8524-0DB4DA060058.jpg" alt="" className="image" a href="https://calendly.com/salescaptain/demo_meet?month=2023-06" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
