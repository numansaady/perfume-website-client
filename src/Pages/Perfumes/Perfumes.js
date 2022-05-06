import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePerfumes from "../../hooks/usePerfumes";
import Perfume from "../Perfume/Perfume";
import "./Perfumes.css";

const Perfumes = () => {
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
      <div>
          <Link className="btn btn-primary my-4" to="/manage">Manage Inventories</Link>
      </div>
    </div>
  );
};

export default Perfumes;
