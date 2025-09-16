import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register as registerUser } from "./Store"; 
import Swal from "sweetalert2";
import "./Signup.css";

function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = watch("password", "");

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    Swal.fire({
      icon: "success",
      title: "Account Created 🎉",
      text: "Please login with your new account",
      confirmButtonColor: "#3085d6",
    }).then(() => navigate("/login"));
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">

          <div className="form-group">
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              placeholder="Enter your username"
              className="form-input"
            />
            <label className="form-label">Username</label>
            {errors.username && <p className="error-msg">{errors.username.message}</p>}
          </div>

          <div className="form-group">
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
              })}
              placeholder="Enter your email"
              className="form-input"
            />
            <label className="form-label">Email</label>
            {errors.email && <p className="error-msg">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <input
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              placeholder="Enter your password"
              className="form-input"
            />
            <label className="form-label">Password</label>
            {errors.password && <p className="error-msg">{errors.password.message}</p>}
          </div>

          <div className="form-group">
            <input
              type="password"
              {...register("confirmPassword", { 
                required: "Confirm password is required",
                validate: value => value === password || "Passwords do not match"
              })}
              placeholder="Confirm your password"
              className="form-input"
            />
            <label className="form-label">Confirm Password</label>
            {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword.message}</p>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              {...register("phone", { 
                required: "Phone number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" }
              })}
              placeholder="Enter your phone number"
              className="form-input"
            />
            <label className="form-label">Phone</label>
            {errors.phone && <p className="error-msg">{errors.phone.message}</p>}
          </div>

          <div className="form-terms">
            <input
              type="checkbox"
              {...register("terms", { required: "You must accept the terms & conditions" })}
            />
            <label className="terms-label">
              I agree to the <span className="terms-link">Terms & Conditions</span>
            </label>
          </div>
          {errors.terms && <p className="error-msg">{errors.terms.message}</p>}

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="signup-login-text">
          Already have an account? <Link to="/login" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
