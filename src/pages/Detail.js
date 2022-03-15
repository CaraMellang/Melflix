import React from "react";
import MovieViewer from "../components/MovieViewer";

const Detail = ({
  location: {
    state: { data },
  },
}) => {
  return <MovieViewer data={data} />;
};

export default Detail;
