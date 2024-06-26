const initialCart = JSON.parse(localStorage.getItem("carts") || "[]");
const reducerCart = (state = initialCart, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerCart;
