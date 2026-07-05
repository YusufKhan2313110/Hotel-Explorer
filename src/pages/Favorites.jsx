import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(data);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((hotel) => hotel.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold">
              ❤️ Favorite Hotels
            </h1>

            <p className="text-gray-500 mt-3">
              Your saved hotels for future bookings.
            </p>

          </div>

          <div className="bg-blue-600 text-white px-5 py-3 rounded-full font-semibold">
            {favorites.length} Saved
          </div>

        </div>

        {favorites.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">

            <div className="text-7xl mb-5">
              🏨
            </div>

            <h2 className="text-4xl font-bold">
              No Favorite Hotels
            </h2>

            <p className="text-gray-500 mt-4">
              Click the heart icon on any hotel to save it here.
            </p>

            <Link
              to="/"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
            >
              Browse Hotels
            </Link>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {favorites.map((hotel) => (

              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >

                <img
                  src={hotel.thumbnail}
                  alt={hotel.name}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

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

                  <p className="mt-4 text-green-600 text-3xl font-bold">
                    ₹{Math.round(Number(hotel.price))}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6">

                    <Link
                      to={`/hotel/${hotel.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => removeFavorite(hotel.id)}
                      className="bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Favorites;