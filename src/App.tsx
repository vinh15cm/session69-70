import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">List Products</h1>
                </div>
                <Products></Products>
              </div>
            </div>
          </div>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h1 className="panel-title">Your Cart</h1>
                </div>
                <Cart></Cart>
              </div>
              <Modal></Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
