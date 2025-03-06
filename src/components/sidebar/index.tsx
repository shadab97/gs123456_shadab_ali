import { FaStore } from "react-icons/fa";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <aside className="w-64 sticky top-0 h-[calc(100vh-48px)]">
      <nav className="w-full flex flex-col py-16">
        {[
          {
            label: "store",
            route: "/store",
            icon: <FaStore />,
          },
          {
            label: "SKU",
            route: "/sku",
            icon: <FaStore />,
          },
          {
            label: "Planning",
            route: "/planning",
            icon: <FaStore />,
          },
          {
            label: "Chart",
            route: "/chart",
            icon: <FaStore />,
          },
        ].map((each) => (
          <NavLink
            key={each.label}
            to={each.route}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-200 text-xl flex gap-4 items-center py-4 px-4"
                : "  text-xl flex gap-4 items-center py-4 px-4"
            }
          >
            {each?.icon} {each?.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
