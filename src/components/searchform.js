import React from "react";
import {useState} from "react";
const SearchForm =()=>{
    const [departureAirport,setDepartureAirport] = useState('Mangaluru');
    const [parkingCheckIn,setparkingCheckIn] = useState('');
    const [parkingCheckOut,setparkingCheckOut] = useState('');

    const departureAirportHandler=(e)=>{
      const {value} = e.target;
      setDepartureAirport(value);
    }
    const parkingCheckInHandler = (e)=>{
      const {value}  = e.target;
      setparkingCheckIn(value);
    }
    const parkingCheckOutHandler = (e) =>{
      const {value} = e.target;
      setparkingCheckOut(value);
    }

    const onSubmitHandler = (e) =>{
      e.preventDefault();
      console.log('Data Entered:');
      console.log(departureAirport);
      console.log(parkingCheckIn);
      console.log(parkingCheckOut);
    }
    return(
        <section
              id="hero"
              style={{
                backgroundImage: "url('assets/generic_landing.jpg')",
                minHeight: "500px",
              }}
            >
              <div className="hero-backdrop"></div>
              <div className="container position-relative">
                <div className="hero-heading mb-4">
                  <h1>SAVE BIG ON AIRPORT PARKING</h1>
                  <h2>We have the best deals for airport parking lots!</h2>
                </div>
                <div className="searchbox landing">
                  <div className="row tabs">
                    <div className="tab">
                      <div className="heading">Most Convenient</div>
                      <div className="button">
                        <div className="icon">
                          <i className="fas fa-car"></i>
                        </div>
                        Airport Parking Only
                      </div>
                    </div>
                    <div className="tab">
                      <div className="heading">Best Value</div>
                      <div className="button">
                        <div className="icon">
                          <i className="fas fa-bed"></i> +{" "}
                          <i className="fas fa-car"></i>
                        </div>
                        Hotel &amp; Parking Package
                      </div>
                    </div>
                  </div>
                  <form
                    action="/results.html"
                    method="post"
                    autocomplete="off"
                    novalidate=""
                  >
                    <div className="options row m-0">
                      <label className="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
                        <div className="heading mb-1">Departure Airport</div>
                        <div className="placeholder placeholder-airport">
                          <input
                            type="text"
                            placeholder="Departure Airport"
                            className="placeholder placeholder-airport"
                            onChange={departureAirportHandler}
                            value = {departureAirport}
                          />
                        </div>{" "}
                        <i className="fas fa-map-marker-alt input-icon"></i>
                      </label>
                      <div className="col p-0 row m-0 mb-2 dates">
                        <label className="col-sm-6 p-0 pr-sm-3 date_input">
                          <div className="heading mb-1">Parking Check-In</div>
                          <div className="placeholder">
                            <input
                              name="checkin"
                              type="date"
                              placeholder="Parking Check-Out"
                              className="placeholder placeholder-airport"
                              style={{ width: "100%" }}
                              value = {parkingCheckIn}
                              onChange={parkingCheckInHandler}
                            />
                          </div>
                        </label>{" "}
                        <label className="col-sm-6 p-0 pl-sm-0 date_input">
                          <div className="heading mb-1">Parking Check-Out</div>
                          <input
                            name="Check-Out"
                            type="date"
                            placeholder="Parking Check-Out"
                            className="placeholder placeholder-airport"
                            style={{ width: "100%" }}
                            value={parkingCheckOut}
                            onChange={parkingCheckOutHandler}
                          />
                        </label>
                      </div>
                      <div className="col-12 col-xl-2 p-0 pl-xl-3 my-3 my-xl-0">
                        <div className="d-none d-xl-block heading mb-1 invisible">
                          Submit
                        </div>
                        <button
                          type="submit"
                          className="btn btn-secondary btn-big btn-block p-2"
                          onClick={onSubmitHandler}
                        >
                          <span>SEARCH</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
    );
}

export default SearchForm;