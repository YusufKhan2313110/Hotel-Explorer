import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link
      to="/"
      className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      ← Back to Home
    </Link>
  );
}

export default BackButton;