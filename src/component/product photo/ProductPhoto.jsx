import React, { useState } from 'react';
import './productPhoto.css';
import data from '../../data/data.json'

const ProductPhoto = ({ onshow }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div className="ProductPhoto_section-container">
      <div className="main_Product-photo">
        <div className="pr-btn-Product" onClick={() => {photoIndex >= 1 ? setPhotoIndex(photoIndex - 1) : setPhotoIndex(3)}}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
        </div>
        <img src={data[0].photoCollection[photoIndex].img} alt="" onClick={window.innerWidth < 1200 ? null : () => onshow()} />
        <div className="ne-btn-Product" onClick={() => {photoIndex < 3 ? setPhotoIndex(photoIndex + 1) : setPhotoIndex(0)}}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
        </div>
      </div>
      <div className="thumbnail_product-photo">
        {data[0].photoCollection.map((photo, index) => (
          <div className="mini_img_container" key={index} style={{outline: index === photoIndex ? " 3px solid var(--Orange)" : "none" }}>
            <img
              key={index}
              src={data[0].photoCollection[index].miniImg}
              alt=""
              style={{ opacity: index === photoIndex ? 0.6 : 1 }}
              onClick={() => setPhotoIndex(index)}
            />
          </div>
        ))}     

      </div>
    </div>
  );
};

export default ProductPhoto;
