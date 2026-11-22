
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
        <p className="text-secondary">Add a product from the shop to get started.</p>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <h1 className="mb-4">Shopping Cart</h1>

      {cartItems.map((item) => (
        <div className="card mb-3" key={item.id}>
          <div className="card-body d-flex align-items-center gap-3">
            <img
              src={item.thumbnail}
              alt={item.title}
              width="80"
              height="80"
              style={{ objectFit: "contain" }}
            />

            <div className="flex-grow-1">
              <h2 className="h5">{item.title}</h2>
              <p className="mb-0">${item.price}</p>
            </div>

            <button
              className="btn btn-outline-secondary"
              onClick={() => changeQuantity(item.id, -1)}
              aria-label={`Decrease quantity of ${item.title}`}
            >
              −
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={() => changeQuantity(item.id, 1)}
              aria-label={`Increase quantity of ${item.title}`}
            >
              +
            </button>

            <button
              className="btn btn-outline-danger"
              onClick={() =>
                setCartItems((items) => items.filter((product) => product.id !== item.id))
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2 className="h4 text-end">Total: ${total.toFixed(2)}</h2>
    </main>
  );
}

export default Cart;