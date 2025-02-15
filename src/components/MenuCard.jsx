import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MenuCard({name, img, description, price}) {
  return (
    <div
      className={`dish-item dish-item-${name}`}
    >
      <div className="dish-item-img-and-cart">
        <LazyLoadImage src={img} alt={name} effect="blur" width={'100%'}/>
        <button className="dish-item-cart">
          <FaCartArrowDown />
        </button>
      </div>
      <div className="item-description-wrapper">
        <span className="item-name">{name}</span>
        <span className="item-description"> {description}</span>
        <span className="item-price">
          {" "}
          <strong>Rs.</strong> {price}
        </span>
      </div>
    </div>
  );
}

export default MenuCard;
