import { addStyles } from "../../utilities/helpers";
import styles from "./styles.module.scss";

const handleClick = event => {
  addStyles(
    event.target.nextElementSibling,
    "toggle",
    styles["AccordionItem-content-active"]
  );
};

const AccordionItem = ({ title, content }) => {
  // create title element
  const accordionTitle = document.createElement("dt");
  accordionTitle.innerHTML = title;
  accordionTitle.addEventListener("click", handleClick);
  addStyles(accordionTitle, "add", styles["AccordionItem-title"]);
  // create content element
  const accordionContent = document.createElement("dd");
  accordionContent.innerHTML = `<p>${content}</p>`;
  addStyles(accordionContent, "add", styles["AccordionItem-content"]);

  return [accordionTitle, accordionContent];
};

export default AccordionItem;
