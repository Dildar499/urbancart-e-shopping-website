import { useEffect, useState } from "react";

import { motion } from "motion/react";
function AudioPage({addToCart}) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const [smartphones, laptops, tablets] = await Promise.all([
          fetch("https://dummyjson.com/products/category/mens-shirts"),
          fetch("https://dummyjson.com/products/category/womens-dresses"),
          fetch("https://dummyjson.com/products/category/furniture"),
        ]);

        const [menShirts, womanShirts, furniture] = await Promise.all([
          smartphones.json(),
          laptops.json(),
          tablets.json(),
        ]);

        return [
          ...menShirts.products,
          ...womanShirts.products,
          ...furniture.products,
        ];
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    fetchProducts().then((products) => {
      if (isMounted && products) {
        setAllProducts(products);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="container ">
        <div className="container text-center my-5">
          <h2 className="text-primary"> Clothing Store Rare Stuff</h2>
          <p className="text-secondary ">Discover premium tech Clothing Brands Products at UrbanCart. We believe in delivering quality products, reliable service, <br />and building lasting relationships with our customers.</p>
        </div>

        <div className="container my-5">
          <div className="row g-3 g-md-4">
            {allProducts.map((product, index) => (
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

                    <p className="fw-bold text-primary mb-1 text-primary">
                      ${product.price}
                    </p>

                    <p className="text-secondary mb-3">
                      ⭐⭐⭐⭐ {product.rating}
                    </p>

                    <button className="btn btn-primary w-100 mt-auto" onClick={()=>{
                      addToCart(product)
                    }}>
                      Add To Cart
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AudioPage;
