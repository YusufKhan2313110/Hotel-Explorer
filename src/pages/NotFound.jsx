import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-12 rounded-2xl shadow-xl text-center">

        <div className="text-8xl">
          🚫
        </div>

        <h1 className="text-7xl font-bold mt-4">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;