import {
  About,
  Footer,
  Header,
  More,
  Skills,
  Work,
  Experience,
} from "./container/index";
import { Navbar } from "./components/index";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <Skills />
      <About />
      <Experience />
      <Work />

      {/* <More /> */}

      <Footer />
    </div>
  );
}

export default App;
