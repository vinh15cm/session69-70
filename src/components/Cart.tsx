import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const stateCart: any = useSelector((state: any) => {
    return state.reducerCart;
  });
  return (
    <>
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "4%" }}>STT</th>
              <th>Name</th>
              <th style={{ width: "15%" }}>Price</th>
              <th style={{ width: "4%" }}>Quantity</th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody id="my-cart-body">
            {stateCart.map((item: any, index: any) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.productName}</td>
                  <td>{item.price} USD</td>
                  <td>
                    <input
                      name="cart-item-quantity-1"
                      type="number"
                      defaultValue={15}
                    />
                  </td>
                  <td>
                    <a
                      className="label label-info update-cart-item"
                      data-product=""
                    >
                      Update
                    </a>
                    <a
                      className="label label-danger delete-cart-item"
                      data-product=""
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot id="my-cart-footer">
            {stateCart.length > 0 ? (
              <tr>
                <td colSpan={4}>
                  There are <b>{stateCart.length}</b> items in your shopping
                  cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                  630 USD
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={6}>
                  <b>Empty product in your cart</b>
                </td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </>
  );
}
