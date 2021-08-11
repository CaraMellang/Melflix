import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";
import SignIn from "../components/SIgnIn";
import SignUp from "../components/SignUp";
import "./Home.css";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  const getData = async () => {
    const data = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(data.data.data.movies);
    setMovieList(data.data.data.movies);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      Home
      <div>
        <Navigation />
        <SignUp />
        <SignIn />
        {movieList.map((data) => (
          <Movie
            key={data.id}
            id={data.id}
            title={data.title}
            year={data.year}
            genres={data.genres}
            rating={data.rating}
            summary={data.summary}
            poster={data.large_cover_image}
          />
        ))}
      </div>
    </>
  );
};


export default Home;
