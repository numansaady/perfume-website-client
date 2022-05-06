import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import usePerfumeById from "../../hooks/usePerfumeById";
import Perfume from "../Perfume/Perfume";

const UpdateStock = () => {
  const { perfumeId } = useParams();
  const [perfume, setPerfume] = usePerfumeById(perfumeId);
  const { _id, name, quantity, supplier, img, description, price } = perfume;

  const handleDelivery = () => {};
  const handleIncrease = (event) => {};

  return (
    <div>
      <div className="perfume">
        <img className="w-100" src={img} alt="" />
        <h4>{name}</h4>
        <p>
          <small>{description}</small>
        </p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <button onClick={() => handleDelivery()} className="btn btn-primary">
          Delivered
        </button>
      </div>
      <div className="text-center">
        <form onSubmit={handleIncrease}>
          <input type="number" name="increaseItem" id="" />
          <br />
          <input className="btn btn-primary" type="submit" value="Add Item" />
        </form>
      </div>
      
      <div>
        <Link className="btn btn-primary" to="/manage">Manage Inventories</Link>
      </div>
    </div>
  );
};

export default UpdateStock;
