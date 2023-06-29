import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Title from "./Title";
import menu from "../data";
import MenuItem from "./MenuItem";
import Categories from "./Categories";

const UniqueCategory = menu.map((item) => item.category);
const set = new Set(UniqueCategory);
const newItems = ["all", ...set];

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
const Menu = () => {
  const [menus, setMenus] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterHandler = (category) => {
    if (category === "all") {
      setMenus(menu);
      return;
    }
    const newMenuItems = menu.filter((item) => item.category === category);
    setMenus(newMenuItems);
  };
  return (
    <div className="menu-container">
      <Container>
        <Title title="Our Menu" />
        <div className="d-flex tab-item-container">
          <Categories categories={categories} filterHandler={filterHandler} />
        </div>

        <Row>
          {menus.map((menu) => (
            <MenuItem
              title={menu.title}
              image={menu.image}
              category={menu.category}
              description={menu.description}
              price={menu.price}
              key={menu.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
