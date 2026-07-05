import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-white"
        >
          🏨 Hotel Explorer
        </Link>

        <div className="flex gap-8 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300 transition"
            }
          >
            ❤️ Favorites
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;