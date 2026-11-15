import { useLocation } from "react-router";
import { getWeather } from "../../services/get_weather";
import { useEffect, useState } from "react";
import WeatherCard from "../../components/WeatherCard";
import Recommendation from "../../components/Recommendation";
import FeelsLike from "../../components/FeelsLike";
import { getRecommandations } from "../../utils/getRecom";

const Weather = () => {
  const value = useLocation();
  const place = value.state.location;
  const [weather, setWeather] = useState(null);
  // console.log("weather",weather)
  useEffect(() => {
    if (!place) {
      return;
    }
    const fetchWeather = async () => {
      try {
        const result = await getWeather(place);
        // console.log(result)
        setWeather(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, [place]);
 

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <div className="shadow-2xl rounded-2xl p-5">
            {/* weather card */}
           <WeatherCard  weather={weather} place={place} />
          </div>
          {/* recommendation */}
          <Recommendation recom={getRecommandations(weather)}/>
        </div>
{/* weather type  */}
        <FeelsLike weather={weather} place={place}/>
      </div>
    </div>
  );
};

export default Weather;
