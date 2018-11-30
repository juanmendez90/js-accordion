export const appendToParent = (items, parent) => {
  for (let i = 0; i < items.length; i += 1) {
    parent.appendChild(items[i]);
  }
};
