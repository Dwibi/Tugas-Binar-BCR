import binar from "assets/images/logo-binar.svg";
import mobil from "assets/images/img_car.png";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ history, statusPencarian }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/start-rent-car");
  };
  return (
    <>
      <nav>
        <Link className="navbar-brand" to={"/"}>
          <img src={binar} alt="" width="50" height="50"></img>
        </Link>
        <ul>
          <li className="nav-parent">
            <Link href="#our-services" to={"#our-services"}>
              Our Services
            </Link>
          </li>
          <li>
            <Link href="#why-us" to={"#our-services"}>
              Why Us
            </Link>
          </li>
          <li>
            <Link href="#testimonial" to={"#our-services"}>
              Testimonial
            </Link>
          </li>
          <li>
            <Link href="#faq" to={"#our-services"}>
              FAQ
            </Link>
          </li>
        </ul>

        <div className="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <script src="animation.js"></script>
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
