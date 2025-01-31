import styles from "./CityItem.module.css";
import Flag from "react-world-flags";

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
  const { cityName, emoji, date } = city;
  const countryCode = emojiToCountryCode[emoji];

  console.log(city);

  return (
    <li className={styles.cityItem}>
      <div className={styles.cityName}>
        <span className={`${styles.emoji} ${styles.flag}`}>
          {countryCode ? <Flag code={countryCode} /> : emoji}
        </span>
        <h3 className={styles.cityName}>{cityName}</h3>
      </div>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
