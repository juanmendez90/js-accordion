import Accordion from "../../components/Accordion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { appendToParent, addStyles } from "../../utilities/helpers";
import { accordionItems, headerTitle, author } from "../../constants";
import { getAccordionContent } from "../../api";
import styles from "./styles.module.scss";

const getAjaxSection = async () => {
  const content = await getAccordionContent();
  return { title: "Section Ajax", content };
};

const Home = async () => {
  const ajaxItem = await getAjaxSection();
  const items = [...accordionItems, ajaxItem];
  const accordion = Accordion({ items });
  const header = Header({ title: headerTitle });
  const footer = Footer({ text: author });

  const section = document.createElement("section");
  addStyles(section, "add", styles["Home"]);
  appendToParent(accordion, section);

  return [...header, section, ...footer];
};

export default Home;
