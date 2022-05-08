import React from "react";
import { Link, useParams } from "react-router-dom";
import usePerfumeById from "../../hooks/usePerfumeById";

const UpdateStock = () => {
  const { perfumeId } = useParams();
  const [perfume, setPerfume] = usePerfumeById(perfumeId);
  const { _id, name, quantity, supplier, img, description, price } = perfume;

  const handleDelivery = (event) => {
    const quantity = event.target.quantity.value - 1;
    const updatedQuantity = {quantity};
    const url = `https://blooming-lowlands-86443.herokuapp.com/perfume/${perfumeId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify(updatedQuantity)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    // const { quantity, ...rest } = perfume;
    // const newQuantity = parseInt(quantity) -1;
    // const newPerfume = { quantity: newQuantity, ...rest };
    // setPerfume(newPerfume);
  };
  const handleIncrease = (event) => {
    event.preventDefault();
    const quantity = parseInt(event.target.increaseItem.value) + perfume.quantity;
    const updatedQuantity = {quantity};
    const url = `https://blooming-lowlands-86443.herokuapp.com/perfume/${perfumeId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify(updatedQuantity)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    // const { quantity, ...rest } = perfume;
    // const newQuantity = parseInt(quantity) + parseInt(event.target.increaseItem.value);
    // const newPerfume = { quantity: newQuantity, ...rest };
    // setPerfume(newPerfume);
    // event.target.reset();
  };

  return (
    <div className="container">
      <div className="perfume d-flex align-items-center">
        <img className="w-50" src={img} alt="" />
        <div>
          <h4>{name}</h4>
          <p>
            <small>{description}</small>
          </p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
        </div>
      </div>
      <div className="text-center d-flex justify-content-center mt-5">
        <form onSubmit={handleIncrease}>
          <input type="number" name="increaseItem" id="" />
          <input
            className="btn btn-primary ms-4"
            type="submit"
            value="Add to stock"
          />
        </form>
        <button onClick={() => handleDelivery()} className="btn btn-primary ms-4">
          Delivered
        </button>
      </div>

      <div>
        <Link className="btn btn-primary my-5" to="/manage">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default UpdateStock;
