import React, { useState } from "react";
import Filter from "./Filter";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // const filterCategoryChange = () => {
  //   handleCategoryChange()
  // }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <Filter handleCategoryChange={handleCategoryChange} itemsToDisplay={itemsToDisplay} />
  );
}

export default ShoppingList;
