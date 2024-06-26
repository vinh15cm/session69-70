import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  // const products = [
  //   {
  //     id: 1,
  //     productName: "Pizza",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
  //     image: "/src/assets/images/pizza.jpg",
  //     price: 30,
  //     stock: 10,
  //   },
  //   {
  //     id: 2,
  //     productName: "Hamburger",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
  //     image: "/src/assets/images/hamburger.jpg",
  //     price: 15,
  //     stock: 10,
  //   },
  //   {
  //     id: 3,
  //     productName: "Bread",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
  //     image: "/src/assets/images/bread.jpg",
  //     price: 20,
  //     stock: 10,
  //   },
  //   {
  //     id: 4,
  //     productName: "Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
  //     image: "/src/assets/images/cake.jpg",
  //     price: 10,
  //     stock: 10,
  //   },
  // ];

  // localStorage.setItem("products", JSON.stringify(products));

  const stateProducts = useSelector(
    (state: any) => state.reducerProducts.products
  );
  const dispatch = useDispatch();

  const handleAddCart = (id: number) => {
    dispatch({
      type: "ADD_CART",
      payload: id,
    });
  };

  return (
    <div className="panel-body" id="list-product">
      {stateProducts.map((product: any, index: any) => (
        <div key={index}>
          <div className="media product">
            <div className="media-left">
              <a href="#">
                <img
                  className="media-object"
                  src={product.image}
                  alt={product.productName}
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{product.productName}</h4>
              <p>{product.description}</p>
              <input name="quantity-product-1" type="number" defaultValue={1} />
              <a
                data-product={1}
                className="price"
                onClick={() => handleAddCart(product.id)}
              >
                {product.price} USD
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
