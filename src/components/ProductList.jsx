import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355",
  },

  {
    id: 2,
    name: "Aloe Vera",
    price: 15,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },

  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  },

  {
    id: 4,
    name: "Spider Plant",
    price: 18,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },

  {
    id: 5,
    name: "Lavender",
    price: 30,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },

  {
    id: 6,
    name: "Tulsi",
    price: 12,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>

        <div>
          <a href="/">Home</a> |{" "}
          <a href="/products">Plants</a> |{" "}
          <a href="/cart">
            Cart ({totalItems})
          </a>
        </div>
      </nav>

      <h1>Our Plants</h1>

      {["Indoor", "Medicinal", "Flowering"].map(
        (category) => (
          <div key={category}>
            <h2>{category}</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {plants
                .filter(
                  (plant) =>
                    plant.category === category
                )
                .map((plant) => {
                  const added = cartItems.find(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div
                      key={plant.id}
                      style={{
                        border: "1px solid black",
                        padding: "10px",
                        width: "200px",
                      }}
                    >
                      <img
                        src={plant.image}
                        alt={plant.name}
                        width="180"
                        height="150"
                      />

                      <h3>{plant.name}</h3>

                      <p>${plant.price}</p>

                      <button
                        disabled={added}
                        onClick={() =>
                          dispatch(addToCart(plant))
                        }
                      >
                        {added
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ProductList;