import { addStyles } from "../../utilities/helpers";
import { stylesMethods } from "../../constants";
import styles from "./styles.module.scss";

const handleClick = event => {
  const container = event.target;
  const content = container.nextElementSibling;
  content.setAttribute("style", "height: 0");
  addStyles(
    container,
    stylesMethods.toggle,
    styles["AccordionItem-title-active"]
  );
  if (container.classList.contains(styles["AccordionItem-title-active"])) {
    content.setAttribute("style", `height: ${content.scrollHeight}px`);
  }
};

const AccordionItem = ({ title, content }) => {
  // create title element
  const accordionTitle = document.createElement("dt");
  accordionTitle.innerHTML = title;
  accordionTitle.addEventListener("click", handleClick);
  addStyles(accordionTitle, stylesMethods.add, styles["AccordionItem-title"]);
  // create content element
  const accordionContent = document.createElement("dd");
  accordionContent.innerHTML = `<p>${content}</p>`;
  addStyles(
    accordionContent,
    stylesMethods.add,
    styles["AccordionItem-content"]
  );

  return [accordionTitle, accordionContent];
};

export default AccordionItem;
