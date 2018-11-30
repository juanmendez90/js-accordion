import AccordionItem from "../AccordionItem";
import { addStyles } from "../../utilities/helpers";
import styles from "./styles.module.scss";

const renderItems = ({ title, content }) => AccordionItem({ title, content });

const Accordion = ({ items }) => {
  const container = document.createElement("dl");
  addStyles(container, "add", styles.Accordion);
  let elements = [];
  for (let i = 0; i < items.length; i += 1) {
    elements = renderItems(items[i]);
    for (let j = 0; j < elements.length; j += 1) {
      container.appendChild(elements[j]);
    }
  }

  asdasda;
  return container;
};

export default Accordion;
