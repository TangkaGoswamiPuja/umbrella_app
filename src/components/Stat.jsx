
const Stat = ({s}) => {
    return (
        <div className="shadow-2xl rounded-2xl  p-5 text-center">
          <h3 className="text-lg text-purple-900 font-bold">{s.label} </h3>
          <p className="text-2xl text-purple-900 font-extrabold">
            {s.value?.feelsLike}
          </p>
        </div>
    );
};

export default Stat;