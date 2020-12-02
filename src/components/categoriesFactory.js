import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import "./Categories.css";

function CategoriesFactory() {
  const apiUrl = global.config.apiBaseUrl + ":" + global.config.apiPort + "/api/" + global.config.apiVersion
  const fetchItems = async () => {
    const data = await fetch(apiUrl + "/categories");
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
