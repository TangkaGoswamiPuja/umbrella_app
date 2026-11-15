import { LottieLight } from "lottie-react";

// kind = "weather" | "advice", name = file-er naam (public/animations/<kind>/<name>.json)
export default function WeatherLottie({ kind, name, className = "" }) {
  return (
    <LottieLight
      src={`/animations/${kind}/${name}.json`}
      className={className}
      autoplay
      loop
    />
  );
}
