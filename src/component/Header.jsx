import binar from "assets/images/logo-binar.svg";
import mobil from "assets/images/img_car.png";
import { Link, useNavigate } from "react-router-dom";
import icon_x from "assets/images/fi_x.png";
import icon_bars from "assets/images/fi_menu.png";
import { useRef } from "react";

const Header = ({ history, statusPencarian }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/start-rent-car");
  };

  const navRef = useRef();

  const showBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <>
      <nav>
        <Link className="navbar-brand" to={"/"}>
          <img src={binar} alt="" width="50" height="50"></img>
        </Link>

        <div className="nav-bar" ref={navRef}>
          <a href="#our-services" to={"#our-services"}>
            Our Services
          </a>
          <a href="#why-us" to={"#our-services"}>
            Why Us
          </a>
          <a href="#testimonial" to={"#our-services"}>
            Testimonial
          </a>
          <a href="#faq" to={"#our-services"}>
            FAQ
          </a>
          <button className="nav-btn nav-close-btn" onClick={showBar}>
            <img src={icon_x} alt="x" />
          </button>
        </div>
        <button onClick={showBar} className="nav-btn">
          <img src={icon_bars} alt="bars" />
        </button>
      </nav>
      <header>
        <div className="hero-section" style={{ height: statusPencarian === "success" ? 200 : "auto" }}>
          {statusPencarian !== "success" && (
            <div className="hero-section-left">
              <h1 className="title-hero">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="title-desc">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              {window.location.pathname !== "/start-rent-car" && (
                <button type="button" onClick={clickHandler}>
                  Mulai Sewa Mobil
                </button>
              )}
            </div>
          )}
          {statusPencarian !== "success" && (
            <div className="hero-car">
              <img src={mobil} alt="Mobil" />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
