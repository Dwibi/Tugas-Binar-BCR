import person from "assets/images/person-1.png";
import checklist from "assets/images/checklist.png";
import complete from "assets/images/icon_complete.png";
import price from "assets/images/icon_complete.png";
import hours from "assets/images/icon_24hrs.png";
import profesional from "assets/images/icon_professional.png";
import person_2 from "assets/images/img_photo.png";
import star from "assets/images/testimony_star_rating.png";
import next from "assets/images/next.png";
import previous from "assets/images/previous.png";
import arrow_down from "assets/images/arrow-down.png";

const Home = (props) => {
  return (
    <>
      {/* Awal our services */}
      <section className="section-first" id="our-services">
        <div className="section-first-wrapper">
          <div className="section-first-img">
            <img src={person} alt="persona-1" />
          </div>
          <div className="section-first-title">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
              lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul>
              <li>
                <span>
                  <img src={checklist} alt="checklist" />
                </span>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li>
                <span>
                  <img src={checklist} alt="checklist" />
                </span>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li>
                <span>
                  <img src={checklist} alt="checklist" />
                </span>
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li>
                <span>
                  <img src={checklist} alt="checklist" />
                </span>
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li>
                <span>
                  <img src={checklist} alt="checklist" />
                </span>
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Akhir our services */}

      {/* Awal Why Us */}
      <section className="section-second" id="why-us">
        <div className="section-second-wrapper">
          <h2>Why Us</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div className="section-second-grid">
            <div className="section-second-card">
              <img src={complete} alt="complete" />
              <h3>Mobil Lengkap</h3>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
            <div className="section-second-card">
              <img src={price} alt="price" />
              <h3>Harga Murah</h3>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
            <div className="section-second-card">
              <img src={hours} alt="price" />
              <h3>Layanan 24 Jam</h3>
              <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
            <div className="section-second-card">
              <img src={profesional} alt="price" />
              <h3>Sopir Profesional</h3>
              <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </section>
      {/* Akhir Why Us */}

      {/* awal Testimonial */}
      <section className="section-third" id="testimonial">
        <div className="section-third-wrapper">
          <h2>Testimonial</h2>
          <p>Berbagi review positif dari para pelanggan kami</p>
          <div className="section-third-card">
            <div className="section-third-profile">
              <img src={person_2} alt="profile" />
            </div>
            <div className="section-third-title">
              <img src={star} alt="gambar"></img>
              <h3>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </h3>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
          <div className="section-third-button">
            <button className="previous">
              <img src={previous} alt="previous" />
            </button>
            <button className="next">
              <img src={next} alt="next" />
            </button>
          </div>
        </div>
      </section>
      {/* Akhir Testimonial */}

      {/* Awal Banner */}
      <section className="section-fourth">
        <div className="section-fourth-wrapper">
          <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Mulai Sewa Mobil</button>
        </div>
      </section>
      {/* Akhir Banner */}

      {/* Awal FAQ */}
      <section className="section-fifth" id="faq">
        <div className="section-fifth-wrapper">
          <div className="section-fifth-title">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="section-fifth-list">
            <div className="section-fifth-card">
              <p>Apa saja yang dibutuhkan?</p>
              <button>
                <img src={arrow_down} alt="" />
              </button>
            </div>
            <div className="section-fifth-card">
              <p>Berapa hari minimal sewa mobil lepas kunci?</p>
              <button>
                <img src={arrow_down} alt="" />
              </button>
            </div>
            <div className="section-fifth-card">
              <p>Berapa hari sebelumnya sebaiknya booking sewa mobil?</p>
              <button>
                <img src={arrow_down} alt="" />
              </button>
            </div>
            <div className="section-fifth-card">
              <p>Apakah ada biaya antar-jemput?</p>
              <button>
                <img src={arrow_down} alt="" />
              </button>
            </div>
            <div className="section-fifth-card">
              <p>Bagaimana jika terjadi kecelakaan</p>
              <button>
                <img src={arrow_down} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* AKhir FAQ */}
    </>
  );
};

export default Home;
