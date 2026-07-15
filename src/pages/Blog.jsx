import NavigationMenu from '../components/NavigationMenu';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <>
      <div className="page">
        <div className="page-col">
          <h1 className="doto-font text-2xl font-bold">
            <span className="relative">
              <span>Blogs</span>
            </span>{" "}
            <span className="jetbrains-mono h-fit text-xs font-light tracking-tight text-muted-foreground duration-200 group-hover:text-black dark:group-hover:text-white ml-2">
              <span>Where i write about craft :)</span>
            </span>
          </h1>
          <div className="mt-4 flex flex-col gap-8">
            <Link to="/blog/website-performance-optimization">
              <div className="group relative flex cursor-pointer flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right absolute right-0 size-4 -rotate-45 opacity-0 duration-300 group-hover:opacity-100"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <div className="absolute inset-0 -mx-4 -my-4 rounded-xl bg-muted opacity-0 duration-300 group-hover:opacity-20"></div>
                <h2 className="text-sm text-black dark:text-white">Website Performance Optimization</h2>
                <p className="text-sm text-muted-foreground">
                  A comprehensive guide and checklist for optimizing website performance
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <NavigationMenu />
    </>
  );
}
