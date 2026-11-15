import { MapPin } from "lucide-react";
import Stat from "./Stat";

const WeatherCard = ({ weather, place }) => {
  const stat = [
    { icon: "", label: "Feels Like", value: `${weather?.feelsLike}` },
    { icon: "", label: "Humidity", value: `${weather?.humidity}` },
    { icon: "", label: "Wind Speed", value: `${weather?.windSpeed}` },
  ];

  return (
    <div className="space-y-3">
      <h1 className="text-2xl text-blue-600 font-semibold">
        Today's Weather Deatalis
      </h1>
      <div className="flex items-center gap-3">
        <MapPin size={30} />
        <h2 className="text-4xl text-purple-600 font-semibold">{place.name}</h2>
      </div>
      <div className="flex items-center gap-16">
        <h3 className="text-5xl text-purple-900 font-extrabold">
          {weather?.temperature} C
        </h3>
        <p className="text-2xl text-purple-900 font-extrabold">
          {weather?.description}
        </p>
      </div>
      <div className="flex items-center justify-between gap-4">

        

        {
        stat.map((s,index)=>(<Stat key={index} s={s}/>))
        
        }

        {/* <div className="shadow-2xl rounded-2xl  p-5 text-center">
          <h3 className="text-lg text-purple-900 font-bold">Feels LIke </h3>
          <p className="text-2xl text-purple-900 font-extrabold">
            {weather?.feelsLike}
          </p>
        </div> */}
        {/* <div className="shadow-2xl rounded-2xl  p-5 text-center">
          <h3 className="text-lg text-purple-900 font-bold">Wind Speed </h3>
          <p className="text-2xl text-purple-900 font-extrabold">
            {weather?.windSpeed}
          </p>
        </div> */}

        {/* <div className="shadow-2xl rounded-2xl  p-5 text-center">
          <h3 className="text-lg text-purple-900 font-bold">Humidity </h3>
          <p className="text-2xl text-purple-900 font-extrabold">
            {weather?.humidity}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherCard;
