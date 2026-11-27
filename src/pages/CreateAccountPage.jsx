import { useState } from "react";
import "./CreateAccountPage.css";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
    const navigate = useNavigate();
  // UseStates For Input Fields

  const [name, setName] = useState(""); // Name Input field UseState

  const [email, setEmail] = useState(""); // Email Input field UseState

  const [password, setPassword] = useState(""); // Password Input field UseState

  const [confirm, setConfirm] = useState(""); // Confirm Password Input field UseState

  // UseStates For Error Message Fields
  const [error, setError] = useState(""); //Error Message show

  const [success, setSuccess] = useState(""); // Success Message show

  const [visible, setVisible] = useState(false); // Change Button Text + Hide/Show Password
  const pass = () => setVisible(!visible);

  // UseStates For Separate Error Message Fields
  const [nameError, setNameError] = useState(""); // Name Input Field ka Neechy ik Separate Error Message Field

  const [emailError, setEmailError] = useState(""); // Email Input Field ka Neechy ik Separate Error Message Field

  const [passwordError, setPasswordError] = useState(""); // Password Input Field ka Neechy ik Separate Error Message Field

  const [confirmError, setConfirmError] = useState(""); // Confirm Password Input Field ka Neechy ik Separate Error Message Field

  // Regex for validation in form fields
  const nameRegex = /^[A-Za-z\s]{3,30}$/; // Name REGEX Validation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email REGEX Validation

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password REGEX Validation

  // Form validation Process
  const handleForm = async (e) => {
    e.preventDefault();

    //clear error message fields first
    setError("");
    setSuccess("");

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmError("");

    // if all fields are empty....
    if (!name.trim() || !email.trim() || !password.trim() || !confirm.trim()) {
      setError("All inputs fields are required to fill ");
      return;
    }

    if (!nameRegex.test(name.trim())) {
      setNameError("Wrong Name Format");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setEmailError("Wrong Email Format");
      return;
    }

    if (!passwordRegex.test(password.trim())) {
      setPasswordError("Wrong Password Format");
      return;
    }

    if (password !== confirm) {
      setConfirmError("Password is not Matched!");
      return;
    }
      try {
    const res = await fetch(
      "http://localhost:5000/api/users/createAccountPage",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password,
          confirmPassword: confirm,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Something went wrong");
      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");

    navigate("/loginpage", {
      state: { message: "Account created successfully!" },
    });
  } catch {
    setError("Could not reach the server. Is the backend running?");
  }

   
  };

  const handleNameError = () => {
    if (!name.trim()) {
      setNameError("");
      return;
    }
    if (!nameRegex.test(name.trim())) {
      setNameError("Wrong Name Format");
    } else {
      setNameError("");
    }
  };

  const handleEmailError = () => {
    if (!email.trim()) {
      setEmailError("");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setEmailError("Wrong Email Format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordError = () => {
    if (!password.trim()) {
      setPasswordError("");
      return;
    }
    if (!passwordRegex.test(password.trim())) {
      setPasswordError("Wrong Password Format");
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmError = () => {
    if (!confirm.trim()) {
      setConfirmError("");
      return;
    }
    if (password !== confirm) {
      setConfirmError("Password is not Matched!");
    } else {
      setConfirmError("");
    }
    
  };
  return (
    <>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light py-4 py-md-5 px-3">
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-7 col-xl-6">
            <div className="card signup-card p-3 p-sm-4 p-lg-5">
              <div className="card-body text-center px-0 pt-0 pb-3">
                <h2 className="text-primary fw-bold">Create Account</h2>
                <p className="text-secondary mb-0">
                  Please fill in the form to create your account
                </p>
              </div>

              <form onSubmit={handleForm} noValidate>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onBlur={handleNameError}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError("");
                      setError("");
                    }}
                  />
                  {nameError && (
                    <p className="alert alert-danger mt-2 mb-0">{nameError}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email*</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onBlur={handleEmailError}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                      setError("");
                    }}
                  />
                  {emailError && (
                    <p className="alert alert-danger mt-2 mb-0">{emailError}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Password*</label>
                  <input
                    type={visible ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onBlur={handlePasswordError}
                    onChange={(e) => {
                      const newPassword = e.target.value;
                      setPassword(newPassword);
                      setPasswordError("");
                      setError("");

                      if (confirm && newPassword !== confirm) {
                        setConfirmError("Password does not match.");
                      } else {
                        setConfirmError("");
                      }
                    }}
                  />
                  {passwordError && (
                    <p className="alert alert-danger mt-2 mb-0">
                      {passwordError}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Confirm Password*
                  </label>
                  <input
                    type={visible ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter password again"
                    value={confirm}
                    onBlur={handleConfirmError}
                    onChange={(e) => {
                      const newConfirm = e.target.value;
                      setConfirm(newConfirm);
                      setError("");

                      if (password && newConfirm !== password) {
                        setConfirmError("Password does not match.");
                      } else {
                        setConfirmError("");
                      }
                    }}
                  />

                  {confirmError && (
                    <p className="alert alert-danger mt-2 mb-0">
                      {confirmError}
                    </p>
                  )}

                  <button
                    onClick={pass}
                    type="button"
                    className="btn btn-link btn-sm px-0 mt-2"
                  >
                    {visible ? "Hide password" : "Show password"}
                  </button>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}

                <button
                  type="submit"
                  className={`btn w-100 ${
                    success ? "btn-success" : "btn-primary"
                  }`}
                  disabled={success}
                  
                >
                  {success ? "Account Created" : "Create Account"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
