import { X } from "lucide-react";
import { useState } from "react";
import { getGeolocation } from "../services/get_geolocations";
import { useNavigate } from "react-router";

const LocationmModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  // coordinate showing
  const goToPage = (location) => {
    navigate("/weather", { state: { location } });
  };

  // from handle & data catch
  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = city.trim();
    // getGeolocation(value);
    if (!value) {
      setError("*please enter a city name ");
      return;
    }
    try {
      const location = await getGeolocation(value);
      // console.log(result);
      if (!location) {
        setError("Geocoding request failed!");
      }
      goToPage(location);
    } catch (error) {
      setError(error);
    }
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      setError("permmission denied")
      return
    }
    navigator.geolocation.getCurrentPosition(
      (positions) => {
        const { latitude, longitude } = positions.coords;
        // console.log({ latitude, longitude });

        goToPage({
          name: "your location",
          lat: latitude,
          lon: longitude,
        });
      },
      (error) => {
        setError(error.message);
      },
      {
        timeout: 10000,
      },
    );
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-200/60">
      <div className="h-75 w-125 p-5 bg-gray-100 shadow-2xl rounded-2xl ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">where are you today?</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full p-2 bg-gray-400 cursor-pointer"
          >
            <X />
          </button>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your city name "
              className="w-full p-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="flex justify-center mt-4">
              <button type="submit" className="btn btn-outline btn-info">
                Get Weather
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center mt-4">
          <p>OR,</p>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={handleLocation} className="btn btn-outline btn-info">
            use my location
          </button>
        </div>
        <div className="flex justify-around">
          {error && <p className="text-red-600">{error} </p>}
        </div>
      </div>
    </div>
  );
};

export default LocationmModal;
