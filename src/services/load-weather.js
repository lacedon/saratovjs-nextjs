export default async function loadCities({ lat, lng }) {
  const response = await fetch(`/api/weather?lat=${lat}&lng=${lng}`, {
    method: "GET",
  });
  const result = await response.json();

  if (response.status === 404) throw new Error(result.errorMessage);

  return result;
}
