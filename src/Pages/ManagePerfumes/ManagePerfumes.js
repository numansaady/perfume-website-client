import React from "react";
import { Link } from "react-router-dom";
import usePerfumes from "../../hooks/usePerfumes";
import Perfume from "../Perfume/Perfume";

const ManagePerfumes = () => {
  const [perfumes, setPerfumes] = usePerfumes();
  return (
    <div id="perfumes" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5"> Our Services</h1>
        <div className="perfumes-container">
          {perfumes.map((perfume) => (
            <Perfume key={perfume._id} perfume={perfume}></Perfume>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagePerfumes;
