import data from "./../../data/data";
import React from "react";
import Menu from "./../Menu/Menu.jsx";
import CatalogItem from "./../CatalogItem/CatalogItem.jsx";

const Catalog = () => {
  return (
    <React.Fragment>
      <h2 className="catalog__title">Наше меню</h2>
      <Menu type="catalog-menu" menuItems={data.catalogMenuItems} />
      <div className="catalog__container">
        {data.products.map((product, i) => {
          return <CatalogItem key={i} name={product.title} price={product.price} image={product.imageUrl} label={product.label} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Catalog;
