import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/searchform";
import { Link} from "react-router-dom";
import "../App.css";
function Homepage() {
  return (
    <>
      <div id="app" className="generic">
        <div className="content">
          <section id="home_page">
            <div className="years-of-service">
              <div className="container">
                For 20 years, we've helped travelers on their way. With free
                cancellations & a customer service team in the US, we are
                committed to serving you.
              </div>
            </div>
            <SearchForm />
            <section id="benefits">
              <div className="container">
                <h5>What Can You Save with AirportParkingReservations.com?</h5>

                <ul className="row">
                  <li className="col-12 col-lg-4 p-3">
                    <img
                      src="/assets/check.png"
                      alt="Tick"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6>Save Money</h6>
                      <p>
                        Save up to 70% off on our site compared to the cost of
                        on-airport parking.
                      </p>
                    </div>
                  </li>
                  <li className="col-12 col-lg-4 p-3">
                    <img
                      src="/assets/check.png"
                      alt="Tick"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6>Save Time</h6>
                      <p>
                        It's easy to compare parking at all major airports.
                        <br />
                        Booking a reservation is quick & simple!
                      </p>
                    </div>
                  </li>
                  <li className="col-12 col-lg-4 p-3">
                    <img
                      src="/assets/check.png"
                      alt="Tick"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6>Save Stress</h6>
                      <p>
                        Guarantee your parking spot by booking in advance. Can't
                        make it? Cancellations are free.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export default Homepage;
