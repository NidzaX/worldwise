import styles from "./CityItem.module.css";
import Flag from "react-world-flags";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
const emojiToCountryCode = {
  "🇵🇹": "PT",
  "🇪🇸": "ES",
  "🇩🇪": "DE",
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const countryCode = emojiToCountryCode[emoji];

  console.log(city);

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <div className={styles.cityName}>
          <span className={`${styles.emoji} ${styles.flag}`}>
            {countryCode ? <Flag code={countryCode} /> : emoji}
          </span>
          <h3 className={styles.cityName}>{cityName}</h3>
        </div>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
