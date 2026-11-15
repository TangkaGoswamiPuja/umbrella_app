

const Recommendation = ({ recom }) => {
  return (
    <div className="shadow-2xl rounded-2xl p-5">
      <h2 className="text-blue-950 font-extrabold">Smart Recommendation</h2>
      <div>{recom?.text}</div>
    </div>
  );
};

export default Recommendation;
