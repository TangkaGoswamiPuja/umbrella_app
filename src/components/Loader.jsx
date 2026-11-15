import WeatherLottie from "./WeatherLottie";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <div className="rounded-2xl shadow-2xl p-8 text-center">
        <WeatherLottie
          kind="weather"
          name="cloudy"
          className="w-[110px] h-[110px] mx-auto"
        />
        <p className="text-[16px] font-semibold text-slate-500 mt-2 mb-0">
          Getting your weather...
        </p>
      </div>
    </div>
  );
};

export default Loader;
