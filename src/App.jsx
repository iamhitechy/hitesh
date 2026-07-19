import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ThemeToggle from "./components/ThemeToggle";

const Home = lazy(() => import("./pages/Home"));
const Works = lazy(() => import("./pages/Works"));
const Arts = lazy(() => import("./pages/Arts"));
const Skills = lazy(() => import("./pages/Skills"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPerformanceOptimization = lazy(() => import("./pages/BlogPerformanceOptimization"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeToggle />
        <Suspense fallback={<div className="flex h-screen items-center justify-center dark:bg-zinc-950 dark:text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Works />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/website-performance-optimization" element={<BlogPerformanceOptimization />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
