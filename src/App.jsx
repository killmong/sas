import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Quiz from "./Quiz/Quiz";
import Layout from "./components/Layout/Layout";
const App = () => {
  return (
    <Router>
      <Layout>
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
