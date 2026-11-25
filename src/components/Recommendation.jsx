import WeatherLottie from "./WeatherLottie";

const REC_STYLES = {
  hot: { color: "#f97316" },
  warm: { color: "#fb923c" },
  cold: { color: "#38bdf8" },
  sunny: { color: "#f59e0b" },
  rain: { color: "#3b82f6" },
  snow: { color: "#818cf8" },
  fog: { color: "#94a3b8" },
  cloudy: { color: "#64748b" },
  pleasant: { color: "#22c55e" },
};

const Recommendation = ({ recom }) => {
  if (!recom) return null;
  const style = REC_STYLES[recom.type] || REC_STYLES.pleasant;

  return (
    <section
      className="flex items-start gap-4.5 w-full rounded-2xl border-l-[5px] border border-solid shadow-2xl p-7 max-[480px]:p-5 transition-transform duration-200 hover:-translate-y-1"
      style={{ borderLeftColor: style.color,borderColor: style.color, background: `${style.color}1A` }}
    >
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-[20px] bg-white/90 ring-1 ring-white shadow-sm shrink-0">
        <WeatherLottie
          kind="advice"
          name={recom.type}
          className="w-11.5 h-11.5"
        />
      </span>
      <div>
        <div className="flex items-center gap-3 mb-2 max-[480px]:flex-wrap">
          <span
            className="text-[11px] font-bold uppercase tracking-wider text-white rounded-full px-3 py-1"
            style={{ background: style.color }}
          >
            {recom.label}
          </span>
          <h3 className="text-[12.5px] font-bold tracking-wide uppercase text-slate-500 m-0">
            Your smart suggestion
          </h3>
        </div>
        <p className="text-[17.5px] font-semibold leading-[1.55] text-slate-800 m-0">
          {recom.text}
        </p>
      </div>
    </section>
  );
};

export default Recommendation;
