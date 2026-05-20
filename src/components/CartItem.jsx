import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>

        <div>
          <a href="/">Home</a> |{" "}
          <a href="/products">Plants</a> |{" "}
          <a href="/cart">Cart</a>
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${totalAmount}</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Total:
            ${item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <span> {item.quantity} </span>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <br />
      <br />

      <a href="/products">
        <button>Continue Shopping</button>
      </a>
    </div>
  );
}

export default CartItem;