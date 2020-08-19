import React from "react";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  return (
    <div>
      {props.categoryItems ? (
        <div>
          {props.categoryItems.map((category) => (
            <div key={category.id}>
              <div>
                {category.subCategories.length ? (
                  <div>{category.title}</div>
                ) : (
                  <div>
                    <Link to={"/product/" + category.id}>
                      <li style={{ marginLeft: "20px" }}>{category.title}</li>
                    </Link>
                  </div>
                )}
              </div>
              {category.subCategories ? (
                <CategoryItem categoryItems={category.subCategories} />
              ) : (
                <div>--</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>Nope</div>
      )}
    </div>
  );
}

export default CategoryItem;
