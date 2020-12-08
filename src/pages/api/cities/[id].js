import cities from '@/cities.json'

export default (req, res) => {
  const city = cities.find(city => city.id === req.query.id);

  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ errorMessage: `No city with id ${req.query.id}` });
  }
}
