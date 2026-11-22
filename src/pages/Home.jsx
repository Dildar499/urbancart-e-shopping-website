import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faShieldHalved,
  faHeadset,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid px-0 px-md-3 home-page">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="/assss.png"
              className="d-block w-100 slider-img"
              alt="Accessories"
            />

            <div className="carousel-caption custom-caption">
              <h5>
                Accessories For
                <br />
                <span className="text-primary">Tech Life</span>
              </h5>

              <p>Discover the latest accessories from our store.</p>

              <div className="slider-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate(`/shop`);
                  }}
                >
                  Shop Now ➔
                </button>
                <button className="btn btn-outline-secondary text-dark">
                  Watch Video
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="/laptops.png"
              className="d-block w-100 slider-img"
              alt="Laptops"
            />

            <div className="carousel-caption custom-caption">
              <h5>
                Laptops For
                <br />
                <span className="text-primary">Tech Life</span>
              </h5>

              <p>Explore powerful laptops for work and entertainment.</p>

              <div className="slider-buttons">
                <button className="btn btn-primary">Shop Now ➔</button>
                <button className="btn btn-outline-secondary text-light">
                  Watch Video
                </button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="/smartphones1.jpg"
              className="d-block w-100 slider-img"
              alt="Smartphones"
            />

            <div className="carousel-caption custom-caption">
              <h5>
                Smartphones For
                <br />
                <span className="text-primary">Tech Life</span>
              </h5>

              <p>Discover the latest smartphones at UrbanCart.</p>

              <div className="slider-buttons">
                <button className="btn btn-primary">Shop Now ➔</button>
                <button className="btn btn-outline-secondary text-light">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="row gy-4 my-3 pb-4 main-div align-items-center">
          {/* Free Shipping */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <FontAwesomeIcon icon={faTruckFast} size="3x" color="#2563eb" />
              <div>
                <h5>Free Shipping</h5>
                <p className="mb-0 text-secondary">On Orders Over $50</p>
              </div>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <FontAwesomeIcon
                icon={faShieldHalved}
                size="3x"
                color="#2563eb"
              />
              <div>
                <h5>Secure Payment</h5>
                <p className="mb-0 text-secondary">100% Secure Checkout</p>
              </div>
            </div>
          </div>

          {/* Customer Support */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <FontAwesomeIcon icon={faHeadset} size="3x" color="#2563eb" />
              <div>
                <h5>24/7 Support</h5>
                <p className="mb-0 text-secondary">Always Here To Help</p>
              </div>
            </div>
          </div>

          {/* Easy Returns */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <FontAwesomeIcon
                icon={faArrowRotateLeft}
                size="3x"
                color="#2563eb"
              />
              <div>
                <h5>Easy Returns</h5>
                <p className="mb-0 text-secondary">30 Days Return Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="container text-primary fs-2 fw-bold">____</p>

      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center feature">
              <h2 className="fw-bold mb-0">Featured Products</h2>

              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate(`/shop`);
                }}
              >
                View All Products <span>➔</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container my-5 home-products"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="row g-4">
          {/* Product 1 */}
          <motion.div
            className="col-12 col-sm-6 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 5 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="./smartphone.jpg"
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
                onClick={() => {
                  navigate(`/smartphone`);
                }}
              />
              <div className="card-body">
                <h5
                  onClick={() => {
                    navigate(`/smartphone`);
                  }}
                >
                  SmartPhones
                </h5>
                <p className="text-secondary">Premium wireless sound</p>
                <h5 className="text-primary">$929.99</h5>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => {
                    navigate(`/smartphone`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            className="col-12 col-sm-6 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 5 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="./laptop.jpg"
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
                onClick={() => {
                  navigate(`/laptop`);
                }}
              />
              <div className="card-body">
                <h5
                  onClick={() => {
                    navigate(`/laptop`);
                  }}
                >
                  Modern Laptop
                </h5>
                <p className="text-secondary">Powerful performance</p>
                <h5 className="text-primary">$799.99</h5>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => {
                    navigate(`/laptop`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div
            className="col-12 col-sm-6 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 5 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="./accessories.webp"
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
                onClick={() => {
                  navigate(`/accessories`);
                }}
              />
              <div className="card-body">
                <h5
                  onClick={() => {
                    navigate(`/accessories`);
                  }}
                >
                  Accessories
                </h5>
                <p className="text-secondary">Smart lifestyle companion</p>
                <h5 className="text-primary">$89.99</h5>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => {
                    navigate(`/accessories`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product 4 */}
          <motion.div
            className="col-12 col-sm-6 col-lg-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 5 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="./menShirt.webp"
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
                onClick={() => {
                  navigate(`/audiopage`);
                }}
              />
              <div className="card-body">
                <h5
                  onClick={() => {
                    navigate(`/audiopage`);
                  }}
                >
                  Clothing Brand Products
                </h5>
                <p className="text-secondary">Immersive Brands experience</p>
                <h5 className="text-primary">$59.99</h5>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => {
                    navigate(`/audiopage`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
