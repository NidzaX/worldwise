import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import Flag from "react-world-flags";
import { useCities } from "../contexts/CitiesContext";

const emojiToCountryCode = {
  "🇵🇹": "PT",
  "🇪🇸": "ES",
  "🇩🇪": "DE",
};

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first cities by clicking on a cities on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    const countryCode = emojiToCountryCode[city.emoji];
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, emoji: <Flag code={countryCode} /> },
      ];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
