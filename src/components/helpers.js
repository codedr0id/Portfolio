import React from 'react';

// helper functions
function displayList(arr, componentName) {
  const list = [];
  for (let item of arr) {
    list.push(
      <li key={`${componentName}-${item.label}`} className={`${componentName}__item`}>
        <i className={item.icon}></i> {item.label}</li>
    );
  }
  return list;
}

export { displayList };