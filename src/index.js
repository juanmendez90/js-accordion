import Home from "./containers/Home";
import "normalize.css";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  root.appendChild(Home());
});
