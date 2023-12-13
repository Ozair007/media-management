import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Discussions from "./pages/discussions/Discussions";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="m-4">
        <Discussions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
