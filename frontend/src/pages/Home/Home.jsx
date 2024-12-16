import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Display from "../../components/Display/Display";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <ExploreMenu setCategory={setCategory} category={category} />
      <Display category={category} />
    </>
  );
};

export default Home;
