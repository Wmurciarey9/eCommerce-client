import React, { useEffect, useState } from "react";
import "./cart.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Announcement } from "../../components/announcement/Announcement";

import { Footer } from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import StripeCheckout from "react-stripe-checkout";

export const Cart = () => {
  const KEY =
    "pk_test_51LjYy8E1Q0QsGlpJC8jNZEa2OsyQQxP1bm2sMqIS9pNx5yRQWiqPgKyBeKg24vxZtcqck3kwaEMqozImhGRpBzPL00CuVFIVXL";

  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate.push("/success", { data: res.data });
      } catch {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <div className="cart">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <h1>YOUR CART</h1>
        <div className="top">
          <button className="topButton">CONTINUE SHOPPING</button>
          <span>Shopping Bag(2)</span>
          <span>Your Wishlist</span>
          <button className="topButton" type="filled">
            CHECKOUT NOW
          </button>
        </div>
        <div className="bottom">
          <div className="info">
            {cart.products.map((product) => (
              <div className="product">
                <div className="productDetail">
                  <img src="" alt="" />
                  <div className="details">
                    <div className="productName">
                      <b>Product:</b> {product.title}
                    </div>
                    <div className="productId">
                      <b>ID:</b> {product._id}
                    </div>
                    <div className="productColor">
                      <b>Color:</b> {product.color}
                    </div>
                    <div className="productSize">
                      <b>Size:</b> {product.size}
                    </div>
                  </div>
                </div>
                <div className="priceDetail">
                  <div className="productAmountContainer">
                    <Add />
                    <div className="productAmount">{product.quantity}</div>
                    <Remove />
                  </div>
                  <div className="productPrice">$ {product.price * product.quantity}</div>
                </div>
              </div>
            ))}
            <hr />
          </div>
          <div className="summary">
            <h1 className="summarytittle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <h2>SubTotal</h2>
              <p>$ {cart.total}</p>
            </div>
            <div className="summaryItem">
              <h2>Estimated Shipping</h2>
              <p>$ 5.99</p>
            </div>
            <div className="summaryItem">
              <h2>Shipping Discount</h2>
              <p>$ -5.99</p>
            </div>
            <div className="summaryItem" type="total">
              <h2>Total</h2>
              <p>$ {cart.total}</p>
            </div>
            <StripeCheckout
              name="CLEMN WALLETS"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
