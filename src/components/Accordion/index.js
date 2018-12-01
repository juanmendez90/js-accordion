import AccordionItem from "../AccordionItem";
import { addStyles, appendToParent } from "../../utilities/helpers";
import { stylesMethods } from "../../constants";
import styles from "./styles.module.scss";

const renderItems = ({ title, content }) => AccordionItem({ title, content });

const Accordion = ({ items }) => {
  const container = document.createElement("dl");
  addStyles(container, stylesMethods.add, styles.Accordion);
  let elements = [];
  for (let i = 0; i < items.length; i += 1) {
    elements = renderItems(items[i]);
    appendToParent(elements, container);
  }

  return [container];
};

export default Accordion;
