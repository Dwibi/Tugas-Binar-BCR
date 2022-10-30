import React, { useEffect, useRef, useState } from "react";
import { fetcApi } from "config/fethAPI";
import { Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { category, price, status } from "./option-data";
import Card from "component/Card";
import Detail from "component/Detail";

const AboutUs = (props) => {
  const [data, setdata] = useState([]);
  const [state, setState] = useState({
    name: "",
    category: "",
    price: "",
    isRented: false,
  });
  const [isLoading, setLoading] = useState("isLoad");
  const [focus, setfocus] = useState(false);
  const [detail, setDetail] = useState(false);
  const [gambar, setGambar] = useState();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const clickHandler = () => {
    props.closeHandler("success");
    setfocus(false);
    fetcApi(state).then(({ data }) => setdata(data.cars));
  };

  useEffect(() => {
    isLoading === "isLoad" && fetcApi(state).then(({ data }) => setdata(data.cars));
    setLoading("break");
  }, [state, isLoading]);

  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setfocus(false);
    }
  };
  console.log(data);
  return (
    <>
      {focus && <div className="opacity"></div>}
      <div className="block-box-search">
        <div className="box-card-search">
          <form ref={wrapperRef} onFocus={() => setfocus(true)}>
            <div className="container-box-search row">
              <div className="col">
                <span>Nama Mobil</span>
                <Input
                  name="name"
                  onChange={changeHandler}
                  placeholder="Ketik nama/tipe mobil"
                  style={{ padding: 6 }}
                  type="text"
                />
              </div>
              <div className="col">
                <span>Kategori</span>
                <Input
                  onChange={changeHandler}
                  className="select-box"
                  type="select"
                  name="category"
                  id="exampleSelect"
                >
                  <option value="">Masukan Kapasitas Mobil</option>
                  {category.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Input>
              </div>
              <div className="col">
                <span>Harga</span>
                <Input
                  onChange={changeHandler}
                  className="select-box"
                  type="select"
                  name="price"
                  id="exampleSelect"
                >
                  <option value="">Masukan Harga Sewa per Hari</option>
                  {price.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Input>
              </div>
              <div className="col">
                <span>Status</span>
                <Input
                  onChange={changeHandler}
                  className="select-box"
                  type="select"
                  name="isRented"
                  id="exampleSelect"
                >
                  <option value="">Disewa</option>
                  {status.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Input>
              </div>
              <div className="col-md-auto">
                <Button onClick={clickHandler} color="success" className="btn-default">
                  Cari Mobil
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="block-box-result">
        {detail === false ? (
          <Card data={data} setDetail={setDetail} setGambar={setGambar} />
        ) : (
          <Detail data={data} gambar={gambar} />
        )}
      </div>
    </>
  );
};

export default AboutUs;
