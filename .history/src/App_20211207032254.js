import './App.css';
import GoogleMap from './components/GoogleMap';
import mapStyles from "./mapStyles";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <GoogleMap
      defaultZoom={10}
      defaultOptions={{ styles: mapStyles }}
      >
      </GoogleMap>
    </div>
  );
}

export default App;
