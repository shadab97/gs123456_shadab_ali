import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>header</header>

      <aside>
        <nav>
          <a href="/store">Store</a>
          <a href="/sku">SKU</a>
          <a href="/planning">Planning</a>
          <a href="/chart">Chart</a>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
