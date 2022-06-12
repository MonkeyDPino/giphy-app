import React from "react";
import useSingleGif from "hooks/useSingleGif";
import Gif from "components/Gif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";

function DetailsGif({ params }) {
  const { gif, loading, error } = useSingleGif(params.id);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Redirect to="/404" />;
  }

  if (!gif) return <></>;

  return (
    <>
      <h3>{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
}

export default DetailsGif;
