import React from "react";
import car from "assets/images/img_car_2.png";
import user_icon from "assets/images/user-icon.png";

const Detail = ({ data, gambar }) => {
  console.log(gambar);
  return (
    <div className="detail-wrapper">
      <div className="detail-left">
        <h2 className="detail-title">Tentang Paket</h2>
        <h2 className="detail-title">Includes</h2>
        <ul className="detail-desc">
          <li className="detail-desc-text">Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
          <li className="detail-desc-text">Sudah termasuk bensin selama 12 jam</li>
          <li className="detail-desc-text">Sudah termasuk Tiket Wisata</li>
          <li className="detail-desc-text">Sudah termasuk pajak</li>
        </ul>
        <h2 className="detail-title">Exclue</h2>
        <ul className="detail-desc">
          <li className="detail-desc-text">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li className="detail-desc-text">
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
          </li>
          <li className="detail-desc-text">Tidak termasuk akomodasi penginapan</li>
        </ul>
        <h2 className="detail-title">Refund, Reschedule, Overtime</h2>
        <ul className="detail-desc">
          <li className="detail-desc-text">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li className="detail-desc-text">
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
          </li>
          <li className="detail-desc-text">Tidak termasuk akomodasi penginapan</li>
          <li className="detail-desc-text">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li className="detail-desc-text">
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
          </li>
          <li className="detail-desc-text">Tidak termasuk akomodasi penginapan</li>
          <li className="detail-desc-text">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li className="detail-desc-text">
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
          </li>
          <li className="detail-desc-text">Tidak termasuk akomodasi penginapan</li>
        </ul>
      </div>
      <div className="detail-car">
        {gambar.map((result) => (
          <>
            <img src={result.image} alt="cars" className="detail-car-img"></img>
            <h1 className="detail-car-title">{result.name}</h1>
            <div className="detail-amount-wrapper">
              <img className="detail-amount-img" src={user_icon} alt="user"></img>
              <p className="detail-amount-desc">6 - 8 orang</p>
            </div>
            <div className="detail-price">
              <p className="detail-price-text">Total</p>
              <p className="detail-price-text">Rp. {result.price},00</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Detail;
