import { addStyles } from "../../utilities/helpers";
import styles from "./styles.module.scss";

const handleClick = event => {
  const content = event.target.nextElementSibling;
  content.setAttribute("style", "height: 0");
  addStyles(content, "toggle", styles["AccordionItem-content-active"]);
  if (content.classList.contains(styles["AccordionItem-content-active"])) {
    content.setAttribute("style", `height: ${content.scrollHeight}px`);
  }
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
