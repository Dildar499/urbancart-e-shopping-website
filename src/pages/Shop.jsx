import { useEffect, useState } from "react";
import "./Shop.css";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faShieldHalved,
  faHeadset,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Shop({ search = "", setSearch, addToCart }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const [
          smartphones,
          laptops,
          tablets,
          menShirt,
          womanShirts,
          furniture,
        ] = await Promise.all([
          fetch("https://dummyjson.com/products/category/smartphones?limit=8"),
          fetch("https://dummyjson.com/products/category/laptops?limit=10"),
          fetch("https://dummyjson.com/products/category/tablets?limit=10"),
          fetch("https://dummyjson.com/products/category/mens-shirts?limit=10"),
          fetch(
            "https://dummyjson.com/products/category/womens-dresses?limit=15",
          ),
          fetch("https://dummyjson.com/products/category/furniture?limit=10"),
        ]);

        const smartphoneData = await smartphones.json();
        const laptopData = await laptops.json();
        const tabletData = await tablets.json();
        const menShirtData = await menShirt.json();
        const womanShirtsData = await womanShirts.json();
        const furnitureData = await furniture.json();

        const allProducts = [
          ...menShirtData.products,
          ...womanShirtsData.products,
          ...furnitureData.products,
          ...smartphoneData.products,
          ...laptopData.products,
          ...tabletData.products,
        ];

        setProducts(allProducts);
        
      } catch (err) {
        console.log(err.message);
      }
    };

    getUser();
  }, []);

  const query = search.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.category}`.toLowerCase().includes(query),
  );

  return (
    <>
      {/* Announcement Bar */}
      <div className="container-fluid bg-primary text-center py-4">
        <p className="text-light mb-0">
          Free delivery on orders over Rs. 0,000 · Cash on delivery available
        </p>
      </div>

      {/* Hero Section */}
      <div className="container shop-hero">
        <div className="row align-items-center gy-4">
          {/* Hero Content */}
          <div className="col-12 col-md-7 col-lg-6">
            <div className="hero-content">
              <h5 className="fw-semibold fs-3 text-primary mb-3">
                New Arrival
              </h5>

              <h1 className="fw-bold mb-3">
                Arrival of New Products{" "}
                <span className="text-primary">This Year</span>
              </h1>

              <p className="text-dark fs-5 mb-4">
                UrbanCart offers premium tech accessories and gadgets at
                affordable prices, with quality products, fast delivery, and a
                seamless shopping experience.
              </p>

              {/* Buttons */}
              <div className="hero-buttons d-flex flex-column flex-sm-row gap-3">
                <button
                  className="btn btn-outline-primary px-4 py-2"
                  onClick={() => {
                    navigate("/shop");
                  }}
                >
                  Shop Now
                </button>

                <button
                  className="btn btn-outline-secondary px-4 py-2"
                  onClick={() => {
                    navigate("/shop");
                  }}
                >
                  Our Products
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="col-12 col-md-5 col-lg-6">
            <div className="image-div">
              <img
                src="/hero.jpg"
                alt="UrbanCart new product collection"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-5">
        <h1>Our Products</h1>
        <p className="text-secondary">Explore our latest technology products</p>
      </div>

      {/* Search and Sorting */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="d-flex flex-column flex-sm-row innnn align-items-sm-center gap-2 gap-sm-3">
            <label
              htmlFor="category-search"
              className="form-label mb-0 flex-shrink-0 text-dark fs-4 fw-bold"
            >
              Product Category:
            </label>

            <input
              id="category-search"
              type="search"
              className="form-control py-2"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-3 g-md-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
                key={product.id}
              >
                <motion.div
                  className="card h-100 shadow-sm product-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 5 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0,
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="product-img">
                    <img
                      src={product.thumbnail}
                      className="card-img-top p-3"
                      alt={product.title}
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h6 className="product-title">{product.title}</h6>

                    <p className="fw-bold mb-1 text-primary">
                      ${product.price}
                    </p>

                    <p className="text-secondary mb-3">
                      ⭐⭐⭐⭐ {product.rating}
                    </p>

                    <button
                      className="btn btn-primary w-100 mt-auto"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </motion.div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-secondary mb-0">
                No products found for “{search}”.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="container my-5">
        <div className="content p-3 p-md-4 p-lg-5">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-4">
            <div className="content-Area">
              <p className="text-info fw-semibold">LIMITED TIME</p>

              <h1 className="fw-bold text-light display-5">
                Sale headline, up to 30% off
              </h1>

              <p className="text-secondary fw-semibold mb-0">
                Up to 30% OFF on selected laptops – Limited-time offer ends
                November 30, 2026!
              </p>
            </div>

            <div className="button flex-shrink-0">
              <button className="btn btn-light fw-semibold px-4 py-2">
                Shop the Sale
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row gy-4 gx-3">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card1 h-100 shadow-sm border-0">
              <div className="card-body d-flex gap-3 align-items-center">
                <FontAwesomeIcon icon={faTruckFast} size="3x" color="#2563eb" />
                <div>
                  <h5 className="fw-bold">Fast Delivery</h5>
                  <p className="mb-0 text-secondary">
                    Delivered to your door in 10-days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card1 h-100 shadow-sm border-0">
              <div className="card-body d-flex gap-3 align-items-center">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  size="3x"
                  color="#2563eb"
                />
                <div>
                  <h5 className="fw-bold">Cash On Delivery</h5>
                  <p className="mb-0 text-secondary">
                    Pay when your order arrives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card1 h-100 shadow-sm border-0">
              <div className="card-body d-flex gap-3 align-items-center">
                <FontAwesomeIcon icon={faHeadset} size="3x" color="#2563eb" />
                <div>
                  <h5 className="fw-bold">Custom Support</h5>
                  <p className="mb-0 text-secondary">
                    Chat or call us anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card1 h-100 shadow-sm border-0">
              <div className="card-body d-flex gap-3 align-items-center">
                <FontAwesomeIcon
                  icon={faArrowRotateLeft}
                  size="3x"
                  color="#2563eb"
                />
                <div>
                  <h5 className="fw-bold">Easy Returns</h5>
                  <p className="mb-0 text-secondary">10-day return policy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container newsLetter my-5">
        <section className="newsletter-section">
          <div className="container">
            <motion.div
              className="row align-items-center gy-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Newsletter Content */}
              <motion.div className="col-12 col-lg-6">
                <div className="newsletter-content text-center text-lg-start">
                  <h1 className="text-info">Get My Newsletter</h1>
                  <p className="text-light">
                    Get latest news, tips and trics in your inbox
                  </p>
                </div>
              </motion.div>

              {/* Email Input */}
              <motion.div className="col-12 col-lg-6">
                <div className="textContent position-relative p-3 rounded-4 overflow-hidden">
                  <input type="email" placeholder="Your email here" />

                  <button>Send Now</button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Shop;
