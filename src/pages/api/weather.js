import loadWeather from '@/services/climacell';

export default async (req, res) => {
  const weather = await loadWeather({ lat: req.query.lat, lng: req.query.lng });

  res.json(weather);
}
