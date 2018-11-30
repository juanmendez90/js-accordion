import { addStyles } from "../../utilities/helpers";
import styles from "./styles.module.scss";

const Footer = ({ text }) => {
  const footer = document.createElement("footer");
  footer.innerHTML = `<p class="${styles["Footer-text"]}">${text}</p>`;
  addStyles(footer, "add", styles["Footer"]);
  return [footer];
};

export default Footer;
