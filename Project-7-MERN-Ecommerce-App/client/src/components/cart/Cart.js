import React, { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import './Cart.css';
import { useParams } from 'react-router-dom';

const Cart = () => {

  const [indData, setIndData] = useState({});
  console.log(indData)

  const { id } = useParams("")

  const getData = async (id) => {
    const res = await fetch(`/product/api2/getProductOne/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let { data } = await res.json();

    setIndData(data);
  }

  useEffect(() => {
    getData(id)
  }, [id])

  return (
    <div className="cart_section">
    {indData && (Object.keys(indData).length>0) &&
      <div className="cart_container">
        <div className="left_cart">
          <img src={indData.url} alt="cart_img" />
          <div className="cart_btn">
            <button className='cart_btn1'>Add to cart</button>
            <button className='cart_btn2'>Buy now</button>
          </div>
        </div>

        <div className="right_cart">
          <h3>{indData.title.shortTitle}</h3>
          <h4>{indData.title.longTitle}</h4>
          <Divider />

          <p className='mrp'>M.R.P. : &#8377;{indData.price.mrp} </p>
          <p>Deal of the Day : <span style={{ color: "#B127" }}>&#8377;{indData.price.cost}</span></p>
          <p>You save: : <span style={{ color: "#B12704" }}>&#8377;{indData.price.mrp-indData.price.cost} ({indData.price.discount})</span></p>

          <div className="discount_box">
            <h5>Discount : <span style={{ color: "#111" }}>{indData.price.discount}</span></h5>
            <h4>Free Delivery :<span style={{ color: "#111", fonWeight: 600 }}>Oct 8 - 21</span>Details</h4>
            <p>Fastest delivery : <span style={{ color: "#111", fonWeight: 600 }}> Tomorrow 11AM</span></p>
          </div>

          <p className="description">
            About the Item : <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}>{indData.description}</span>
          </p>

        </div>
      </div>
  }
    </div>
  )
}

export default Cart;