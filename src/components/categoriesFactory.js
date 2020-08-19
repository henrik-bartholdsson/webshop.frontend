import React, { useState } from "react";
import CategoryItem from "./categoryItem";

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

  return <CategoryItem categoryItems={categories} />;
}

export default CategoriesFactory;
