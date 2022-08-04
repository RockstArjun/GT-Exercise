import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import DocumentUI from "./components/DocumentUI";
import Share from "./components/Share";
import Footer from "./components/Footer";
import Integrations from "./components/Integrations";
import Hero2 from "./components/Hero2";

function App() {
  return (
    <div id="___gatsby">
      <div motio="outline: none" tabindex="-1" id="gatsby-focus-wrapper">
        <div data="[object Object]" class="chr-0 ek7qqlv0">
          <Navbar />
          <Hero />
          <Logos />
          <Hero2 />
          <DocumentUI />
          <Share />
          <Integrations />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
