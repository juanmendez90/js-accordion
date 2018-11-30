import Home from "./containers/Home";
import { appendToParent } from "./utilities/helpers";
import "normalize.css";
import "./styles/index.scss";

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("root");
  const homeElements = await Home();
  appendToParent(homeElements, root);
});
