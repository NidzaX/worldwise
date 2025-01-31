import { Flag } from "react-world-flags";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { countryCode, emoji } = country;

  return (
    <li className={styles.countryItem}>
      <div>
        <span className={`${styles.emoji} ${styles.flag}`}>
          {countryCode ? (
            <Flag code={countryCode} className={styles.flag} />
          ) : (
            emoji
          )}
        </span>
        <h3 className={styles.countryName}>{country.country}</h3>
      </div>
    </li>
  );
}

export default CountryItem;
