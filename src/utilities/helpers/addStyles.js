export const addStyles = (htmlNode, method, ...params) => {
  htmlNode.classList[method](...params);
};
