const initialState = {
  products: JSON.parse(localStorage.getItem("products") || "[]"),
  carts: JSON.parse(localStorage.getItem("carts") || "[]"),
};

const reducerProducts = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CART":
      const productId = action.payload;
      const product = state.products.find((p: any) => p.id === productId);
      if (!product) {
        return state;
      }

      const updatedCart = [...state.carts, product];

      localStorage.setItem("carts", JSON.stringify(updatedCart));
      return {
        ...state,
        carts: updatedCart,
      };

    default:
      return state;
  }
};

export default reducerProducts;
