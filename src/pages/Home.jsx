import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import HotelCard from "../components/HotelCard";

const API = "https://demohotelsapi.pythonanywhere.com/hotels/";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  useEffect(() => {
    async function fetchHotels() {
      try {
        const res = await axios.get(API);
        setHotels(res.data.data || []);
      } catch (err) {
        console.error(err);
        setHotels([]);
      } finally {
        setLoading(false);
      }
    }

    fetchHotels();
  }, []);

  const filteredHotels = useMemo(() => {
    let data = [...hotels];

    if (search.trim()) {
      data = data.filter((hotel) =>
        `${hotel.name} ${hotel.location}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (rating) {
      data = data.filter((hotel) => Number(hotel.rating) >= Number(rating));
    }

    if (sortPrice === "low") {
      data.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortPrice === "high") {
      data.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return data;
  }, [hotels, search, rating, sortPrice]);

  return (
    <div className="bg-gray-100 min-h-screen">

      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl md:text-6xl font-bold">
            Discover Your Perfect Stay
          </h1>

          <p className="mt-5 text-lg md:text-xl max-w-2xl">
            Browse hundreds of hotels, compare prices, view ratings and
            discover your next destination with ease.
          </p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-xl shadow-md p-6 mb-10">

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Search by hotel or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4★ & Above</option>
              <option value="3">3★ & Above</option>
              <option value="2">2★ & Above</option>
            </select>

            <select
              value={sortPrice}
              onChange={(e) => setSortPrice(e.target.value)}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">Sort by Price</option>
              <option value="low">Low → High</option>
              <option value="high">High → Low</option>
            </select>

          </div>

        </div>

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Available Hotels
          </h2>

          <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
            {filteredHotels.length} Hotels
          </span>

        </div>

        {loading ? (

          <div className="flex justify-center items-center py-24">

            <div className="h-14 w-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

          </div>

        ) : filteredHotels.length === 0 ? (

          <div className="bg-white rounded-xl shadow p-12 text-center">

            <h2 className="text-3xl font-bold">
              No Hotels Found
            </h2>

            <p className="text-gray-500 mt-4">
              Try changing the search or filters.
            </p>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Home;