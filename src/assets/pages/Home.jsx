import { useState } from "react";
import LocationmModal from "../../components/LocationmModal";

const Home = () => {
  const [start, setStart] = useState(false);
  // console.log(start);
  return (
    <div className="flex flex-col justify-center items-center gap-4 boder-2 border-gray-300 p-10 rounded-lg shadow-lg bg-blue-100">
      <h1 className="text-6xl text-blue-400 ">
      
  What's the <span className="text-blue-700"> sky's </span>mood today?🌤️{" "}
      </h1>

      <p className="text-md text-gray-600 ">
        {" "}
        Hi I'm a weather app.I will tell u that Do u need umbrella or not :*
      </p>
      <div>
        <button
          className="btn btn-outline btn-info"
          onClick={() => setStart(true)}
        >
          Start
        </button>
      </div>
      {start && (
      <LocationmModal onClose={() => setStart(false)} />
      )}
    </div>
  );
};

export default Home;
