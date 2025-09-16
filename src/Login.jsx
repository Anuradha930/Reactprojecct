import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Store"; 
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Signup.css"; // Reuse Signup CSS

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const password = watch("password", "");

  const onSubmit = (data) => {
    dispatch(login({ username: data.username, password: data.password }));

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
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">

          {/* Username */}
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="form-input"
              placeholder="Enter your username"
            />
            {errors.username && <p className="error-msg">{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
              })}
              className="form-input"
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-msg">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              className="form-input"
              placeholder="Enter your password"
            />
            {errors.password && <p className="error-msg">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", { 
                required: "Confirm password is required",
                validate: value => value === password || "Passwords do not match"
              })}
              className="form-input"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword.message}</p>}
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

          <p className="signup-login-text">
            Don't have an account? <span className="login-link" onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
