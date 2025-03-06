import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes.tsx";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { store } from "./store";
import { Provider } from "react-redux";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);
