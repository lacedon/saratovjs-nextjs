export default async function loadCities({ cityId }) {
  const response = await fetch(
    `${
      typeof window === "undefined" ? "http://localhost:3000" : ""
    }/api/cities/${cityId}`,
    {
      method: "GET",
    }
  );
  const result = await response.json();

  if (response.status === 404) throw new Error(result.errorMessage);

  return result;
}
