import styles from "./styles.module.css";

export default function Item({
  minTemp,
  maxTemp,
  tempUnit,
  day,
  weatherCode,
  className,
}) {
  return (
    <section className={`${styles.item} ${className}`}>
      <div className={styles.title}>{day}</div>

      <div
        className={`${styles.weather} ${styles.row}`}
        title={weatherCode.replace(/_/g, " ")}
        style={{
          backgroundImage: `url('/icons/${weatherCode}.svg')`,
        }}
      >
        {weatherCode.replace(/_/g, " ")}
      </div>

      <ul className={`${styles.values} ${styles.row}`} title="Temperature">
        <span className={styles.value}>{Math.round(minTemp)}</span>
        &nbsp;
        <span className={styles.value}>{Math.round(maxTemp)}</span>
        &nbsp;
        <span className={styles.units}>{tempUnit}</span>
      </ul>
    </section>
  );
}
