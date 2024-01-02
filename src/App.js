import { Navbar } from "./component/Navbar/Navbar";
import { Footer } from "./pages/Footer/Footer";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
