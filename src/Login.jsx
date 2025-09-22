import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Store"; 
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Signup.css"; // Reuse Signup CSS

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(login({ username: data.username, password: data.password }));

    // Wait for authentication update (async Redux)
    setTimeout(() => {
      if (auth.isAuthenticated) {
        Swal.fire({
          icon: "success",
          title: "Login Successful ✅",
          text: "Welcome back!",
          confirmButtonColor: "#3085d6",
        }).then(() => navigate("/orders"));
      } else if (auth.error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed ❌",
          text: auth.error,
          confirmButtonColor: "#d33",
        });
      }
    }, 500);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">

          {/* Username */}
          <div className="form-group">
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              placeholder=" "  // Required for floating label
              className="form-input"
            />
            <label className="form-label">Username</label>
            {errors.username && <p className="error-msg">{errors.username.message}</p>}
          </div>

          {/* Password */}
          <div className="form-group">
            <input
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              placeholder=" "
              className="form-input"
            />
            <label className="form-label">Password</label>
            {errors.password && <p className="error-msg">{errors.password.message}</p>}
          </div>

          {/* Terms & Conditions */}
          <div className="form-terms">
            <input
              type="checkbox"
              {...register("terms", { required: "You must accept terms & conditions" })}
            />
            <label className="terms-label">
              I agree to the <span className="terms-link">Terms & Conditions</span>
            </label>
          </div>
          {errors.terms && <p className="error-msg">{errors.terms.message}</p>}

          {/* Submit Button */}
          <button type="submit" className="signup-btn">
            Login
          </button>

          {/* Navigation to Signup */}
          <p className="signup-login-text">
            Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
