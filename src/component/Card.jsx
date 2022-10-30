import React, { useState } from "react";
import car from "assets/images/img_car_2.png";

const Card = ({ data, setDetail, setGambar }) => {
  const formatNumeric = (number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);

  const clickHandler = (e) => {
    setDetail(true);
    setGambar([
      {
        name: e.target.name,
        image: e.target.value,
        price: e.target.id,
      },
    ]);
    // console.log(cobaAja);
  };
  return (
    <div className="box-card">
      {data.map((item, index) => {
        return (
          <div key={index} className="card-list">
            <img src={item.image ? item.image : car} alt="car-list" />
            <p className="title-car">{item.name}</p>
            <p className="price-car">{formatNumeric(item.price)} / hari</p>
            <p className="desc-car">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button
              className="btn-car"
              onClick={clickHandler}
              value={item.image}
              name={item.name}
              id={item.price}
            >
              Pilih Mobil
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
