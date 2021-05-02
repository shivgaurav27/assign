import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Header from "./components/Header";
import Trip from "./components/Trip";
import TripData from "./components/TripData";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Trip />
        <TripData />
      </div>
    </ThemeProvider>
  );
}

export default App;
