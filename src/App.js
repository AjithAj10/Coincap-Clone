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
        <div className="background">
          <div className="first">
            <div className="head">market cap</div>
            <div className="body">$1.02T</div>
          </div>
          <div className="first">
            <div className="head">Exchange Vol</div>
            <div className="body">$43.80B</div>
          </div>
          <div className="first">
            <div className="head">Assets</div>
            <div className="body">2,295</div>
          </div>
          <div className="first">
            <div className="head">Exchanges</div>
            <div className="body">13,208</div>
          </div>
          <div className="first">
            <div className="head">BTC Dom Index</div>
            <div className="body">37.4%</div>
          </div>
      
        </div>
        <div className="mainBg">
          <CoinList />
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
