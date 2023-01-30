import React from "react";
import { useRef, useEffect } from "react";

const Menu = (props) => {
  const nameRef = useRef(null);
  const parentNodeClassName = "catalog";
  const classList = props.classes ?? "";
  const key = Math.floor(Math.random() * 100 + 1);
  const select = document.createElement("select");
  select.className = "catalog-menu__select";
  let option;
  useEffect(() => {
    if (nameRef.current.parentElement.className === parentNodeClassName) {
      nameRef.current.insertAdjacentElement("beforeend", select);
    }
  });
  //if (!props.menuItems) return null;
  return (
    <div key={key} ref={nameRef} className={`menu ${classList} ${props.type} `}>
      <nav className={`menu__list ${props.type}__list`}>
        {props.menuItems.map((item, index) => {
          if (index < 6) {
            return (
              <a key={index} href={item.url} className={`menu__item ${props.type}__item`}>
                {item.title}
              </a>
            );
          }
          if (index > 6) {
            option = new Option(item.title);
            select.append(option);
            return true;
          }
        })}
      </nav>
    </div>
  );
};

export default Menu;
