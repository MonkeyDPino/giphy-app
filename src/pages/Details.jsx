import React from "react";
import useSingleGif from "hooks/useSingleGif";
import Gif from "components/Gif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import Title from "components/Title";

function DetailsGif({ params }) {
  const { gif, loading, error } = useSingleGif(params.id);

  if (loading) {
    return (
      <>
        <Title title="Loading..." />
        <Spinner />
      </>
    );
  }

  if (error) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Title title={`${gif.title} | Giphy`} />
      <div className="page-container">
        <h3 style={{ marginBottom: "16px", color: "var(--text-secondary)", fontSize: "14px", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
          {gif.title}
        </h3>
        <Gif {...gif} />
      </div>
    </>
  );
}

export default DetailsGif;
