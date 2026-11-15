 const Rain = ["freezing_rain", "rain", "drizzle"];

 export function getRecommandations (weather){
    if (!weather) {
      return;
    }
    if (weather.condition === "snow") {
      return { type: "snow", label: "Snow ", text: "Drive safely" };
    }
    if (Rain.includes(weather.condition)) {
      return { type: "rain", label: "Rain", text: "Take your umbrella" };
    }
if (weather.condition === "clear") {
      return { type: "clear", label: "Clear", text: "GO outside happily" };
    }

  };