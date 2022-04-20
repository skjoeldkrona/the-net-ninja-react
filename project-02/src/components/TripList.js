import styles from "./TripList.module.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch.js";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending } = useFetch(url);

  return (
    <div className={styles.tripList}>
      <h2>Trip list</h2>
      {isPending && <div>Loading trips...</div>}
      <ul>
        {trips && trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className={styles.filters}>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?location=europe")}
        >
          European trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
