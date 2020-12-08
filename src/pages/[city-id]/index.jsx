import { useRouter } from "next/router";
import useSWR from "swr";
import loadCity from "@/services/load-city";
import loadWeather from "@/services/load-weather";
import Item from "@/components/item";
import styles from './styles.module.css'

export async function getStaticProps(context) {
  return {
    props: {
      preloadedCity: await loadCity({ cityId: context.params["city-id"] })
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

const Page = ({ preloadedCity }) => {
  const router = useRouter();
  const { data: city, error: cityError } = useSWR(router.query["city-id"], () =>
  preloadedCity || loadCity({ cityId: router.query["city-id"] })
  );
  const { data: weather, error: weatherError } = useSWR(
    city ? `${city.lat}.${city.lng}` : null,
    () => loadWeather(city)
  );

  if (cityError)
    return (
      <>
        <h1>Error</h1>
        {cityError.message}
      </>
    );
  if (weatherError)
    return (
      <>
        <h1>Error</h1>
        {weatherError.message}
      </>
    );

  if (!weather) return "Loading...";

  return (
    <ul className={styles.list}>
      {weather.map((item) => (
        <li key={`${city.lat}.${city.lng}.${item.observation_time.value}`}>
          <Item
            minTemp={item.temp[0].min.value}
            maxTemp={item.temp[1].max.value}
            tempUnit={item.temp[0].min.units}
            day={item.observation_time.value}
            weatherCode={item.weather_code.value}
          />
        </li>
      ))}
    </ul>
  );
};

export default Page;
