import useSWR from "swr";
import { useRouter } from "next/router";
import loadCities from "@/services/load-cities";

const Page = () => {
  const router = useRouter();
  const { data } = useSWR("1", loadCities);

  if (!data) return "Loading...";

  return (
    <>
      <h1>Choose your city</h1>

      <select
        onChange={(event) => router.push(`/${event.currentTarget.value}`)}
      >
        {data.map((city) => (
          <option key={city.id} value={city.id}>
            {city.country} - {city.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Page;
