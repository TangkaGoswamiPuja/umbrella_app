import { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import { getWeather } from "../../services/get_weather";
import WeatherCard from "../../components/WeatherCard";
import Recommendation from "../../components/Recommendation";
import FeelsLike from "../../components/FeelsLike";
import Loader from "../../components/Loader";
import LocationmModal from "../../components/LocationmModal";
import { getRecommandations } from "../../utils/getRecom";

const Weather = () => {
  const value = useLocation();
  const place = value.state?.location;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!place) {
      return;
    }
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const result = await getWeather(place);
        setWeather(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setOpen(false);
      }
    };
    fetchWeather();
  }, [place]);

  // /weather ashol url-e sorasori khulle home-e pathiye dibe
  if (!place) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <header className="py-4">
        {!loading && (
          <div className="flex items-center justify-between">
            <div>
              <Link className="border-2 rounded-full px-2 py-1" to="/">
                Back To Home
              </Link>
            </div>
            <div>
              <h1 className="text-xl text-blue-300 font-bold">
                Umbrella <span className="text-blue-400">Weather</span>
              </h1>
            </div>
            <div>
              <button
                onClick={() => setOpen(true)}
                className="text-lg font-medium hover:scale-105 transition-all bg-blue-500 px-5 cursor-pointer py-1 rounded-full text-gray-100"
                type="button"
              >
                Change location
              </button>
            </div>
          </div>
        )}
      </header>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-3">
            {/* weather card */}
            <WeatherCard weather={weather} place={place} />
            {/* recommendation */}
            <Recommendation recom={getRecommandations(weather)} />
          </div>
          {/* weather type */}
          <FeelsLike weather={weather} place={place} />
        </div>
      )}

      {open && <LocationmModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default Weather;
