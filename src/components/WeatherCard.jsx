import { Droplet, MapPin, Thermometer, Wind } from "lucide-react";
import Stat from "./Stat";
import { getWeatherTheme } from "../utils/getTheme";

const WeatherCard = ({ weather, place }) => {
  const theme = getWeatherTheme(weather?.icon);

  const stats = [
    { icon: Thermometer, label: "Feels like", value: `${weather?.feelsLike}°C` },
    { icon: Droplet, label: "Humidity", value: `${weather?.humidity}%` },
    { icon: Wind, label: "Wind speed", value: `${weather?.windSpeed} km/h` },
  ];

  return (
    <section className="rounded-2xl shadow-2xl relative overflow-hidden p-8 max-[480px]:p-6">
      {/* card-er kone weather-er rongey halka glow */}
      <span
        className="absolute -top-24 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: theme.accent, opacity: 0.16 }}
        aria-hidden="true"
      />

      <div className="relative">
        <span className="inline-block rounded-full bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1">
          Today's weather
        </span>

        <h2 className="flex items-center gap-2 text-[28px] max-[480px]:text-[24px] font-bold mt-4 mb-0 m-0">
          <MapPin size={21} strokeWidth={2.5} className="text-sky-500 flex-shrink-0" />
          {place.name}
        </h2>

        <div className="flex items-end gap-5 mt-6 mb-7 max-[380px]:flex-col max-[380px]:items-start max-[380px]:gap-2">
          <span
            className="text-[100px] max-[480px]:text-[78px] font-extrabold leading-[0.82]"
            style={{ color: theme.strong }}
          >
            {weather?.temperature}
            <span className="text-[52px] max-[480px]:text-[40px] align-top">°</span>
          </span>
          <div className="pb-2">
            {/* choto headline, jemon "Rain" */}
            <span className="block text-[21px] font-bold">
              {weather?.conditionLabel}
            </span>
            {/* weather code-er exact mane, jemon "Heavy rain" */}
            <span className="block text-[14px] text-slate-500">
              {weather?.description}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 max-[560px]:grid-cols-1">
          {stats.map((s) => (
            <Stat key={s.label} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeatherCard;
