import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API = "https://demohotelsapi.pythonanywhere.com/hotels/";

function HotelDetails() {
  const { id } = useParams();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotel() {
      try {
        const res = await axios.get(`${API}${id}/`);

        if (res.data.data) {
          setHotel(res.data.data);
        } else {
          setHotel(res.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHotel();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="h-16 w-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Hotel Not Found</h1>

        <Link
          to="/"
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="relative h-[420px]">

        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-10 left-10 text-white">

          <h1 className="text-5xl font-bold">
            {hotel.name}
          </h1>

          <p className="mt-4 text-xl">
            📍 {hotel.location}
          </p>

          <p className="mt-2 text-xl">
            ⭐ {hotel.rating}
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              About this Hotel
            </h2>

            <p className="text-gray-700 leading-8">
              {hotel.description}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold mb-8">
              Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

              {hotel.photos?.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt=""
                  className="rounded-xl h-52 w-full object-cover hover:scale-105 transition duration-300"
                />
              ))}

            </div>

          </div>

        </div>

        <div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">

            <h2 className="text-4xl font-bold text-green-600">
              ₹{Math.round(Number(hotel.price))}
            </h2>

            <p className="text-gray-500 mt-2">
              Per Night
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex justify-between">
                <span>Location</span>
                <strong>{hotel.location}</strong>
              </div>

              <div className="flex justify-between">
                <span>Rating</span>
                <strong>⭐ {hotel.rating}</strong>
              </div>

              <div className="flex justify-between">
                <span>Hotel ID</span>
                <strong>#{hotel.id}</strong>
              </div>

            </div>

            <button className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition">
              Book Now
            </button>

            <Link
              to="/"
              className="block mt-4 text-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 rounded-xl font-semibold transition"
            >
              Back to Hotels
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HotelDetails;