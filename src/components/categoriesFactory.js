import React, { useState } from "react";
import CategoryItem from "./categoryItem";
import "./categories.css";

function CategoriesFactory() {
  const fetchItems = async () => {
    await fetch(global.config.apiUrl + "/categories")
      .then(resp => resp.json())
      .then(result => {
        setState(result)
      });

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
