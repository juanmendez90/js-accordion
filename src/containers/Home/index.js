import Accordion from "../../components/Accordion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { appendToParent, addStyles } from "../../utilities/helpers";
import { accordionItems } from "../../constants";
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
  const header = Header({ title: "VanilaJS Accordion" });
  const footer = Footer({ text: "By Juan Mendez" });

  const section = document.createElement("section");
  addStyles(section, "add", styles["Home"]);

  const content = document.createElement("div");
  addStyles(content, "add", styles["Home-content"]);

  appendToParent(accordion, content);
  appendToParent([content], section);

  return [...header, section, ...footer];
};

export default Home;
