export default async function getWeatherForWeek({ lat, lng }) {
  const response = await fetch(
    `https://api.climacell.co/v3/weather/forecast/daily?${[
      `apikey=${process.env.CLIMACELL_KEY}`,
      `unit_system=si`,
      `start_time=now`,
      `end_time=${encodeURIComponent(new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString())}`,
      `fields=temp,weather_code`,
      `lat=${lat}`,
      `lon=${lng}`,
    ].join("&")}`,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  );
  const result = await response.json();
  return result;
}
