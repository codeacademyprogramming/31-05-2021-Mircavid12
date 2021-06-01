import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherList from "./Layout/Home/component/weatherList";
import axios from "axios";
import * as React from "react";

function App() {
  const [test, setTest] = React.useState([]);
  const [inputValue, setInputValue] = React.useState();
  let newData=[];
  
  const getData = async (setState) => {
    if(inputValue!==undefined){
      let response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=cf26274b17ec94ffc7d21a17c074f233`
      );
      let { data } = response;
      setState(data);
    }
  };
  React.useEffect(() => {
    getData(setTest);
  }, [getData]);
  function handleKeyDown(e){
    if(e.key==='Enter'){
      e.preventDefault();
      setInputValue(e.target.value);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mt-5">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" style={{ float: "left" }}>
                  Enter City name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onKeyDown={(e)=>handleKeyDown(e)}
                />
              </div>
            </form>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="types">
              <div
                className="form-check"
                style={{ position: "absolute", left: 20, top: "20vh" }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Kelvin
                </label>
              </div>
              <div
                className="form-check"
                style={{ position: "absolute", left: 20, top: "10vh" }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Celcius
                </label>
              </div>
              <div
                className="form-check"
                style={{ position: "absolute", left: 20, top: "30vh" }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Fehrenheight
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WeatherList city={test} />
    </div>
  );
}

export default App;
