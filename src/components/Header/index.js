import { addStyles } from "../../utilities/helpers";
import styles from "./styles.module.scss";

const Header = ({ title }) => {
  const header = document.createElement("header");
  header.innerHTML = `<h1 class="${styles["Header-title"]}">${title}</h1>`;
  addStyles(header, "add", styles["Header"]);
  return [header];
};

export default Header;
