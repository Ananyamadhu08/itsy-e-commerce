import "./App.css";

import Footer from "./components/global/Footer";
import Header from "./components/global/Header/Header";
import WebsiteRoutes from "./routes/WebsiteRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <WebsiteRoutes />
      <Footer />
    </div>
  );
}

export default App;
