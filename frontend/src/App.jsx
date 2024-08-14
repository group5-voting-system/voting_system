import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./page/Header"; // قم باستيراد مكون Header
import Home from "./page/Home";

// افترض أنك أنشأت مكون Home
// import Vote from "./Vote"; // افترض أنك أنشأت مكون Vote
// import Apply from "./Apply"; // افترض أنك أنشأت مكون Apply
// import Services from "./Services"; // افترض أنك أنشأت مكون Services
// import Results from "./Results"; // افترض أنك أنشأت مكون Results
// import Contact from "./Contact"; // افترض أنك أنشأت مكون Contact

function App() {
  return (
    <Router>
      <Header /> {/* إضافة Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/vote" element={<Vote />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/services" element={<Services />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
