import "./App.css";
import { Heading, About, Gallery, Navbar, SpecialMenu, Cuisiner, Video, Awards } from "./components";

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
    </>
  );
}

export default App;
