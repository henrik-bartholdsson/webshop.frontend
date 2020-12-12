import React from "react";
import { Link } from "react-router-dom";
import "./categoryItem.css";

function CategoryItem(props) {
  return (
    <div>
      {props.categoryItems ? (
        <div>
          {props.categoryItems.map((category) => (
            <div key={category.id}>
              <div>
                {category.subcategories.length ? (
                  <div>
                    <br />
                    {category.title}
                    {category.subcategories.map((subcat) => (
                      <Link to={"/product/" + subcat.id} key={subcat.id}>
                        <li key={subcat.id} style={{ marginLeft: "20px" }}>
                          {subcat.title}
                        </li>
                      </Link>
                    ))}
                  </div>
                ) : (
                    <div>
                      <Link to={"/product/" + category.id}>
                        <li style={{ marginLeft: "20px" }}>{category.title}</li>
                      </Link>
                    </div>
                  )}
              </div>
              {category.subCategories ? (
                <CategoryItem categoryItems={category.subcategories} />
              ) : (
                  <div></div>
                )}
            </div>
          ))}
        </div>
      ) : (
          <div>No categories</div>
        )}
    </div>
  );
}

export default CategoryItem;
