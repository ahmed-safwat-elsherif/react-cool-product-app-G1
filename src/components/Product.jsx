import { Link } from "react-router-dom";

export function Product(props) {
  // product component should have 2 modes:
  // 1- for shopping cart.
  // 2- for product listing.
  const {
    mode,
    prdct,
    onIncrementProductCount,
    onDecrementProductCount,
    onDeleteProduct,
    onAddToCart,
  } = props;

  return (
    <div
      className="card"
      style={{
        maxWidth: "18rem",
        minWidth: "12rem",
      }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">
            <Link to={`/product/${prdct.id}`}>{prdct.name}</Link>
          </h5>
          <p className="card-text">
            <span className="badge bg-primary">
              {mode === "cart" ? prdct.count : `$ ${prdct.price}`}
            </span>
          </p>
        </div>
        <hr />
        <div className="d-flex gap-2">
          {mode === "cart" ? (
            <>
              <button
                className="btn btn-success flex-fill"
                onClick={() => onIncrementProductCount(prdct)}
              >
                [+]
              </button>
              <button
                className="btn btn-warning flex-fill"
                onClick={() => onDecrementProductCount(prdct)}
              >
                [-]
              </button>
              <button
                className="btn btn-danger flex-fill"
                onClick={() => onDeleteProduct(prdct)}
              >
                [X]
              </button>
            </>
          ) : (
            <button
              className={`btn flex-fill btn-${
                prdct.count > 0 ? "warning" : "info"
              }`}
              style={{ transition: "0.3s background-color ease-out" }}
              onClick={() => onAddToCart(prdct)}
            >
              {prdct.count > 0 ? "Remove from cart" : "Add to cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
