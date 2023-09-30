import "./App.css";
import { Heading, About, Gallery, Navbar, SpecialMenu, Cuisiner, Video, Awards, Footer, LocateUs } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Heading />
      <About />
      <SpecialMenu />
      <Cuisiner />
      <Video />
      <Awards />
      <Gallery />
      <LocateUs />
      <Footer />
    </>
  );
}

export default App;
