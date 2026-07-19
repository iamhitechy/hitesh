import NavigationMenu from '../components/NavigationMenu';
import { Helmet } from 'react-helmet-async';

export default function BlogDetail() {
  return (
    <>
      <Helmet>
        <title>Create SVG Line Animation | Hitesh</title>
        <meta name="description" content="Learn how to create an SVG line animation using basic HTML and CSS." />
      </Helmet>
      <article className="page px-4 sm:px-0">
        <div className="flex h-16 items-center justify-between">
          <a
            aria-label="Back to blogs"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50 text-muted-foreground duration-200 hover:bg-muted hover:text-black dark:text-white"
            href="/blogs"
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
          </a>
        </div>
        <div className="my-6 mb-14 space-y-1">
          <h1 className="text-xl">Create Svg Line Animation</h1>
          <p className="max-w-lg text-sm text-muted-foreground">
            {" "}
            Learn to create svg line animation
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            <strong>Requirements:</strong> To create a svg line animation, you
            need to know basic html &amp; css.
          </p>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Now we need a svg path. so let's just take a straight path for now.
          </p>
          <div className="no-scroll-bar relative overflow-auto rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
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
                    <code>
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>&lt;</span>
                        <span style={{ color: "#FFC799" }}>svg</span>
                        <span style={{ color: "#A0A0A0" }}> width=</span>
                        <span style={{ color: "#99FFE4" }}>"200"</span>
                        <span style={{ color: "#A0A0A0" }}> height=</span>
                        <span style={{ color: "#99FFE4" }}>"100"</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>  &lt;</span>
                        <span style={{ color: "#FFC799" }}>path</span>
                        <span style={{ color: "#A0A0A0" }}> d=</span>
                        <span style={{ color: "#99FFE4" }}>"M 0 50 H 200"</span>
                        <span style={{ color: "#A0A0A0" }}> stroke=</span>
                        <span style={{ color: "#99FFE4" }}>"#282828"</span>
                        <span style={{ color: "#A0A0A0" }}> stroke-width=</span>
                        <span style={{ color: "#99FFE4" }}>"2"</span>
                        <span style={{ color: "#A0A0A0" }}> /&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>&lt;/</span>
                        <span style={{ color: "#FFC799" }}>svg</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </figure>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Here, we are creating a svg with a width of 200px and a height of
            100px, and what is <strong>M</strong> &amp; <strong>H</strong> ?
          </p>
          <ul className="list-disc space-y-1 pl-4 text-sm font-light [&>li>strong]:font-normal [&>li>strong]:text-black dark:text-white dark:[&>li]:text-muted-foreground [&>li>code]:mx-0.5 [&>li>code]:whitespace-nowrap [&>li>code]:rounded-sm [&>li>code]:border [&>li>code]:bg-muted/50 [&>li>code]:px-1 [&>li>code]:text-xs">
            <li>
              we are going <strong>50px</strong> down from the top by changing
              y-axis.
            </li>
            <li>
              <strong>M</strong> is used to move the pen to the point, in this
              case it is <code>0 50</code> (x y).
            </li>
            <li>
              <strong>H</strong> is used to draw a horizontal line from the
              current position (Which is M 0 50 in our case) to the given
              coordinates <code>100 50</code> (x y), which is straight line to
              x-axis.
            </li>
          </ul>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Now Let's see how this line looks like.
          </p>
          <div className="relative rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
            <div className="m-0 flex min-h-20 items-center justify-center rounded-xl border-none bg-muted/30 p-4">
              <svg width="200" height="100">
                <path d="M 0 50 H 200" stroke="#282828" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            So, we have a line now.
          </p>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Let's try to animate this line - with a light moving from left to
            right, To animate this we need to use few things.
          </p>
          <ul className="list-disc space-y-1 pl-4 text-sm font-light [&>li>strong]:font-normal [&>li>strong]:text-black dark:text-white dark:[&>li]:text-muted-foreground [&>li>code]:mx-0.5 [&>li>code]:whitespace-nowrap [&>li>code]:rounded-sm [&>li>code]:border [&>li>code]:bg-muted/50 [&>li>code]:px-1 [&>li>code]:text-xs">
            <li>A circle tag</li>
            <li>A path mask</li>
          </ul>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Let's start with a circle tag.
          </p>
          <div className="no-scroll-bar relative overflow-auto rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
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
                    <code>
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>&lt;</span>
                        <span style={{ color: "#FFC799" }}>circle</span>
                        <span style={{ color: "#A0A0A0" }}> cx=</span>
                        <span style={{ color: "#99FFE4" }}>"50%"</span>
                        <span style={{ color: "#A0A0A0" }}> cy=</span>
                        <span style={{ color: "#99FFE4" }}>"50%"</span>
                        <span style={{ color: "#A0A0A0" }}> r=</span>
                        <span style={{ color: "#99FFE4" }}>"20"</span>
                        <span style={{ color: "#A0A0A0" }}> fill=</span>
                        <span style={{ color: "#99FFE4" }}>"white"</span>
                        <span style={{ color: "#A0A0A0" }}> /&gt;</span>
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </figure>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Here, we are creating a circle with a radius of <strong>20px</strong>,
            and a fill of white.
          </p>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Now, let's see how this circle looks like.
          </p>
          <div className="relative rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
            <div className="m-0 flex min-h-20 items-center justify-center rounded-xl border-none bg-muted/30 p-4">
              <svg width="200" height="100">
                <path d="M 0 50 H 200" stroke="#282828" strokeWidth="2"></path>
                <circle cx="50%" cy="50%" r="20" fill="white"></circle>
              </svg>
            </div>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Amazing - we got a cute circle right there in middle beacuse we are
            moving circle <strong>-50%</strong> from x-axis and{" "}
            <strong>-50%</strong> from y-axis - from original <code>0 0</code>{" "}
            position.
          </p>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Now, we need to create a path mask. here is the code for that.
          </p>
          <div className="no-scroll-bar relative overflow-auto rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
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
                    <code>
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>&lt;</span>
                        <span style={{ color: "#FFC799" }}>mask</span>
                        <span style={{ color: "#A0A0A0" }}> id=</span>
                        <span style={{ color: "#99FFE4" }}>"circle-path-mask"</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>  &lt;</span>
                        <span style={{ color: "#FFC799" }}>path</span>
                        <span style={{ color: "#A0A0A0" }}> d=</span>
                        <span style={{ color: "#99FFE4" }}>"M 0 50 H 200"</span>
                        <span style={{ color: "#A0A0A0" }}> stroke=</span>
                        <span style={{ color: "#99FFE4" }}>"white"</span>
                        <span style={{ color: "#A0A0A0" }}> stroke-width=</span>
                        <span style={{ color: "#99FFE4" }}>"2"</span>
                        <span style={{ color: "#A0A0A0" }}> /&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>&lt;/</span>
                        <span style={{ color: "#FFC799" }}>mask</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </figure>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Did you notice something similar to our line code? Yes, we are using
            the same path which we used to create a line - but this time it's a
            mask and it's invisible.
          </p>
          <ul className="list-disc space-y-1 pl-4 text-sm font-light [&>li>strong]:font-normal [&>li>strong]:text-black dark:text-white dark:[&>li]:text-muted-foreground [&>li>code]:mx-0.5 [&>li>code]:whitespace-nowrap [&>li>code]:rounded-sm [&>li>code]:border [&>li>code]:bg-muted/50 [&>li>code]:px-1 [&>li>code]:text-xs">
            <li>
              <strong>Note:</strong> make sure to define the mask in{" "}
              <code>&lt;defs&gt;</code> tag.
            </li>
          </ul>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Let's combine all code and see how it looks like.
          </p>
          <div className="no-scroll-bar relative overflow-auto rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
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
                    <code>
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>&lt;</span>
                        <span style={{ color: "#FFC799" }}>svg</span>
                        <span style={{ color: "#A0A0A0" }}> width=</span>
                        <span style={{ color: "#99FFE4" }}>"200"</span>
                        <span style={{ color: "#A0A0A0" }}> height=</span>
                        <span style={{ color: "#99FFE4" }}>"100"</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>  &lt;</span>
                        <span style={{ color: "#FFC799" }}>path</span>
                        <span style={{ color: "#A0A0A0" }}> d=</span>
                        <span style={{ color: "#99FFE4" }}>"M 0 50 H 200"</span>
                        <span style={{ color: "#A0A0A0" }}> stroke=</span>
                        <span style={{ color: "#99FFE4" }}>"#282828"</span>
                        <span style={{ color: "#A0A0A0" }}> stroke-width=</span>
                        <span style={{ color: "#99FFE4" }}>"2"</span>
                        <span style={{ color: "#A0A0A0" }}> /&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>  &lt;</span>
                        <span style={{ color: "#FFC799" }}>circle</span>
                        <span style={{ color: "#A0A0A0" }}> cx=</span>
                        <span style={{ color: "#99FFE4" }}>"50%"</span>
                        <span style={{ color: "#A0A0A0" }}> cy=</span>
                        <span style={{ color: "#99FFE4" }}>"50%"</span>
                        <span style={{ color: "#A0A0A0" }}> r=</span>
                        <span style={{ color: "#99FFE4" }}>"20"</span>
                        <span style={{ color: "#A0A0A0" }}> fill=</span>
                        <span style={{ color: "#99FFE4" }}>"white"</span>
                        <span style={{ color: "#A0A0A0" }}> mask=</span>
                        <span style={{ color: "#99FFE4" }}>"url(#circle-path-mask)"</span>
                        <span style={{ color: "#A0A0A0" }}> /&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>  &lt;</span>
                        <span style={{ color: "#FFC799" }}>defs</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>    &lt;</span>
                        <span style={{ color: "#FFC799" }}>mask</span>
                        <span style={{ color: "#A0A0A0" }}> id=</span>
                        <span style={{ color: "#99FFE4" }}>"circle-path-mask"</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>      &lt;</span>
                        <span style={{ color: "#FFC799" }}>path</span>
                        <span style={{ color: "#A0A0A0" }}> d=</span>
                        <span style={{ color: "#99FFE4" }}>"M 0 50 H 200"</span>
                        <span style={{ color: "#A0A0A0" }}> stroke=</span>
                        <span style={{ color: "#99FFE4" }}>"white"</span>
                        <span style={{ color: "#A0A0A0" }}> stroke-width=</span>
                        <span style={{ color: "#99FFE4" }}>"2"</span>
                        <span style={{ color: "#A0A0A0" }}> /&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>    &lt;/</span>
                        <span style={{ color: "#FFC799" }}>mask</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>  &lt;/</span>
                        <span style={{ color: "#FFC799" }}>defs</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#A0A0A0" }}>&lt;/</span>
                        <span style={{ color: "#FFC799" }}>svg</span>
                        <span style={{ color: "#A0A0A0" }}>&gt;</span>
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </figure>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Here, we are using the path id <code>circle-path-mask</code> to mask
            the circle. and we are using the <code>url()</code> function to
            reference the mask.
          </p>
          <div className="relative rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
            <div className="m-0 flex min-h-20 items-center justify-center rounded-xl border-none bg-muted/30 p-4">
              <svg width="200" height="100">
                <path d="M 0 50 H 200" stroke="#282828" strokeWidth="2"></path>
                <circle
                  cx="50%"
                  cy="50%"
                  r="20"
                  fill="white"
                  mask="url(#circle-path-mask)"
                ></circle>
                <defs>
                  <mask id="circle-path-mask">
                    <path d="M 0 50 H 200" stroke="white" strokeWidth="2"></path>
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Woah - we got a circle with mask applied to it.
          </p>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Now, Our last step is to animate the circle, from left to right. we
            will be using <code>CSS</code> to animate the circle.
          </p>
          <div className="no-scroll-bar relative overflow-auto rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
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
                    <code>
                      <span className="line">
                        <span style={{ color: "#FFF" }}>.animate</span>
                        <span style={{ color: "#A0A0A0" }}>-</span>
                        <span style={{ color: "#FFF" }}>circle</span>
                        <span style={{ color: "#A0A0A0" }}>-</span>
                        <span style={{ color: "#FFF" }}>line {"{"}</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFC799" }}>  animation</span>
                        <span style={{ color: "#FFF" }}>: animate</span>
                        <span style={{ color: "#A0A0A0" }}>-</span>
                        <span style={{ color: "#FFF" }}>circle</span>
                        <span style={{ color: "#A0A0A0" }}>-</span>
                        <span style={{ color: "#FFF" }}>line 2s linear infinite;</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFF" }}>{"}"}</span>
                      </span>
                      {"\n"}
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFF" }}>@keyframes animate</span>
                        <span style={{ color: "#A0A0A0" }}>-</span>
                        <span style={{ color: "#FFF" }}>circle</span>
                        <span style={{ color: "#A0A0A0" }}>-</span>
                        <span style={{ color: "#FFF" }}>line {"{"}</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFC799" }}>  0</span>
                        <span style={{ color: "#A0A0A0" }}>%</span>
                        <span style={{ color: "#FFF" }}> {"{"}</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFC799" }}>    transform</span>
                        <span style={{ color: "#FFF" }}>: </span>
                        <span style={{ color: "#FFC799" }}>translateX</span>
                        <span style={{ color: "#FFF" }}>(</span>
                        <span style={{ color: "#FFC799" }}>0</span>
                        <span style={{ color: "#FFF" }}>);</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFF" }}>  {"}"}</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFC799" }}>  100</span>
                        <span style={{ color: "#A0A0A0" }}>%</span>
                        <span style={{ color: "#FFF" }}> {"{"}</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFC799" }}>    transform</span>
                        <span style={{ color: "#FFF" }}>: </span>
                        <span style={{ color: "#FFC799" }}>translateX</span>
                        <span style={{ color: "#FFF" }}>(</span>
                        <span style={{ color: "#FFC799" }}>100</span>
                        <span style={{ color: "#A0A0A0" }}>%</span>
                        <span style={{ color: "#FFF" }}>);</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFF" }}>  {"}"}</span>
                      </span>
                      {"\n"}
                      <span className="line">
                        <span style={{ color: "#FFF" }}>{"}"}</span>
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </figure>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Now lets apply this class to our circle tag.
          </p>
          <div className="relative rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
            <div className="m-0 flex min-h-20 items-center justify-center rounded-xl border-none bg-muted/30 p-4">
              <svg width="200" height="100">
                <path d="M 0 50 H 200" stroke="#282828" strokeWidth="2"></path>
                <circle
                  className="animate-circle-line"
                  cx="50%"
                  cy="50%"
                  r="20"
                  fill="white"
                  mask="url(#circle-path-mask)"
                ></circle>
                <defs>
                  <mask id="circle-path-mask">
                    <path d="M 0 50 H 200" stroke="white" strokeWidth="2"></path>
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Damn - its moving? but it's not moving from left to right. its
            moving from center to right.
          </p>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            To Fix this lets change <strong>-50%</strong> to <strong>0%</strong>{" "}
            from <code>cx</code> attribute from our circle tag.
          </p>
          <div className="relative rounded-2xl border !bg-transparent p-1 sm:-mx-4 sm:my-2">
            <div className="m-0 flex min-h-20 items-center justify-center rounded-xl border-none bg-muted/30 p-4">
              <svg width="200" height="100">
                <path d="M 0 50 H 200" stroke="#282828" strokeWidth="2"></path>
                <circle
                  className="animate-circle-line"
                  cx="0%"
                  cy="50%"
                  r="20"
                  fill="white"
                  mask="url(#circle-path-mask)"
                ></circle>
                <defs>
                  <mask id="circle-path-mask">
                    <path d="M 0 50 H 200" stroke="white" strokeWidth="2"></path>
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-sm font-light text-muted-foreground [&>strong]:text-foreground [&>code]:mx-0.5 [&>code]:whitespace-nowrap [&>code]:rounded-sm [&>code]:border [&>code]:bg-muted/50 [&>code]:px-1 [&>code]:text-xs">
            Hehe - it's moving from left to right. That's it.
          </p>
        </div>
      </article>
      <NavigationMenu />
    </>
  );
}
