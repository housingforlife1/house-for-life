import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DonDesktop } from "./screens/DonDesktop/DonDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DonDesktop />
  </StrictMode>,
);
