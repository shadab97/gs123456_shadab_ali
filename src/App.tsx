import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="flex">
        <Sidebar />
        <div className="flex-1 p-8 flex-col bg-gray-200">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
