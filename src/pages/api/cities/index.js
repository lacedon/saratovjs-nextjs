import cities from '@/cities.json'

export default (req, res) => {
  res.json(cities);
}
