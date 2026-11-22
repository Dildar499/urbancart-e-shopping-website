import "./public/Wishlist.css";

const wishlistItems = [
  {
    id: 1,
    name: "SmartPhone",
    price: 89.99,
    image: "./public/smartphone.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "Laptop",
    price: 499.99,
    image: "/public/laptop.jpg",
    inStock: false,
  },
];

export default function Wishlist() {
  return (
    <main className="container py-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-end gap-3 mb-4">
        <div>
          <p className="text-primary fw-semibold mb-2">YOUR SAVED ITEMS</p>
          <h1 className="fw-bold mb-1">My Wishlist</h1>
          <p className="text-secondary mb-0">
            Keep the things you love close at hand.
          </p>
        </div>
        <span className="badge text-bg-primary rounded-pill px-3 py-2">
          {wishlistItems.length} items
        </span>
      </div>

      {wishlistItems.length === 0 ? (
        <section className="text-center py-5">
          <h2 className="h4">Your wishlist is empty</h2>
          <p className="text-secondary">
            Save products you like and they’ll appear here.
          </p>
          <a className="btn btn-primary" href="/shop">
            Explore products
          </a>
        </section>
      ) : (
        <div className="row g-4">
          {wishlistItems.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
              <article className="card wishlist-card h-100">
                <img
                  src={item.image}
                  className="card-img-top wishlist-card__image"
                  alt={item.name}
                />

                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between gap-3">
                    <h2 className="h5 card-title">{item.name}</h2>
                    <button
                      className="btn btn-sm wishlist-card__remove"
                      type="button"
                      aria-label={`Remove ${item.name} from wishlist`}
                    >
                      Remove
                    </button>
                  </div>

                  <p className="fw-bold fs-5 mb-2 text-primary">${item.price.toFixed(2)}</p>

                  <p
                    className={`small ${
                      item.inStock ? "text-success" : "text-danger"
                    }`}
                  >
                    {item.inStock ? "In stock" : "Out of stock"}
                  </p>

                  <button
                    className="btn btn-primary mt-auto"
                    type="button"
                    disabled={!item.inStock}
                  >
                    {item.inStock ? "Move to cart" : "Unavailable"}
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}