import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getShow } from "../data";

function TvPage() {
  const [tv, setTv] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getShow(id).then((res) => console.log(res));
  }, []);

  return <div></div>;
}

export default TvPage;
