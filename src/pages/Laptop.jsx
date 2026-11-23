import { useEffect, useState } from "react";
import { motion } from "motion/react";

function Laptop({addToCart}){
    const [laptops , setLaptops] = useState([]);

    useEffect(()=>{
        const getLaptop = async ()=>{
            try{
                const response = await fetch("https://dummyjson.com/products/category/laptops")
                 if(!response.ok){
                    throw new Error("Product Not Found");
                 }
                 const data = await response.json();
                 setLaptops(data.products)
            }
            catch(err){
                console.log(err.message);
            }
        }
        getLaptop();
    },[])
    return(
        <>
        <div className="container">
             <div className="container text-center my-5">
                <h2 className="text-primary">Laptops Store</h2>
                <p className="text-secondary ">Discover premium tech Laptops at UrbanCart. We believe in delivering quality products, reliable service, <br />and building lasting relationships with our customers.</p>
            </div>

             <div className="container my-5">
          <div className="row g-3 g-md-4">
            {laptops.map((product, index) => (
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
    )
}

export default Laptop;