import "./App.css";
import CelebrityCardBox from "./components/CeleBrityCardBox/CeleBrityCardBox";
import Header from "./components/Header/Header";
import ReviewsCardBox from "./components/SecondaryHeading/ReviewsCardBox/ReviewsCardBox";

function App() {
  return (
    <div className="App">
      <Header />
      <CelebrityCardBox />
      <ReviewsCardBox />
    </div>
  );
}

export default App;
