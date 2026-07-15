import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Arts from "./pages/Arts";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import BlogPerformanceOptimization from "./pages/BlogPerformanceOptimization";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Router>
      <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Works />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/website-performance-optimization" element={<BlogPerformanceOptimization />} />
          </Routes>
      
     
    </Router>
  );
}

export default App;
