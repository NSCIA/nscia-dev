import React, { Component } from "react";
import cloud from "../../../../assets/image/cloud.png";

class WeatherWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getWeather: null,
      getPosition: {
        lat: 9.0765,
        long: 7.3986,
      },
      hijriDate: null,
      manualDay: 14,
      error: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.countdown = setInterval(() => {
      this.setState({ manualDay: this.state.manualDay + 1 });
    }, 1000 * 60 * 60 * 21);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;

    // this.setState({ loading: true });
    // console.log(today);
    // fetch(`http://www.wifaqululama.co.uk/hijri?api=1`)
    fetch(`http://api.aladhan.com/v1/gToH?date=${today}`)
      .then((r) => r.clone().json())
      .then((res) =>
        this.setState({ hijriDate: res.data.hijri, loading: false })
      )
      .catch((err) => console.log(err));

    let lat;
    let long;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          lat = res.coords.latitude;
          long = res.coords.longitude;
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c3380f4322080c2925606b60a9b08547`
          )
            .then((re) => re.json())
            .then((res) => this.setState({ getWeather: res }))
            .catch((err) => console.log(err));
          // console.log(long);
          // this.setState({
          //   getPosition: {
          //     lat: res.coords.latitude,
          //     long: res.coords.longitude,
          //   },
          // });
        },
        (err) => this.setState({ error: err })
      );
    } else {
      lat = 9.0765;
      long = 7.3986;
      alert("Geolocation is not supported by this browser.");
    }
  }

  render() {
    let { getPosition, hijriDate, getWeather, loading } = this.state;
    let { lat, long } = getPosition;
    // if (this.state.getPosition) {
    //   lat = this.state.getPosition.lat;
    // }
    if (getWeather !== null) console.log(getWeather);
    const hijr = 13;
    const today = new Date();
    const hr = today.getHours();
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const t = today.toLocaleDateString("en-GB", options);

    return (
      <div className="weather-div">
        <div className="data-container">
          <div className="date-location">
            <h3 className="location" style={{ textTransform: "capitalize" }}>
              {getWeather !== null ? `${getWeather.name}, NG` : "Abuja, NG"}
            </h3>
            <p className="date-hijri">
              {/* {!loading
                ?  */}
              14, Jumāda al-Ūlā 1442 AH
              {/* `${this.state.manualDay}, Jumāda
              al-Ūlā, 1442AH` ? `${hijriDate.month.en} ${hijriDate.day}, $
              {hijriDate.year}AH` */}
              {/* : ""} */}
            </p>
          </div>

          <div className="vert-line"></div>
          <div className="weather-menu">
            <img src={cloud} />
            <div className="weather-temp">
              {getWeather !== null
                ? `${Math.floor(getWeather.main.temp - 273)}°C`
                : "23°C"}
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="divider"></div>
        <p className="date-G">{t}</p>

      </div>
    );
  }
}

export default WeatherWidget;
