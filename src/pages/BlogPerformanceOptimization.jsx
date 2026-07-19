import NavigationMenu from '../components/NavigationMenu';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Paragraph = ({ children }) => (
  <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs leading-relaxed">
    {children}
  </p>
);

const Heading = ({ children }) => (
  <h2 className="text-lg font-medium text-black dark:text-white mt-8 mb-3">
    {children}
  </h2>
);

const SubHeading = ({ children }) => (
  <h3 className="text-md font-medium text-black dark:text-white mt-5 mb-2">
    {children}
  </h3>
);

const List = ({ children }) => (
  <ul className="list-disc space-y-2 pl-4 text-sm font-light [&>li>strong]:font-normal [&>li>strong]:text-black dark:text-white dark:[&>li]:text-muted-foreground [&>li>code]:mx-0.5 [&>li>code]:whitespace-nowrap [&>li>code]:rounded-sm [&>li>code]:border [&>li>code]:bg-muted/50 [&>li>code]:px-1 [&>li>code]:text-xs">
    {children}
  </ul>
);

const CodeSnippet = ({ children }) => (
  <div className="no-scroll-bar relative overflow-auto rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-3">
    <figure
      dir="ltr"
      className="rounded-xl shiki relative border outline-none not-prose overflow-hidden text-sm shiki shiki-themes solarized-dark solarized-dark m-0 border-none bg-muted/30 p-4"
      tabIndex="0"
      style={{
        "--shiki-light": "#839496",
        "--shiki-dark": "#839496",
        "--shiki-light-bg": "#002B36",
        "--shiki-dark-bg": "#002B36",
      }}
    >
      <div className="empty:hidden absolute top-1 right-1 z-2 bg-fd-card rounded-bl-lg border-l border-b text-fd-muted-foreground">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-3.5"
          aria-label="Copy Text"
          onClick={(e) => {
            const button = e.currentTarget;
            const pre = button.closest('figure').querySelector('pre');
            if (pre) {
              const text = pre.textContent;
              if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).catch(()=>{});
              } else {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "absolute";
                textArea.style.left = "-999999px";
                document.body.appendChild(textArea);
                textArea.select();
                try { document.execCommand("copy"); } catch (err) {}
                textArea.remove();
              }
            }
            
            const originalHTML = button.innerHTML;
            button.innerHTML = '<span style="font-size: 10px; padding: 0 4px; font-weight: bold;">Copied!</span>';
            setTimeout(() => { button.innerHTML = originalHTML; }, 2000);
          }}
        >
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
            className="lucide"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
        </button>
      </div>
      <div
        className="bg-fd-secondary rounded-lg border text-[13px] py-3.5 overflow-auto max-h-[600px] fd-scroll-container"
        style={{ "--padding-right": "calc(var(--spacing) * 8)" }}
      >
        <div className="[&>pre]:!bg-transparent">
          <pre
            className="shiki vesper"
            style={{ backgroundColor: "#101010", color: "#FFF" }}
            tabIndex="0"
          >
            <code>{children}</code>
          </pre>
        </div>
      </div>
    </figure>
  </div>
);

