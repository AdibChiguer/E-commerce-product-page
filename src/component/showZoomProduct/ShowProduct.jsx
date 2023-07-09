import React from 'react'
import img1mini from '../../images/image-product-1-thumbnail.jpg';
import img2mini from '../../images/image-product-2-thumbnail.jpg';
import img3mini from '../../images/image-product-3-thumbnail.jpg';
import img4mini from '../../images/image-product-4-thumbnail.jpg';
import img1 from '../../images/image-product-1.jpg';
import img2 from '../../images/image-product-2.jpg';
import img3 from '../../images/image-product-3.jpg';
import img4 from '../../images/image-product-4.jpg';
import { useState } from 'react';
import './showProduct.css'

const ShowProduct = ({ onshow }) => {

  const [photoInd, setPhotoInd] = useState(0);
  const photoCollection = [
    { img: img1, indx: 1 , miniImg : img1mini, },
    { img: img2, indx: 2 , miniImg : img2mini, },
    { img: img3, indx: 3 , miniImg : img3mini, },
    { img: img4, indx: 4 , miniImg : img4mini, },
  ];

  return (
    <div className="showProduct-container" >
      <div className="blackbox" onClick={() => { onshow() }}></div>
      <div className="main-photo">
        <div className="cl-btn" onClick={() => { onshow() }}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
        </div>
        <div className="pr-btn" onClick={() => {photoInd >= 1 ? setPhotoInd(photoInd - 1) : setPhotoInd(3)}}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
        </div>
        <img src={photoCollection[photoInd].img} alt="" />
        <div className="ne-btn" onClick={() => {photoInd < 3 ? setPhotoInd(photoInd + 1) : setPhotoInd(0)}}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
        </div>
      </div>
      <div className="mini-photo">
        {photoCollection.map((photo, index) => (
          <div className="mini-img_container" key={index} style={{outline: index === photoInd ? " 3px solid var(--Orange)" : "none" }}>
            <img
              key={index}
              src={photoCollection[index].miniImg}
              alt=""
              style={{ opacity: index === photoInd ? 0.6 : 1 }}
              onClick={() => setPhotoInd(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowProduct;