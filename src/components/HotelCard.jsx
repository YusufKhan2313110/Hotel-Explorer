import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HotelCard({ hotel }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(favorites.some((item) => item.id === hotel.id));
  }, [hotel.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorite) {
      favorites = favorites.filter((item) => item.id !== hotel.id);
    } else {
      favorites.push(hotel);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavorite(!favorite);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <div className="relative">

        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          className="w-full h-64 object-cover"
        />

        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 bg-white rounded-full w-11 h-11 shadow flex items-center justify-center text-2xl"
        >
          {favorite ? "❤️" : "🤍"}
        </button>

      </div>

      <div className="p-5">

        <div className="flex justify-between items-start">

          <h2 className="text-2xl font-bold">
            {hotel.name}
          </h2>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
            ⭐ {hotel.rating}
          </span>

        </div>

        <p className="text-gray-500 mt-3">
          📍 {hotel.location}
        </p>

        <p className="text-gray-600 mt-4 line-clamp-3">
          {hotel.description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <p className="text-3xl font-bold text-green-600">
              ₹{Math.round(Number(hotel.price))}
            </p>

            <p className="text-sm text-gray-500">
              per night
            </p>

          </div>

          <Link
            to={`/hotel/${hotel.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default HotelCard;