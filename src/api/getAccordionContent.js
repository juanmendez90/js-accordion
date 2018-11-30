export const getAccordionContent = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1/comments?id=1")
    .then(response => response.json())
    .then(result => {
      return result && result.length && result[0].body;
    })
    .catch(error => console.log("Error: ", error));
};
