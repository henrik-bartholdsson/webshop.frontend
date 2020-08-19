import React, { useState } from "react";
import CategoryItem from "./categoryItem";
import "./Categories.css";

function CategoriesFactory() {
  const fetchItems = async () => {
    const data = await fetch("https://localhost:44324/api/v1/categories");
    const result = await data.json();

    setState(result);
    return result;
  };

  const [categories, setState] = useState(() => {
    fetchItems();
  });

  return (
    <div className="SideMenuLeft">
      <CategoryItem categoryItems={categories} />
    </div>
  );
}

export default CategoriesFactory;
