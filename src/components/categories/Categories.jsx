import React from "react";
import { categories } from "../../data";
import { CategoryItem } from "../categoryItem/CategoryItem";
import "./categories.scss";

export const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};
