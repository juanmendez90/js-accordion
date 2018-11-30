import Home from "./containers/Home";
import { appendToParent, addStyles } from "./utilities/helpers";
import "normalize.css";
import "./styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  addStyles(root, "add", "Wrapper");
  const homeElements = Home();
  appendToParent(homeElements, root);
});
