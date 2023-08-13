import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import WeatherForm from "./WeatherForm";

function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <WeatherForm />
      <p>
        This is only the beginning! Entire project is work in progress and it
        can be found openly sourced{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/robertagelo/my-react-weather-app"
        >
          here
        </a>
      </p>
    </div>
  );
}
export default App;
