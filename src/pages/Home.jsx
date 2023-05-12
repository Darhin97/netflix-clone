import axios from "axios";
import React, { useEffect, useState } from "react";
import requests, { imgBaseURL } from "../Utilities";
import Row from "../components/Row";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute h-[550px] w-full bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`${imgBaseURL}/${randomMovie?.backdrop_path}`}
            alt={randomMovie?.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">
              {randomMovie?.title}
            </h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released: {randomMovie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncateString(randomMovie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
        <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
        <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
      </div>
    </div>
  );
};

export default Home;
