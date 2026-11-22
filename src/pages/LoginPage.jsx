import { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

 function Login()
{
    const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [visible , setVisible] = useState(false);
    const [error , setError] = useState("");
    const [success , setSuccess] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email REGEX Validation

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password REGEX Validation

    const updateVisible = ()=>{
        setVisible(!visible);
    }
    const handleEmailError = () => {
    if (!email.trim()) {
      setError("");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setError("Wrong Email Format");
    } else {
      setError("");
    }
  };
   const handlePasswordError = () => {
    if (!password.trim()) {
      setError("");
      return;
    }
    if (!passwordRegex.test(password.trim())) {
      setError("Wrong Password Format");
    } else {
      setError("");
    }
  };

    const handleLogin = (e)=>{
        e.preventDefault();

        setSuccess("");

        navigate(`/home`);

    }
    
  return (
   <>
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light py-4 py-md-5 px-3">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-9 col-lg-7 col-xl-6">
          <div className="card login-card p-3 p-sm-4 p-lg-5">
            <div className="card-body text-center px-0 pt-0 pb-3">
              <h2 className="text-primary fw-bold">Login</h2>
              <p className="text-secondary mb-0">
                Enter your details to access your account
              </p>
            </div>

            <form onSubmit={handleLogin} noValidate>
              <div className="mb-3">
                <label htmlFor="login-email" className="form-label fw-semibold">
                  Email*
                </label>
                <input
                  id="login-email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onBlur={handleEmailError}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="login-password"
                  className="form-label fw-semibold"
                >
                  Password*
                </label>
                <input
                  id="login-password"
                  type={visible ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onBlur={handlePasswordError}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />

                <button
                 onClick={updateVisible}
                  type="button"
                  className="btn btn-link btn-sm px-0 mt-2"
                >
                  {visible ? "Hide password" : "Show password"}
                </button>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <div className="d-grid gap-2 d-sm-flex">
                <button
                  type="submit"
                  className="btn btn-primary flex-fill"
                  disabled={success}
                >
                  {success ? "Logged in" : "Login"}
                </button>

                <button
                  type="button"
                  className="btn btn-outline-primary flex-fill"
                  onClick={()=>{
                    navigate(`/createAccountPage`)
                  }}
                
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}


export default Login;