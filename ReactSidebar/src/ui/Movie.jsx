import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie() {
  const [first, setFirst] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyapi.online/api/movies");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setFirst(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <h2>Movie</h2>
      {first.map((val, id) => (
        <div key={id} className="h-fit flex-1">
          <li className="list-none bg-yellow-100 dark:bg-yellow-300 mt-2 rounded-xl flex flex-col py-3 gap-5 px-2 font-semibold font-popins">
            <h2>Movie Name {val.movie} </h2>
            <h1>Rating {val.rating}</h1>
          </li>
        </div>
      ))}
    </>
  );
}

export default Movie;
