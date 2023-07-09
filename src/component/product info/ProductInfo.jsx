import React, { useEffect, useState } from 'react';
import './Productinfo.css';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';
import { useShoppingCart } from '../../context/ShoppingCartProvider';
import data from '../../data/data.json';


const ProductInfo = () => {
  const [itemsCount  , setItemsCount] = useState(0);
  const { addToCart } = useShoppingCart();

  useEffect(()=> {
    setItemsCount(0)
  } , [addToCart])

  return (
    <div className='Product_info-container'>
      <div className="product-info-head">
        <p>sneaker company</p>
        <h1>Fall Limited Edition Sneakers</h1>
      </div>
      <div className="product-info-body">
        <p>these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.</p>
        <div className="pice_container">
          <h2>$125.00 <span>50%</span></h2>
          <p id='discount'>$250.00</p>
        </div>
      </div>
      <div className="product-info-inputs" >
        <div className="inputbox">
          <button className='decrement' onClick={() => {
            itemsCount === 0 ? setItemsCount(0) : setItemsCount(itemsCount-1)
            }}>
            <img src={minus} alt="" />
          </button>
          <input type="number" min={0}  value={ itemsCount >= 0 ? itemsCount : 0} readOnly/>
          <button className='increment' onClick={() => {setItemsCount(itemsCount+1)}}>
            <img src={plus} alt="" />
          </button>
        </div>
        <button className='addCart' 
          onClick={() =>{ 
            itemsCount !== 0 ? 
            addToCart(data[0].id , itemsCount) && setItemsCount(0)
            : alert('please selecte at leste 1 item')
          }}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default ProductInfo