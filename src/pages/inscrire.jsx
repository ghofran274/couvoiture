import React from "react";
import "./inscrire.css"; // Assurez-vous de créer ce fichier CSS
import google from "../assets/google.png";
import apple from "../assets/apple.jpg";
import facebook from "../assets/R.png";

function Login() {
  return (
  
    <div className="login-container">
      
      <h1>Sign in or create an account</h1>
      <p>Sign in with your ShareMyRide.com account and access our services.</p>
      <form className="login-form">
        <label htmlFor="email">Adresse e-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your email address"
          required
        />
        <button type="submit" className="email-login-button">
          Continue with an email address
        </button>
      </form>
      <div className="separator">
        <span>or choose one of these options</span>
      </div>
      <div className="social-login-options">
        <img src={google} alt="google" className="google-logo" />
        <img src={apple} alt="apple" className="apple-logo" />
        <img src={facebook} alt="facebook" className="facebook-logo" />
      </div>
    </div>
  ); 
}

export default Login;
