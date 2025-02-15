import React, { useCallback, useMemo, useState } from "react";
import "./style.css";
import { FaCartArrowDown } from "react-icons/fa";
import "./style.css";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MenuCard from "./components/MenuCard";

function Main() {
  const [selectedCategory, changeSelectedCategory] = useState("all");



  const filteredItems = useMemo(()=>{
    return items.filter((item)=> item.category.includes(selectedCategory));
  },[items, selectedCategory])

  const changeSelecCategory = (category) => {
    let preSelected = document.querySelector(`.selected-category`);
    if (preSelected) {
      preSelected.classList.remove("selected-category");
    }
    //
    let toSelect = document.querySelector(`.dish-category-${category}`);
    toSelect.classList.add("selected-category");
  };


  const handleCategoryClick = useCallback((categoryName) => {
    changeSelecCategory(categoryName);
    changeSelectedCategory(categoryName);
  },[changeSelecCategory, changeSelectedCategory])

  return (
    <div className="menu-wrapper">
      <h2 className="our-hot-dishes">Our Hot Dishes</h2>
      <div className="border-3p-orange"></div>
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <div
              key={`${category.name}-${index}`}
              onClick={() => {
                handleCategoryClick(category.name);
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
          {filteredItems.map((item) => {
              return (
                <MenuCard
              key={`${item.itemName}`}
              name={item.itemName}
              img={item.img}
              description={item.description}
              price={item.price}              
                />
              );
            
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
