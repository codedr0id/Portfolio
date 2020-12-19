import React from 'react';

// helper functions
function displayList(arr, componentName) {
  const list = [];
  for (let item of arr) {
    let listItem;
    if (item.link) {
      listItem = (
        <a className={`${componentName}__link`} href={item.link} target="_blank">
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
      <li key={`${componentName}-${item.label}`} className={`${componentName}__item`}>
        {listItem}
      </li>
    );
  }
  return list;
}

export { displayList };