import React, { Fragment, useState } from "react";
import MainSectionOne from "./main-section-one";
import MainShowCase from "./main-showcase";
import "./style.css";
import { MdOutlineRestaurantMenu, MdLocalDrink } from "react-icons/md";
import { GiChickenOven, GiGoat, GiCakeSlice } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import './style.css';

import { FaIceCream, FaFish } from "react-icons/fa";
import { BiSolidBowlRice } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import Biryani from "./assets/biryani.jpg";
import Chicken from "./assets/chicken.jpg";
import Coke from "./assets/coke.jpg";
import CrabSoup from "./assets/crab-soup.jpeg";
import IceCream from "./assets/ice-cream.jpg";
import Jalebi from "./assets/jalebi.jpg";
import Kulfi from "./assets/kulfi.jpg";
import MuttonGhee from "./assets/mutton-ghee.jpg";
import Mutton from "./assets/mutton.jpg";
import Prawn from "./assets/prawn.jpg";
import Sambar from "./assets/sambar.jpg";
import Samosa from "./assets/samosa.jpg";

function Main() {
  const [selectedCategory, changeSelectedCategory] = useState("all");

  const changeSelecCategory = (category) => {
        let preSelected = document.querySelector(`.selected-category`);
       if(preSelected){
        preSelected.classList.remove('selected-category');
       }
        // 
        let toSelect = document.querySelector(`.dish-category-${category}`);
        toSelect.classList.add('selected-category');
  }

  const categories = [
    { text: "Menu", icon: <MdOutlineRestaurantMenu />, name: "all" },
    { text: "Chicken", icon: <GiChickenOven />, name: "chicken" },
    { text: "Mutton", icon: <GiGoat />, name: "mutton" },
    { text: "Soft Drinks", icon: <MdLocalDrink />, name: "drink" },
    { text: "Desserts", icon: <GiCakeSlice />, name: "dessert" },
    { text: "Icecreams", icon: <FaIceCream />, name: "ice-cream" },
    { text: "Fish", icon: <FaFish />, name: "fish" },
    { text: "Rice", icon: <BiSolidBowlRice />, name: "rice" },
  ];

  const items = [
    {
      img: Biryani,
      itemName: "Biryani",
      price: "320",
      description: "hot and spicy!!!",
      category: ["chicken", "all"],
    },
    {
      img: Chicken,
      itemName: "Tandoori",
      price: "360",
      description: "Hot ghosh...",
      category: ["chicken", "all"],
    },
    {
      img: Coke,
      itemName: "Coke",
      price: "65",
      description: "chill",
      category: ["drink", "all"],
    },
    {
      img: CrabSoup,
      itemName: "Crab Soup",
      price: "160",
      description: "fresh river crab",
      category: ["fish", "all"],
    },
    {
      img: IceCream,
      itemName: "Ice Cream",
      price: "100",
      description: "Cold and sweet ice creams",
      category: ["ice-cream", "all"],
    },
    {
      img: Jalebi,
      itemName: "Jalebi",
      price: "120",
      description: "traditional sweets",
      category: ["dessert", "all"],
    },
    {
      img: Kulfi,
      itemName: "kulfi",
      price: "65",
      description: "cool and tasty kulfi",
      category: ["ice-cream", "all"],
    },
    {
      img: MuttonGhee,
      itemName: "muttonGhee",
      price: "65",
      description: "cool and tasty kulfi",
      category: ["mutton", "all"],
    },

    {
      img: Mutton,
      itemName: "Mutton",
      price: "250",
      description: "Customer favourite",
      category: ["mutton", "all"],
    },
    {
      img: Prawn,
      itemName: "Prawn",
      price: "180",
      description: "Spicy",
      category: ["fish", "all"],
    },
    {
      img: Sambar,
      itemName: "Sambar",
      price: "180",
      description: "chef speciality",
      category: ["rice", "all"],
    },
    {
      img: Samosa,
      itemName: "Mutton Samosa",
      price: "180",
      description: "Addiction guarantee",
      category: ["mutton", "all"],
    },
  ];

  return (
    <Fragment>
      <main id="website-main">
        <MainSectionOne />
        <MainShowCase />
      </main>
      <h2 className="our-hot-dishes">Our Hot Dishes</h2>
      <div className="border-3p-orange"></div>
      <div className="categories">
        {categories.map((category) => {
          return (
            <div
              onClick={() => {
                changeSelectedCategory(category.name);
                changeSelecCategory(category.name);
              }}
              className={`dish-category dish-cateogy-menu dish-category-${category.name}`}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-text">{category.text}</span>
            </div>
          );
        })}
      </div>
      <div>
        <div id="dish-items">
          {items.map((item) => {
            if (item.category.includes(selectedCategory)) {
              return (
                <div className={`dish-item dish-item-${item.itemName}`}>
                  <div className="dish-item-img-and-cart">
                    <img src={item.img} />
                    <button className="dish-item-cart">
                      <FaCartArrowDown />
                    </button>
                  </div>
                  <div className="item-description-wrapper">
                    <span className="item-name">{item.itemName}</span>
                    <span className="item-description">
                      {" "}
                      {item.description}
                    </span>
                    <span className="item-price">
                      {" "}
                      <strong>Rs.</strong> {item.price}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Main;
