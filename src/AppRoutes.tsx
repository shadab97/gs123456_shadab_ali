import { Route, Routes } from "react-router";
import App from "./App";
import Store from "./pages/store";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<Store />} />
        <Route path="/store" element={<Store />} />
        <Route path="/sku" element={<h1>sku</h1>} />
        <Route path="/planning" element={<h1>planning</h1>} />
        <Route path="/chart" element={<h1>chart</h1>} />
        <Route path="*" element={<h1>no match</h1>} />
      </Route>
    </Routes>
  );
}
