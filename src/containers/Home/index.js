import Accordion from "../../components/Accordion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { appendToParent, addStyles } from "../../utilities/helpers";
import styles from "./styles.module.scss";

const items = [
  {
    title: "Test",
    content: "Bacon"
  },
  {
    title: "Bacon",
    content: "test <br /><br /> <br /> <br />  test"
  }
];

const Home = () => {
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
