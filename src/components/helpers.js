import React from "react";

// helper functions
function displayList(arr, componentName) {
  const list = [];
  for (let item of arr) {
    let listItem;
    if (item.link) {
      listItem = (
        <a
          className={`${componentName}__link`}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </a>
      );
    } else {
      listItem = (
        <span>
          <i className={item.icon}></i> {item.label}
        </span>
      );
    }

    list.push(
      <li
        key={`${componentName}-${item.label}`}
        className={`${componentName}__item`}
        style={{ margin: " auto 0.7rem" }}
      >
        {listItem}
      </li>
    );
  }
  return list;
}

function scrollWithOffset(el) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
}

export { displayList, scrollWithOffset };
