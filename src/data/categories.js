import { BiSolidBowlRice } from "react-icons/bi";
import { FaFish, FaIceCream } from "react-icons/fa";
import { GiCakeSlice, GiChickenOven, GiGoat } from "react-icons/gi";
import { MdLocalDrink, MdOutlineRestaurantMenu } from "react-icons/md";

 export const categories = [
    { text: "Menu", icon: <MdOutlineRestaurantMenu />, name: "all" },
    { text: "Chicken", icon: <GiChickenOven />, name: "chicken" },
    { text: "Mutton", icon: <GiGoat />, name: "mutton" },
    { text: "Soft Drinks", icon: <MdLocalDrink />, name: "drink" },
    { text: "Desserts", icon: <GiCakeSlice />, name: "dessert" },
    { text: "Icecreams", icon: <FaIceCream />, name: "ice-cream" },
    { text: "Fish", icon: <FaFish />, name: "fish" },
    { text: "Rice", icon: <BiSolidBowlRice />, name: "rice" },
  ];