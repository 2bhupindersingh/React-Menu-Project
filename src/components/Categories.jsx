import React from "react";
import Button from "react-bootstrap/Button";

const Categories = ({ categories, filterHandler }) => {
  return (
    <>
      {categories.map((category) => (
        <Button className="me-2" variant="primary" key={category} onClick={()=> filterHandler(category)}>{category}</Button>
      ))}
    </>
  );
};

export default Categories;
