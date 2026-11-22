import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, ShoppingCart, ShoppingBag } from "lucide-react";
import "./Navbar.css";

function Navbar({ search, setSearch,cartCount  }) {
  const handleForm = (event) => {
    event.preventDefault();
    Navigate(`/shop`);
    closeNavbar();
  };
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light  py-3">
      <div className="container">
        {/* Logo and Brand */}
        <div className="d-flex align-items-center navbar-brand-group">
          <Link to="/home" className="logo-link">
            <ShoppingBag size={48} color="blue" strokeWidth={0.75} />
          </Link>

          <Link className="navbar-brand fw-bold fs-4 mb-0" to="/home">
            Urban<span className="text-primary">Cart</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto text-center gap-lg-3 my-3 my-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={closeNavbar}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop" onClick={closeNavbar}>
                Shop
              </Link>
            </li>

            <li className="nav-item dropdown text-center">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent mx-auto"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>

              <ul className="dropdown-menu text-center">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/smartphone"
                    onClick={closeNavbar}
                  >
                    Smartphones
                  </Link>
                  <hr />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/laptop"
                    onClick={closeNavbar}
                  >
                    Laptops
                  </Link>
                  <hr />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/accessories"
                    onClick={closeNavbar}
                  >
                    Accessories
                  </Link>
                  <hr />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/audiopage"
                    onClick={closeNavbar}
                  >
                    Clothing Products
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/wishlist" onClick={closeNavbar}>
                Wishlist
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="navbar-actions">
            <form className="input-field" onSubmit={handleForm}>
              <input
                className="form-control"
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search products..."
                aria-label="Search"
              />
            </form>

            <button
              className="iconsBtn"
              type="button"
              aria-label="User account"
            >
              <UserRound
                size={30}
                strokeWidth={0.75}
                onClick={() => {
                  Navigate("/createAccountPage");
                }}
              />
            </button>

            <Link to="/cart" className="iconsBtn" aria-label="Shopping cart">
              <ShoppingCart size={30} strokeWidth={0.75} />
              {cartCount > 0 && (
                <span className="badge text-bg-primary">{cartCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
