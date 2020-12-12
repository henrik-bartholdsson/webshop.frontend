import React, { useState } from "react";
import CategoryItem from "./categoryItem";
import "./categories.css";

function CategoriesFactory() {
  const fetchItems = async () => {
    const data = await fetch(global.config.apiUrl + "/categories");
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
