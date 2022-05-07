import React from "react";
import usePerfumes from "../../../hooks/usePerfumes";
import Perfume from "../../Perfume/Perfume";
import Slider from "../Slider/Slider";

const Home = () => {
  const [perfumes, setPerfumes] = usePerfumes();
  return (
    <div>
      <Slider></Slider>
      <div className="perfumes-area">
        <div className="container">
          <div className="sect my-5 text-center">
            <h1 className="text-center">Our Perfumes</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {perfumes.slice(0, 6).map((perfume) => <Perfume key={perfume._id} perfume={perfume}
            ></Perfume>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
