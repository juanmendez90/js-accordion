import { get } from "./api";

export const getAccordionContent = () => {
  return get("/posts/1/comments?id=1")
    .then(result => result && result.length && result[0].body)
    .catch(error => console.log("Error: ", error));
};
