import { useState } from "react";
import "./LoginPage.css";
import {useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials((pre) => ({
      ...pre,
      [name]: value,
    }));
    setMessage("");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setMessage(data.message);
        setLoggedInUser(data.user);

        setCredentials({
          email: "",
          password: "",
        });

      } else {
         setSuccess(false);
         setLoggedInUser(null);
         setMessage(data.message || "Login Failed");
      }
      
    } catch {
      setSuccess(false);
      setMessage("Connection Denied");
    } finally {
      setLoading(false);
    }

    
  };

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
                  <label
                    htmlFor="login-email"
                    className="form-label fw-semibold"
                  >
                    Email*
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={handleOnChange}
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
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={handleOnChange}
                    autoComplete="current-password"
                    required
                  />

                  
                </div>
                

                <div className="d-grid gap-2 d-sm-flex">
                  <button
                    type="submit"
                    className="btn btn-primary flex-fill"
                    disabled={loading}
                  >
                    {loading ? "Logging in" : "Login"}
                  </button>
                </div>
                {message && (
                  <p
                    className={`text-center mt-3 mb-0 ${
                      success ? "text-success" : "text-danger"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
              {loggedInUser && (
                <div className="alert alert-warning mt-4">
                  <h5 className="fw-bold">Login Successfully!</h5>

                  <p>
                    <strong>User ID:</strong> {loggedInUser.id}
                  </p>

                  <p>
                    <strong>Name:</strong> {loggedInUser.name}
                  </p>

                  <p className="mb-0">
                    <strong>Email:</strong> {loggedInUser.email}
                  </p>
                </div>
              )}

              <p className="text-center mt-4 mb-0">
                Don't have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => navigate("/createAccountPage")}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
