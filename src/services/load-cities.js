export default async function loadCities() {
  const response = await fetch(`/api/cities`, {
    method: "GET",
  });
  const result = await response.json();
  return result;
}
