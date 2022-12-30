import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./sass/style.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* <div id="preloadder"></div> */}
        <header className="primary-header">
          <div className="left-part">
            <img src="./images/logo/game-of-thrones.svg" alt="" />
            <div className="logo">
              <h1>
                G<span>AM</span>E&nbsp;&nbsp;OF&nbsp;&nbsp;T<span>RI</span>PS
              </h1>
            </div>
          </div>
          <div className="right-part">
            <div className="navbar">
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#tour">Tours</a>
                </li>
                <li>
                  <a href="#media">Media</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                {/* <li>
                  <a href="#">Login</a>
                </li> */}
              </ul>
              {/* <div className="btn-group">
                <a href="#" className="btn btn-try">
                  <span>Book A Tour</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
            <div className="ham-menu">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </header>

        <main>
          <section className="banner" id="banner">
            <div className="banner-text">
              <h1>Game Of Trips</h1>
              <p>
                <span>GAME OF TRIPS</span> Travel offers a great selection of
                Desert tours, including self drive tours, road trips, guided
                tours and day tours. Book online.
              </p>
              <a href="#" className="btn btn-get">
                <span>Explore</span>
              </a>
            </div>
            <div className="overlay2"></div>
          </section>

          <section className="explore" id="explore">
            <div className="main-text">
              <h2>Explore</h2>
              <h1>
                <span>D</span>esert World
              </h1>
              <p>This place amazes with its fabulous atmosphere and nature</p>
            </div>
            <div className="main-container">
              <div className="image-box image-1">
                <img src="./images/marrakech-4.jpg" alt="" />
                <div className="overlay"></div>
                <div className="image-box-text">
                  <h2>Marrakech</h2>
                  <p>Enchanting Waterfall</p>
                </div>
              </div>
              <div className="image-box image-1">
                <img src="./images/ouar-2.jpg" alt="" />
                <div className="overlay"></div>
                <div className="image-box-text">
                  <h2>Ouarzazate</h2>
                  <p>Capital of Iceland</p>
                </div>
              </div>
              <div className="image-box image-1">
                <img src="./images/merzouga-17.jpg" alt="" />
                <div className="overlay"></div>
                <div className="image-box-text">
                  <h2>Merzouga</h2>
                  <p>Famous Lake</p>
                </div>
              </div>
              {/* <div className="image-box image-1">
                <img src="./images/merzouga-17.jpg" alt="" />
                <div className="overlay"></div>
                <div className="image-box-text">
                  <h2>Merzouga</h2>
                  <p>Famous Lake</p>
                </div>
              </div> */}
            </div>
            <button className="btn btn-view-all">View More</button>
          </section>

          <section className="about" id="about">
            <div className="main-text">
              <h2>About</h2>
              <h1>
                Unforgettable <span>S</span>ensations
              </h1>
              <p>
                Game of Trips  adventure is a tours of the best places in Morocco. We
                will help make your trip perfect, find the chepest tickets, Book
                the best hotels Nothing will stop you from enjoying the
                atmosphere of the ice country.
              </p>
            </div>
            {/* <div className="main-container">
              <video src="./merzouga-mp4.mp4" autoPlay loop muted></video>
            </div> */}
          </section>

          <section className="tour" id="tour">
            <div className="main-text">
              <h2>2021</h2>
              <h1>Tours</h1>
            </div>
            <div className="main-container">
              <div className="tour-cards">
                <div className="image-box">
                  <img src="./images/merzouga-3.jpg" alt="Blue Lagoon" />
                  <div className="overlay"></div>
                  <div className="image-box-text">
                    <h2>Blue Lagoon</h2>
                    <p>Beach Resort</p>
                  </div>
                </div>
                <div className="tour-cards-text">
                  <h1>Blue Lagoon 1 Week Trip </h1>
                  <p>
                    A Week long trip around the iceland with a tour of the most
                    famous sights of the island of sages.The Blue Lagoon is a
                    geothermal spa in southwestern Iceland. The spa is located
                    in a lava field near Grindavík and in front of Mount
                    Þorbjörn on Reykjanes Peninsula, in a location favourable
                    for geothermal power, and is supplied by water used in the
                    nearby Svartsengi geothermal power station.
                  </p>
                  <a href="#" className="btn-map">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>View Route Map</span>
                  </a>
                  <div className="price">
                    <p>
                      $4540 <span>Per person</span>
                    </p>
                    <h2>9 Days 18 Nights</h2>
                  </div>
                </div>
              </div>
              <div className="tour-cards">
                <div className="image-box">
                  <img src="./images/merzouga-4.jpg" alt="West Iceland" />
                  <div className="overlay"></div>
                  <div className="image-box-text">
                    <h2>West Iceland</h2>
                    <p>Valleys & Volcanoes</p>
                  </div>
                </div>
                <div className="tour-cards-text">
                  <h1>West Iceland Family Trip</h1>
                  <p>
                    A Week long family trip around the west iceland with a tour
                    of the most famous sights of the island likes valleys and
                    volcanoes etc.The west of Iceland is an enormous area
                    characterized by fjords, valleys, volcanoes and craters. The
                    most famous attraction in the west is undoubtedly the
                    Snæfellsnes peninsula that is home to the mighty
                    Snaefellsjokull glacier as well as mt. Kirkjufell, also
                    known as the arrowhead mountain from Game of Thrones.
                  </p>
                  <a href="#" className="btn-map">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>View Route Map</span>
                  </a>
                  <div className="price">
                    <p>
                      $2549 <span>Per person</span>
                    </p>
                    <h2>12 Days 24 Nights</h2>
                  </div>
                </div>
              </div>

              <div className="tour-cards">
                <div className="image-box">
                  <img
                    src="./images/merzouga-5.jpg"
                    alt="Stakkholtsgja canyon "
                  />
                  <div className="overlay"></div>
                  <div className="image-box-text">
                    <h2>Stakkholtsgja</h2>
                    <p>Mountains & Waterfall</p>
                  </div>
                </div>
                <div className="tour-cards-text">
                  <h1>Stakkholtsgja canyon Trip</h1>
                  <p>
                    A Week long trip around the south iceland with hiking
                    guides. Stakkholtsgjá is a wondrous canyon, situated in
                    Southern part of the Icelandic Highlands. It is highly-known
                    for the magical hiking trail that leads to a majestic
                    waterfall. The gorge is a part of the Þórsmörk Nature
                    Reserve. Every bit of Stakkholtsgjá canyon shines out with
                    picturesque beauty. Stakkholtsgjá is about a hundred meters
                    deep.
                  </p>
                  <a href="#" className="btn-map">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>View Route Map</span>
                  </a>
                  <div className="price">
                    <p>
                      $5200 <span>Per person</span>
                    </p>
                    <h2>18 Days 36 Nights</h2>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-view-all">View More</button>
          </section>

          <section className="sale" id="sale">
            <div className="overlay1"></div>
            <div className="main-container">
              <div className="heading">
                <h1>Merzouga</h1>
                <h2>Sale</h2>
              </div>
              <div className="info">
                <p>
                  Tours run from September to aprill when the forecast is
                  favourable. Experts will take care of every thing they know
                  where to look for the northern lights how to photograph it,how
                  to move to where the forecast is most likely and the clouds
                  are least of all.
                </p>
              </div>
              <div className="price">
                <p>
                  $2400<span>Per person</span>
                </p>
                <h2>15 Days 14 Nights</h2>
              </div>
            </div>
            <div className="overlay2"></div>
          </section>

          <section className="media" id="media">
            <div className="main-text">
              <h2>Media</h2>
              <h1>Morocco in Footage</h1>
            </div>
            <div className="main-container">
              <div className="image image-1">
                <img src="./images/chefch.jpg" alt="Erupting Volcano" />
                <h3>Chefchaouen</h3>
              </div>
              <div className="image image-2">
                <img src="./images/marrakech-4.jpg" alt="Icelandic horses " />
                <h3>Marrakech</h3>
              </div>
              <div className="image image-3">
                <img src="./images/merzouga-11.jpg" alt="Hvítserkur" />
                <h3>Merzouga</h3>
              </div>
              <div className="image image-4">
                <img src="./images/fes.jpg" alt="Flatey village" />
                <h3>Fès</h3>
              </div>
              <div className="image image-5">
                <img
                  src="./images/ouar-3.jpg"
                  alt="Parliament of Puffins"
                />
                <h3>Ouarzazate</h3>
              </div>
              <div className="image image-6">
                <img src="./images/essaou.jpg" />
                <h3>Essaouira</h3>
              </div>
              <div className="image image-7">
                <img src="./images/agadir.jpg" 
                alt="Reykjavík City" />
                <h3>Agadir</h3>
              </div>
              <div className="image image-8">
                <img
                src="./images/rabat.jpg"
                  alt="Rabat"
                />
                <h3>Rabat</h3>
              </div>
              <div className="image image-9">
                <img
                  src="./images/tanger-1.jpg"
                  alt="Iceland Caves"
                />
                <h3>Tanger</h3>
              </div>
              {/* <div className="image image-10">
                <img
                  src="./images/merzouga-11.jpg"
                  alt="Gigjökull"
                />
                <h3>Gigjökull</h3>
              </div>
              <div className="image image-11">
                <img
                  src="./images/merzouga-11.jpg"
                  alt="Aurora"
                />
                <h3>Aurora</h3>
              </div>
              <div className="image image-12">
                <img
                  src="./images/merzouga-8.jpg"
                  alt="Solheimasandur Plane Wreck"
                />
                <h3>Solheimasandur Plane Wreck</h3>
              </div> */}
            </div>
          </section>

          <section className="contact" id="contact">
            <div className="main-text">
              <h2>Contact</h2>
              <h1>Get in touch</h1>
            </div>
            <div className="main-container">
              <form action="#">
                <div className="name">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your name "
                    id="name"
                    name="name"
                  />
                </div>
                <div className="phone">
                  <label htmlFor="phone">Email or Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Number or phone"
                  />
                </div>
                <div className="message">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Tell us about your interests passion needs and any other details relevent to your trip"
                  ></textarea>
                </div>
                <button className="btn-send">Send</button>
              </form>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer-image">
            <div className="overlay1"></div>
            <div className="overlay2"></div>
          </div>
          <div className="main-container">
            <div className="heading-foo">
              <img src="./images/morocco.svg" alt="" />
              <h1>Morocco</h1>
              <p>
                
              </p>
            </div>
            <div className="social-media">
              <h1>Connect with us</h1>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </li>
              </ul>
            </div>
            <div className="main">
              <h1>Quick Links</h1>
              <ul>
                <li>
                  <a href="#explore">Explore</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#tour">Tours</a>
                </li>
                <li>
                  <a href="#media">Media</a>
                </li>
              </ul>
            </div>
            <div className="contact-info">
              <h1>Contacts</h1>
              <div className="contact-info-text">
                <p>+212624855867</p>
                <p>mustapha.ouadidou@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="credit">
            <h3>
              🖥️ Design and Developed By 🧑
              <a href="https://github.com/labas455"> OUADIDOU Mustapha</a>
            </h3>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
