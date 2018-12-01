export const get = url =>
  fetch(`${process.env.API_URL}${url}`)
    .then(response => response.json())
    .catch(error => console.log("Error api: ", error));
