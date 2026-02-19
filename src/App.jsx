import FeaturedSections from "./components/FeaturedSection";
import Footer from "./components/Footer";
import GroupDepartures from "./components/GroupDepartures";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopDestinations from "./components/TopDestinations";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopDestinations />
      <GroupDepartures />
      <FeaturedSections />
      <Footer />
    </>
  );
}

export default App;
