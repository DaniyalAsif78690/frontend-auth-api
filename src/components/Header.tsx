import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-gray-900"
        >
          AuthApp
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-5 py-2 text-gray-700 transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;