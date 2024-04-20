import ReactDOM from "react-dom/client";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import App from "./app/App";
import "/src/app/styles/globals.scss";
import { ThemeProvider } from "@gravity-ui/uikit";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme="dark">
    <App />
  </ThemeProvider>
);
