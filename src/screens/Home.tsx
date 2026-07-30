import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="flex flex-col items-center justify-center px-6 py-28 text-center">
        <span className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
          Authentication Starter
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
          Secure Authentication
          <br />
          Made Simple
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          A clean authentication system built with modern web technologies.
          Create an account, sign in securely, and manage your profile with
          ease.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/login"
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Create Account
          </Link>

          <Link
            to="/user"
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
          >
            User
          </Link>
        </div>

        <div className="mt-20 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">
              Secure Login
            </h3>
            <p className="mt-2 text-gray-600">
              Sign in using a secure authentication flow with JWT.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">
              Profile Management
            </h3>
            <p className="mt-2 text-gray-600">
              Upload avatars, cover images, and manage your account.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">
              Modern Stack
            </h3>
            <p className="mt-2 text-gray-600">
              React, TypeScript, Tailwind CSS, Express, MongoDB, and Multer.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;