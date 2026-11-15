
const FeelsLike = ({weather , place}) => {
    return (
       <div className="shadow-2xl flex flex-col justify-between items-center rounded-2xl p-5">
          <div className="">
            <h2 className="text-blue-950 font-extrabold">
              LIVE IN {place.name}
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl text-purple-900 font-extrabold">
              {weather?.description}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <span className="rounded-full border-2 border-purple-400 p-2 font-medium text-lg">
              Feels like : {weather?.feelsLike}
            </span>
          </div>
        </div>
    );
};

export default FeelsLike;