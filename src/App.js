import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import CoinList from "./Components/CoinList";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import { store } from "./Components/Reducer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <div className="background"></div>
        <div className="mainBg">
          <CoinList />
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
