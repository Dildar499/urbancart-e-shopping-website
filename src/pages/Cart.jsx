import './Cart.css';


function Cart({ cartItems, setCartItems }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function changeQuantity(id, amount) {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="container py-5">
        <h1>Your cart is empty</h1>
        <p className="text-secondary">
          Add a product from the shop to get started.
        </p>
      </main>
    );
  }

  return (
    <main className="container py-4 py-md-5">
      <h1 className="mb-4">Shopping Cart</h1>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          {cartItems.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body">
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="cart-item-image"
                  />

                  <div className="flex-grow-1">
                    <h2 className="h5 mb-1">{item.title}</h2>
                    <p className="mb-0">${item.price.toFixed(2)} each</p>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => changeQuantity(item.id, -1)}
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      −
                    </button>

                    <span className="cart-item-quantity">{item.quantity}</span>

                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => changeQuantity(item.id, 1)}
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() =>
                      setCartItems((items) =>
                        items.filter((product) => product.id !== item.id)
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-4">
          <section className="card">
            <div className="card-body">
              <h2 className="h5">Order summary</h2>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-100 mt-3" type="button">
                Continue to checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Cart;