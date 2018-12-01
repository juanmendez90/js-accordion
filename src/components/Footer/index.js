import { addStyles } from "../../utilities/helpers";
import { stylesMethods } from "../../constants";
import styles from "./styles.module.scss";

const Footer = ({ text }) => {
  const footer = document.createElement("footer");
  footer.innerHTML = `<p class="${styles["Footer-text"]}">${text}</p>`;
  addStyles(footer, stylesMethods.add, styles["Footer"]);
  return [footer];
};

export default Footer;