export default function BlogPerformanceOptimization() {
  return (
    <>
      <Helmet>
        <title>Website Performance Optimization | Hitesh</title>
        <meta name="description" content="A comprehensive guide and checklist for optimizing website performance." />
      </Helmet>
      <article className="page px-4 sm:px-0">
        <div className="flex h-16 items-center justify-between">
          <Link
            aria-label="Back to blogs"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50 text-muted-foreground duration-200 hover:bg-muted hover:text-black dark:text-white"
            to="/blogs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </Link>
        </div>
        
        <div className="my-6 mb-14 space-y-1">
          <h1 className="text-xl">Website Performance Optimization</h1>
          <p className="max-w-lg text-sm text-muted-foreground">
            Learn how to optimize your website for maximum performance and speed to provide the best user experience.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading>1. Images Optimization</Heading>
          <Paragraph>
            Images are usually the heaviest assets on a webpage, often consuming <strong>50-80%</strong> of the total page size. If you don't optimize them, your website will load slowly and users might leave before it even finishes loading.
          </Paragraph>
          <SubHeading>Best Practices</SubHeading>
          <List>
            <li>Use modern formats like WebP or AVIF instead of JPEG or PNG, as they provide better quality at much smaller file sizes.</li>
            <li>Always compress your images before uploading them to the server.</li>
            <li>Use responsive images so that mobile users don't have to download huge desktop-sized assets.</li>
            <li>Implement lazy loading for images that are below the fold (not visible on the screen when the page first loads).</li>
          </List>
          
          <CodeSnippet>
<span className="line"><span style={{ color: "#A0A0A0" }}>&lt;</span><span style={{ color: "#FFC799" }}>img</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>  src=</span><span style={{ color: "#99FFE4" }}>"image.webp"</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>  alt=</span><span style={{ color: "#99FFE4" }}>"Property"</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>  loading=</span><span style={{ color: "#99FFE4" }}>"lazy"</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>/&gt;</span></span>
          </CodeSnippet>

          <SubHeading>Target File Sizes</SubHeading>
          <List>
            <li><strong>Hero Images:</strong> Should ideally be under 300 KB.</li>
            <li><strong>Other Standard Images:</strong> Try to keep them under 150 KB.</li>
          </List>

          <Heading>2. Lazy Loading</Heading>
          <Paragraph>
            Lazy loading is a technique where you delay the loading of non-critical resources (like images or videos) at page load time. Instead, these resources are loaded only when they are needed, such as when the user scrolls down and the image enters the viewport.
          </Paragraph>
          
          <CodeSnippet>
<span className="line"><span style={{ color: "#A0A0A0" }}>&lt;</span><span style={{ color: "#FFC799" }}>img</span><span style={{ color: "#A0A0A0" }}> src=</span><span style={{ color: "#99FFE4" }}>"gallery.webp"</span><span style={{ color: "#A0A0A0" }}> loading=</span><span style={{ color: "#99FFE4" }}>"lazy"</span><span style={{ color: "#A0A0A0" }}> alt=</span><span style={{ color: "#99FFE4" }}>"Gallery"</span><span style={{ color: "#A0A0A0" }}>&gt;</span></span>
          </CodeSnippet>

          <SubHeading>Benefits</SubHeading>
          <List>
            <li>Achieve a faster initial load time because fewer assets are downloaded upfront.</li>
            <li>Reduce bandwidth usage for both you and your users, saving mobile data.</li>
          </List>

          <Heading>3. CSS Optimization</Heading>
          <Paragraph>
            CSS can block the rendering of your page. To ensure your website displays as quickly as possible, you need to write clean and efficient CSS and avoid sending unnecessary code to the browser.
          </Paragraph>
          <SubHeading>Best Practices</SubHeading>
          <List>
            <li>Remove any unused CSS. If a class is not used in your HTML, it shouldn't be in your stylesheet.</li>
            <li>Minify your CSS for production. This removes all whitespace and comments to reduce the overall file size.</li>
            <li>Avoid duplicate styles and keep your CSS modular and reusable.</li>
          </List>
          
          <Paragraph><strong>Bad Approach:</strong> Writing duplicated CSS properties for different elements.</Paragraph>
          <CodeSnippet>
<span className="line"><span style={{ color: "#FFC799" }}>.home</span><span style={{ color: "#FFF" }}> {"{"}</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  padding: 20px;</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>{"}"}</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFC799" }}>.about</span><span style={{ color: "#FFF" }}> {"{"}</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  padding: 20px;</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>{"}"}</span></span>
          </CodeSnippet>

          <Paragraph><strong>Good Approach:</strong> Using a single utility class for shared properties.</Paragraph>
          <CodeSnippet>
<span className="line"><span style={{ color: "#FFC799" }}>.section</span><span style={{ color: "#FFF" }}> {"{"}</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  padding: 20px;</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>{"}"}</span></span>
          </CodeSnippet>

          <Heading>4. JavaScript Optimization</Heading>
          <Paragraph>
            JavaScript is often the main cause of slow performance because it not only has to be downloaded, but it also has to be parsed, compiled, and executed by the browser.
          </Paragraph>
          <SubHeading>Best Practices</SubHeading>
          <List>
            <li>Minify all JS files to compress their size.</li>
            <li>Remove any third-party libraries that you aren't actively using or replace heavy libraries with lighter alternatives.</li>
            <li>Use code splitting. Instead of loading one massive JavaScript bundle on the first load, split your code into smaller chunks and load them dynamically only when needed.</li>
          </List>
          
          <CodeSnippet>
<span className="line"><span style={{ color: "#FFC799" }}>const</span><span style={{ color: "#FFF" }}> Component = React.</span><span style={{ color: "#99FFE4" }}>lazy</span><span style={{ color: "#FFF" }}>((</span><span style={{ color: "#FFF" }}>) =&gt;</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  </span><span style={{ color: "#FFC799" }}>import</span><span style={{ color: "#FFF" }}>(</span><span style={{ color: "#99FFE4" }}>"./Component"</span><span style={{ color: "#FFF" }}>)</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>);</span></span>
          </CodeSnippet>
          <Paragraph><strong>Note:</strong> Avoid loading all JavaScript synchronously on the first page load, as it blocks the browser from rendering the page.</Paragraph>

          <Heading>5. Font Optimization</Heading>
          <Paragraph>
            Custom fonts can make your website look great, but they can also cause text to remain invisible while the font file is downloading (known as Flash of Invisible Text, or FOIT).
          </Paragraph>
          <SubHeading>Best Practices</SubHeading>
          <List>
            <li>Use the WOFF2 format, which offers the best compression rates for web fonts.</li>
            <li>Only load the font weights you actually use. Don't load 10 different weights if your design only uses Regular and Bold.</li>
            <li>Use <code>font-display: swap</code> in your CSS to ensure text remains visible using a fallback system font while your custom font finishes loading.</li>
          </List>
          
          <CodeSnippet>
<span className="line"><span style={{ color: "#FFC799" }}>@font-face</span><span style={{ color: "#FFF" }}> {"{"}</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  font-family: </span><span style={{ color: "#99FFE4" }}>"CustomFont"</span><span style={{ color: "#FFF" }}>;</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  src: </span><span style={{ color: "#99FFE4" }}>url</span><span style={{ color: "#FFF" }}>(</span><span style={{ color: "#99FFE4" }}>"font.woff2"</span><span style={{ color: "#FFF" }}>);</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  font-display: swap;</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>{"}"}</span></span>
          </CodeSnippet>

          <Heading>6. Video Optimization</Heading>
          <Paragraph>
            Videos are incredibly heavy media assets. A single unoptimized video can easily ruin your website's performance and eat up a user's data plan.
          </Paragraph>
          <SubHeading>Best Practices</SubHeading>
          <List>
            <li>Compress your videos heavily before uploading them.</li>
            <li>Do not autoplay large background videos unless they are absolutely essential to the design experience.</li>
            <li>Always provide a <code>poster</code> image for your video tag. This image is shown while the video is loading or before the user clicks play.</li>
            <li>Use <code>preload="none"</code> so the browser doesn't try to download the entire video automatically on page load.</li>
          </List>
          
          <CodeSnippet>
<span className="line"><span style={{ color: "#A0A0A0" }}>&lt;</span><span style={{ color: "#FFC799" }}>video</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>  controls</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>  preload=</span><span style={{ color: "#99FFE4" }}>"none"</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>  poster=</span><span style={{ color: "#99FFE4" }}>"thumbnail.webp"</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>&gt;</span></span>{"\n"}
<span className="line"><span style={{ color: "#A0A0A0" }}>&lt;/</span><span style={{ color: "#FFC799" }}>video</span><span style={{ color: "#A0A0A0" }}>&gt;</span></span>
          </CodeSnippet>

          <Heading>7. Caching</Heading>
          <Paragraph>
            Caching allows the browser to save a copy of your website's files locally on the user's device. When that user visits your site again, the browser can load the files from its local cache instead of downloading them all over again from the server.
          </Paragraph>
          <SubHeading>Benefits</SubHeading>
          <List>
            <li>Drastically faster load times for repeat visitors.</li>
            <li>Significantly reduced load and bandwidth costs on your server.</li>
          </List>
          <SubHeading>Types of Caching</SubHeading>
          <List>
            <li><strong>Browser Cache:</strong> Managed locally by the user's browser.</li>
            <li><strong>CDN Cache:</strong> Handled by intermediary servers distributed around the world.</li>
            <li><strong>Server Cache:</strong> Handled by your origin server.</li>
          </List>

          <Heading>8. CDN (Content Delivery Network)</Heading>
          <Paragraph>
            A CDN is a network of servers distributed globally. When you use a CDN, copies of your website's static files (like images, CSS, and JS) are stored on these servers. When a user visits your site, they download the files from the server physically closest to them, rather than from your main server which could be across the world.
          </Paragraph>
          <SubHeading>Popular CDNs</SubHeading>
          <List>
            <li>Cloudflare</li>
            <li>Amazon CloudFront</li>
            <li>Akamai</li>
          </List>
          <SubHeading>Benefits</SubHeading>
          <List>
            <li>Faster loading speeds for users regardless of their geographic location.</li>
            <li>Reduced latency and improved reliability if your main server goes down.</li>
          </List>

          <Heading>9. Minification</Heading>
          <Paragraph>
            Minification is the process of removing unnecessary characters from your code (like spaces, tabs, and comments) without changing how the code actually functions. This drastically reduces file sizes.
          </Paragraph>
          <SubHeading>CSS Before Minification</SubHeading>
          <CodeSnippet>
<span className="line"><span style={{ color: "#FFC799" }}>body</span><span style={{ color: "#FFF" }}> {"{"}</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  margin: 0;</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>  padding: 0;</span></span>{"\n"}
<span className="line"><span style={{ color: "#FFF" }}>{"}"}</span></span>
          </CodeSnippet>
          <SubHeading>CSS After Minification</SubHeading>
          <CodeSnippet>
<span className="line"><span style={{ color: "#FFF" }}>body{"{margin:0;padding:0}"}</span></span>
          </CodeSnippet>

          <Heading>10. Reduce HTTP Requests</Heading>
          <Paragraph>
            Every single file your website needs to display properly (CSS files, JS files, images, fonts) requires a separate HTTP request to the server. Browsers can only handle a few concurrent requests at a time, so having too many will bottleneck and slow down your site.
          </Paragraph>
          <SubHeading>Bad Approach</SubHeading>
          <List>
            <li>Loading 20 individual CSS Files.</li>
            <li>Loading 15 individual JS Files.</li>
            <li>Loading 50 unoptimized, separate icons.</li>
          </List>
          <SubHeading>Good Approach</SubHeading>
          <List>
            <li>Combine and bundle your CSS into 1 main file.</li>
            <li>Bundle your JS into 1 or a few chunks.</li>
            <li>Combine icons into an SVG sprite or use an icon font.</li>
          </List>

          <Heading>11. Core Web Vitals</Heading>
          <Paragraph>
            Google uses Core Web Vitals to measure the real-world user experience of your website. These metrics directly impact your SEO rankings on Google Search.
          </Paragraph>
          <List>
            <li><strong>LCP (Largest Contentful Paint):</strong> Measures how long it takes for the largest piece of content (usually a hero image or a main text block) to become completely visible. <strong>Target:</strong> Under 2.5 seconds.</li>
            <li><strong>INP (Interaction to Next Paint):</strong> Measures how quickly your website visually responds to user interactions (like clicks or taps). <strong>Target:</strong> Under 200 milliseconds.</li>
            <li><strong>CLS (Cumulative Layout Shift):</strong> Measures how much the website layout shifts unexpectedly while the page is still loading, which can cause users to accidentally click the wrong thing. <strong>Target:</strong> Under 0.1.</li>
          </List>

          <Heading>12. Lighthouse Metrics</Heading>
          <Paragraph>
            Lighthouse is an automated, open-source tool built into Google Chrome that analyzes your website's performance, accessibility, and SEO. 
          </Paragraph>
          <List>
            <li><strong>90-100:</strong> Excellent</li>
            <li><strong>50-89:</strong> Needs Improvement</li>
            <li><strong>0-49:</strong> Poor</li>
          </List>
          <Paragraph>
            You can check your website's scores easily using tools like Google PageSpeed Insights or GTmetrix.
          </Paragraph>

          <Heading>13. Performance Checklist Before Launch</Heading>
          <Paragraph>
            Before you deploy your website to production, make sure you've checked off these essential optimizations to ensure a smooth launch:
          </Paragraph>
          <SubHeading>Images</SubHeading>
          <List>
            <li>Used WebP or AVIF format for all graphics.</li>
            <li>Compressed all files using tools like TinyPNG or Squoosh.</li>
            <li>Added lazy loading to below-the-fold images.</li>
          </List>
          <SubHeading>CSS &amp; JavaScript</SubHeading>
          <List>
            <li>Minified all production files.</li>
            <li>Removed unused CSS and JS.</li>
            <li>Applied code splitting to prevent render-blocking JavaScript.</li>
          </List>
          <SubHeading>Fonts &amp; Videos</SubHeading>
          <List>
            <li>Used WOFF2 format and removed unnecessary font weights.</li>
            <li>Compressed all videos and ensured poster images are added.</li>
          </List>
          <SubHeading>SEO &amp; Performance Targets</SubHeading>
          <List>
            <li>Achieved a Lighthouse performance score above 90.</li>
            <li>Ensured LCP is under 2.5s, CLS is under 0.1, and INP is under 200ms.</li>
          </List>

        </div>
      </article>
      <NavigationMenu />
    </>
  );
}
