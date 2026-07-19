import React from "react";
import { Helmet } from "react-helmet-async";
import NavigationMenu from "../components/NavigationMenu";

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills & Technologies | Hitesh</title>
        <meta name="description" content="Explore Hitesh's technical skills, including React, NextJs, TailwindCSS, and MongoDB." />
      </Helmet>
      <div className="page">
        <div className="page-col">
          <h1 className="doto-font text-2xl font-bold">
            <span className="relative">
              <span>Skills</span>
            </span>
            {' '}
            <span className="jetbrains-mono h-fit text-xs font-light tracking-tight text-muted-foreground duration-200 group-hover:text-black dark:group-hover:text-white ml-2">
              <span>Which I use? See below</span>
            </span>
          </h1>
          <div>
            <span className="text-sm text-muted-foreground">
              My main Tech stack is
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border mx-1 h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="15.974" r="2.5" style={{ fill: "rgb(0, 216, 255)" }}></circle>
                  <path d="M16 21.706a28.4 28.4 0 0 1-8.88-1.2 11.3 11.3 0 0 1-3.657-1.958A3.54 3.54 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.8 28.8 0 0 1 16 10.293a28.7 28.7 0 0 1 9.022 1.324 11.4 11.4 0 0 1 3.538 1.866A3.4 3.4 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a28 28 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2 0 .928 1.349 2.387 4.311 3.4A27.2 27.2 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.33 2.33 0 0 0-1.01-1.573 10.2 10.2 0 0 0-3.161-1.654A27.5 27.5 0 0 0 16 11.489" style={{ fill: "rgb(0, 216, 255)" }}></path>
                  <path d="M10.32 28.443a2.64 2.64 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.8 28.8 0 0 1 3.4-8.593 28.7 28.7 0 0 1 5.653-7.154 11.4 11.4 0 0 1 3.384-2.133 3.4 3.4 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.8 28.8 0 0 1-3.316 8.133 28.4 28.4 0 0 1-5.476 7.093 11.3 11.3 0 0 1-3.523 2.189 4.9 4.9 0 0 1-1.624.307m1.773-14.7a28 28 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114.8.463 2.742.024 5.1-2.036a27.2 27.2 0 0 0 5.227-6.79 27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.33 2.33 0 0 0-1.868.089A10.2 10.2 0 0 0 17.5 6.9a27.5 27.5 0 0 0-5.4 6.849Z" style={{ fill: "rgb(0, 216, 255)" }}></path>
                  <path d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.8 28.8 0 0 1-5.747-7.237 28.7 28.7 0 0 1-3.374-8.471 11.4 11.4 0 0 1-.158-4A3.4 3.4 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934 28.4 28.4 0 0 1 3.41 8.287 11.3 11.3 0 0 1 .137 4.146 3.54 3.54 0 0 1-1.494 2.555 2.6 2.6 0 0 1-1.315.324m-9.58-10.2a28 28 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9.8-.465 1.39-2.363.782-5.434A27.2 27.2 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.33 2.33 0 0 0-.855 1.662 10.2 10.2 0 0 0 .153 3.565 27.5 27.5 0 0 0 3.236 8.1Z" style={{ fill: "rgb(0, 216, 255)" }}></path>
                </svg>
                React
              </button>
              framework with
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border mx-1 h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                <svg viewBox="0 -51 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="a"><stop stopColor="#2298BD" offset="0%"></stop><stop stopColor="#0ED7B5" offset="100%"></stop></linearGradient></defs>
                  <path d="M128 0Q76.8 0 64 51.2 83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2 19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8" fill="url(#a)"></path>
                </svg>
                TailwindCSS
              </button>
         
              CSS as a styling library, for the database I use
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border mx-1 h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.62 30c-.25-.083-.5-.166-.751-.249 0 0 .1-3.8-1.275-4.067-.9-1.048.133-44.741 3.423-.149a2.7 2.7 0 0 0-1.333 1.523A14 14 0 0 0 16.62 30" fill="#a9a889"></path>
                  <path d="M17.026 26.329a13.22 13.22 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a10 10 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187" fill="#48a547"></path>
                  <path d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.73 1.73 0 0 0 15.846 2c.381.82.319 12.243.359 13.579.155 5.197-.289 10.009-.718 10.99" fill="#41a247"></path>
                </svg>
                MongoDB
              </button>
              and for deployment I use
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border mx-1 h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fff" d="M24 22.525H0l12-21.05z"></path>
                </svg>
                Vercel
              </button>
              .
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="carrois-gothic-sc text-sm text-muted-foreground/70">
                &lt;core/&gt;
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3.5 [&amp;_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#F7DF1C"
                      d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-.888 0-2.024-.148-2.764-.395l.42-3.036a6.2 6.2 0 0 0 1.925.296c1.58 0 2.567-.716 2.567-3.282zm7.008 12.785c.987.518 2.567 1.037 4.171 1.037 1.728 0 2.641-.716 2.641-1.826 0-1.012-.79-1.629-2.789-2.32-2.764-.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258.37 4.245.839l-.839 3.011a7.8 7.8 0 0 0-3.455-.79c-1.629 0-2.419.765-2.419 1.604 0 1.061.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-.518-4.714-1.037l.765-3.085z"
                    ></path>
                  </svg>
                  JavaScript
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3.5 [&amp;_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281 6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383 2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333 4.76 4.76 0 0 1-3.932 2.815 11 11 0 0 1-2.708-.028 6.53 6.53 0 0 1-3.616-1.884 6.3 6.3 0 0 1-.926-1.371 3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6.214.312a4.8 4.8 0 0 0 1.35 1.292 3.3 3.3 0 0 0 3.458-.175 1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055 4.7 4.7 0 0 1-.976-1.777 7.1 7.1 0 0 1-.062-2.268 4.33 4.33 0 0 1 3.644-3.374 9 9 0 0 1 2.691.084m-8.343 1.483.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"
                      style={{ fill: "rgb(0, 122, 204)" }}
                    ></path>
                  </svg>
                  TypeScript
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3.5 [&amp;_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.902 27.201 3.655 2h24.69l-2.25 25.197L15.985 30z"
                      style={{ fill: "rgb(228, 79, 38)" }}
                    ></path>
                    <path
                      d="m16 27.858 8.17-2.265 1.922-21.532H16z"
                      style={{ fill: "rgb(241, 102, 42)" }}
                    ></path>
                    <path
                      d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zm0 8.027-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z"
                      style={{ fill: "rgb(235, 235, 235)" }}
                    ></path>
                    <path
                      d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83z"
                      style={{ fill: "rgb(255, 255, 255)" }}
                    ></path>
                  </svg>
                  HTML
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3.5 [&amp;_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.902 27.201 3.656 2h24.688l-2.249 25.197L15.985 30z"
                      style={{ fill: "rgb(21, 114, 182)" }}
                    ></path>
                    <path
                      d="m16 27.858 8.17-2.265 1.922-21.532H16z"
                      style={{ fill: "rgb(51, 169, 220)" }}
                    ></path>
                    <path
                      d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16z"
                      style={{ fill: "rgb(255, 255, 255)" }}
                    ></path>
                    <path
                      d="m16.019 21.218-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004z"
                      style={{ fill: "rgb(235, 235, 235)" }}
                    ></path>
                    <path
                      d="m19.827 16.151-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007z"
                      style={{ fill: "rgb(255, 255, 255)" }}
                    ></path>
                    <path
                      d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829zM16 13.191v3.091h-3.399l-.062-.695-.14-1.567-.074-.829z"
                      style={{ fill: "rgb(235, 235, 235)" }}
                    ></path>
                  </svg>
                  CSS
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3.5 [&amp;_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.562 15.256A21.2 21.2 0 0 0 16 16.449a21.2 21.2 0 0 0 7.438-1.194c1.864-.727 2.525-1.535 2.525-2V9.7a10.4 10.4 0 0 1-2.084 1.076A22.3 22.3 0 0 1 16 12.078a22.4 22.4 0 0 1-7.879-1.3A10.3 10.3 0 0 1 6.037 9.7v3.55c0 .474.663 1.278 2.525 2.006m0 6.705a15.6 15.6 0 0 0 2.6.741 25 25 0 0 0 4.838.453 25 25 0 0 0 4.838-.452 15.6 15.6 0 0 0 2.6-.741c1.864-.727 2.525-1.535 2.525-2v-3.39a10.7 10.7 0 0 1-1.692.825A23.5 23.5 0 0 1 16 18.74a23.5 23.5 0 0 1-8.271-1.348 11 11 0 0 1-1.692-.825v3.393c0 .466.663 1.271 2.525 2.001M16 30c5.5 0 9.963-1.744 9.963-3.894v-2.837a10.5 10.5 0 0 1-1.535.762l-.157.063A23.5 23.5 0 0 1 16 25.445a23.4 23.4 0 0 1-8.271-1.351l-.157-.063a10.5 10.5 0 0 1-1.535-.762v2.837C6.037 28.256 10.5 30 16 30"
                      style={{ fill: "rgb(255, 218, 68)" }}
                    ></path>
                    <ellipse
                      cx="16"
                      cy="5.894"
                      rx="9.963"
                      ry="3.894"
                      style={{ fill: "rgb(255, 218, 68)" }}
                    ></ellipse>
                  </svg>
                  SQL
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3.5 [&amp;_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg
                    viewBox="-4 0 264 264"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99q.13-1.094.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"></path>
                    <path
                      d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686z"
                      fill="#336791"
                    ></path>
                    <path
                      d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28q.423.059.842.058c3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35m88.784.073c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863q.387 0 .78-.054c2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225"
                      fill="#FFF"
                    ></path>
                    <path
                      d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a530 530 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92q.016.2.035.398a118 118 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36m-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a37 37 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813m-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171 171 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016M66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36 36 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426m22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34m1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526m69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.4 15.4 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25m68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473q.469.383 1.032.756c6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772"
                      fill="#FFF"
                    ></path>
                  </svg>
                  Postgres
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3.5 [&amp;_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient
                        id="mongo-a"
                        x1="-645.732"
                        y1="839.188"
                        x2="-654.59"
                        y2="839.25"
                        gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.231" stopColor="#999875"></stop>
                        <stop offset="0.563" stopColor="#9b9977"></stop>
                        <stop offset="0.683" stopColor="#a09f7e"></stop>
                        <stop offset="0.768" stopColor="#a9a889"></stop>
                        <stop offset="0.837" stopColor="#b7b69a"></stop>
                        <stop offset="0.896" stopColor="#c9c7b0"></stop>
                        <stop offset="0.948" stopColor="#deddcb"></stop>
                        <stop offset="0.994" stopColor="#f8f6eb"></stop>
                        <stop offset="1" stopColor="#fbf9ef"></stop>
                      </linearGradient>
                      <linearGradient
                        id="mongo-b"
                        x1="-644.287"
                        y1="823.405"
                        x2="-657.028"
                        y2="845.476"
                        gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#48a547"></stop>
                        <stop offset="1" stopColor="#3f9143"></stop>
                      </linearGradient>
                      <linearGradient
                        id="mongo-c"
                        x1="-643.386"
                        y1="839.485"
                        x2="-652.418"
                        y2="833.417"
                        gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#41a247"></stop>
                        <stop offset="0.352" stopColor="#4ba74b"></stop>
                        <stop offset="0.956" stopColor="#67b554"></stop>
                        <stop offset="1" stopColor="#69b655"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="m16.62 30-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.7 2.7 0 0 0-1.333 1.523A14 14 0 0 0 16.62 30"
                      style={{ fill: "url('#mongo-a')" }}
                    ></path>
                    <path
                      d="M17.026 26.329a13.22 13.22 0 0 0 5-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a10 10 0 0 1-.825-1.6l.277 18.069s-.574 5.522.874 6.187"
                      style={{ fill: "url('#mongo-b')" }}
                    ></path>
                    <path
                      d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 0 1 5.519-11.648A1.73 1.73 0 0 0 15.846 2c.381.82.319 12.243.359 13.579.155 5.197-.289 10.009-.718 10.99"
                      style={{ fill: "url('#mongo-c')" }}
                    ></path>
                  </svg>
                  MongoDB
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-3.5 [&amp;_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.674 14.488a2.218 2.218 0 1 0 0 3.137h16.652a2.218 2.218 0 1 0 0-3.137Z"
                      style={{
                        fill: "rgb(255, 177, 59)",
                        stroke: "rgb(0, 0, 0)",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      d="M11.222 9.06A2.218 2.218 0 1 0 9 11.278l11.778 11.774A2.218 2.218 0 1 0 23 20.834Z"
                      style={{
                        fill: "rgb(255, 177, 59)",
                        stroke: "rgb(0, 0, 0)",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      d="M17.568 7.73a2.218 2.218 0 1 0-3.137 0v16.652a2.218 2.218 0 1 0 3.137 0Z"
                      style={{
                        fill: "rgb(255, 177, 59)",
                        stroke: "rgb(0, 0, 0)",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      d="M23 11.278a2.218 2.218 0 1 0-2.222-2.218L9 20.834a2.218 2.218 0 1 0 2.218 2.218Z"
                      style={{
                        fill: "rgb(255, 177, 59)",
                        stroke: "rgb(0, 0, 0)",
                        strokeWidth: "2",
                      }}
                    ></path>
                    <path
                      d="M7.674 14.488a2.218 2.218 0 1 0 0 3.137h16.652a2.218 2.218 0 1 0 0-3.137Z"
                      style={{ fill: "rgb(255, 177, 59)" }}
                    ></path>
                    <path
                      d="M11.222 9.06A2.218 2.218 0 1 0 9 11.278l11.778 11.774A2.218 2.218 0 1 0 23 20.834Z"
                      style={{ fill: "rgb(255, 177, 59)" }}
                    ></path>
                    <path
                      d="M17.568 7.73a2.218 2.218 0 1 0-3.137 0v16.652a2.218 2.218 0 1 0 3.137 0Z"
                      style={{ fill: "rgb(255, 177, 59)" }}
                    ></path>
                    <path
                      d="M23 11.278a2.218 2.218 0 1 0-2.222-2.218L9 20.834a2.218 2.218 0 1 0 2.218 2.218Z"
                      style={{ fill: "rgb(255, 177, 59)" }}
                    ></path>
                    <path d="M2 16.056h28v9.894a4.035 4.035 0 0 1-4.106 4.106H6.106A4.035 4.035 0 0 1 2 25.95Z"></path>
                    <path
                      d="M6.2 23.045a3.628 3.628 0 1 1 6.2-2.565h-2.13a1.5 1.5 0 1 0-2.57 1.061 1.6 1.6 0 0 0 1.062.441 4.12 4.12 0 0 1 2.566 1.063 3.628 3.628 0 1 1-6.194 2.565h2.13a1.5 1.5 0 1 0 2.566-1.06 1.95 1.95 0 0 0-1.063-.44A4.47 4.47 0 0 1 6.2 23.045m13.451-6.193L17.085 29.24H14.96L12.4 16.852h2.12l1.5 7.255 1.5-7.255Zm3.629 5.131h3.628v3.628a3.628 3.628 0 1 1-7.257 0V20.48a3.628 3.628 0 0 1 7.257 0h-2.125a1.5 1.5 0 1 0-3.005 0v5.13a1.5 1.5 0 0 0 3.005 0v-1.5h-1.5v-2.127Z"
                      style={{ fill: "rgb(255, 255, 255)" }}
                    ></path>
                  </svg>
                  SVG Animation
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="carrois-gothic-sc text-sm text-muted-foreground/70">
                &lt;frameworks/&gt;
              </div>
              <div className="flex flex-row flex-wrap gap-2">

                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="15.974" r="2.5" style={{ fill: "rgb(0, 216, 255)" }}></circle>
                    <path d="M16 21.706a28.4 28.4 0 0 1-8.88-1.2 11.3 11.3 0 0 1-3.657-1.958A3.54 3.54 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.8 28.8 0 0 1 16 10.293a28.7 28.7 0 0 1 9.022 1.324 11.4 11.4 0 0 1 3.538 1.866A3.4 3.4 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a28 28 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2 0 .928 1.349 2.387 4.311 3.4A27.2 27.2 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.33 2.33 0 0 0-1.01-1.573 10.2 10.2 0 0 0-3.161-1.654A27.5 27.5 0 0 0 16 11.489" style={{ fill: "rgb(0, 216, 255)" }}></path>
                    <path d="M10.32 28.443a2.64 2.64 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.8 28.8 0 0 1 3.4-8.593 28.7 28.7 0 0 1 5.653-7.154 11.4 11.4 0 0 1 3.384-2.133 3.4 3.4 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.8 28.8 0 0 1-3.316 8.133 28.4 28.4 0 0 1-5.476 7.093 11.3 11.3 0 0 1-3.523 2.189 4.9 4.9 0 0 1-1.624.307m1.773-14.7a28 28 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114.8.463 2.742.024 5.1-2.036a27.2 27.2 0 0 0 5.227-6.79 27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.33 2.33 0 0 0-1.868.089A10.2 10.2 0 0 0 17.5 6.9a27.5 27.5 0 0 0-5.4 6.849Z" style={{ fill: "rgb(0, 216, 255)" }}></path>
                    <path d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.8 28.8 0 0 1-5.747-7.237 28.7 28.7 0 0 1-3.374-8.471 11.4 11.4 0 0 1-.158-4A3.4 3.4 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934 28.4 28.4 0 0 1 3.41 8.287 11.3 11.3 0 0 1 .137 4.146 3.54 3.54 0 0 1-1.494 2.555 2.6 2.6 0 0 1-1.315.324m-9.58-10.2a28 28 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9.8-.465 1.39-2.363.782-5.434A27.2 27.2 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.33 2.33 0 0 0-.855 1.662 10.2 10.2 0 0 0 .153 3.565 27.5 27.5 0 0 0 3.236 8.1Z" style={{ fill: "rgb(0, 216, 255)" }}></path>
                  </svg>
                  React
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m4.5 4.5.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207 6.5 9 .81-.586-6.5-9zM10 4v6h1V4z" fill="#fff"></path>
                  </svg>
                  NextJs
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#0D83CD" id="blood">
                      <path style={{ fill: "none", stroke: "#0d83cd", strokeMiterlimit: "10", strokeWidth: "2px" }} d="M20 14.5a8 8 0 0 1-16 0 13.83 13.83 0 0 1 3.1-8c.28-.38.57-.74.86-1.08A27 27 0 0 1 12 1.5s8 6 8 13Z"></path>
                      <path style={{ fill: "none", stroke: "#0d83cd", strokeMiterlimit: "10", strokeWidth: "2px" }} d="M16 14.5c0 2.76-1.24 5-4 5m4-8v2"></path>
                    </g>
                  </svg>
                  LiquidJs
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F7E02A" d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957 6.27 6.27 0 0 1-7.306-.933 6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
                  </svg>
                  ExpressJs
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 -51 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="tailwind-a"><stop stopColor="#2298BD" offset="0%"></stop><stop stopColor="#0ED7B5" offset="100%"></stop></linearGradient></defs>
                    <path d="M128 0Q76.8 0 64 51.2 83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2 19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8" fill="url(#tailwind-a)"></path>
                  </svg>
                  TailwindCSS
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="256px" height="230px" viewBox="0 0 256 230" preserveAspectRatio="xMidYMid">
                    <title>React Query</title>
                    <g>
                      <path d="M157.980086,142.487022 L153.069644,151.013778 C151.590359,153.58242 148.851879,155.165468 145.887725,155.165468 L108.270548,155.165468 C105.306395,155.165468 102.567914,153.58242 101.088629,151.013778 L96.1777266,142.487022 L157.980086,142.487022 Z M171.727194,118.616863 L163.068777,133.650878 L91.0890359,133.650878 L82.4310791,118.616863 L171.727194,118.616863 Z M163.386935,95.2748201 L171.741007,109.78118 L82.4172662,109.78118 L90.7713381,95.2748201 L163.386935,95.2748201 Z M145.887725,73.2086331 C148.851879,73.2086331 151.590359,74.7916804 153.069644,77.3603227 L158.298245,86.4386762 L95.8600287,86.4386762 L101.088629,77.3603227 C102.567914,74.7916804 105.306395,73.2086331 108.270548,73.2086331 L145.887725,73.2086331 Z" fill="#00435B"></path>
                      <path d="M53.5228243,69.2519666 C49.3557543,49.046027 48.4614888,33.5482436 51.1550425,22.2946934 C52.7570141,15.6017254 55.6858056,10.1416955 60.1392594,6.20237896 C64.8409457,2.0434872 70.7853914,0.00271399669 77.464599,0.00271399669 C88.4833026,0.00271399669 100.066708,5.02738845 112.445608,14.5729445 C117.494731,18.4663991 122.735073,23.1593458 128.177383,28.6544179 C128.610547,28.0967615 129.100183,27.5707574 129.645716,27.0846114 C145.032058,13.3732532 157.986014,4.85421104 169.065645,1.56952494 C175.653591,-0.383548437 181.838857,-0.569619914 187.471409,1.32590625 C193.416935,3.32675759 198.15432,7.46280771 201.496675,13.2560937 C207.012767,22.8171061 208.467426,35.3803455 206.410907,50.8927245 C205.572649,57.2157177 204.139587,64.103296 202.114822,71.5660814 C202.878713,71.6583298 203.644518,71.8277005 204.402582,72.078912 C223.924455,78.5481835 237.747984,85.5050986 246.117081,93.455615 C251.09648,98.1859692 254.348089,103.452282 255.523523,109.281738 C256.764195,115.434739 255.554443,121.606357 252.21598,127.395333 C246.710179,136.942525 236.586635,144.472296 222.164328,150.436421 C216.37329,152.831216 209.821074,155.000103 202.500392,156.950715 C202.834427,157.704922 203.093586,158.505888 203.266881,159.346186 C207.433951,179.552126 208.328217,195.049909 205.634663,206.303459 C204.032691,212.996427 201.1039,218.456457 196.650446,222.395774 C191.94876,226.554666 186.004314,228.595439 179.325107,228.595439 C168.306403,228.595439 156.722997,223.570764 144.344098,214.025209 C139.241235,210.090314 133.943061,205.338818 128.438479,199.768003 C127.872101,200.653965 127.176715,201.477453 126.354284,202.210353 C110.967942,215.921711 98.0139856,224.440753 86.9343548,227.725439 C80.3464094,229.678512 74.1611432,229.864584 68.5285912,227.969058 C62.5830653,225.968206 57.8456799,221.832156 54.5033245,216.03887 C48.9872327,206.477858 47.5325739,193.914618 49.5890933,178.402239 C50.4576511,171.850687 51.9647931,164.692994 54.1070674,156.917346 C53.2696983,156.832501 52.4289017,156.65542 51.5974183,156.379879 C32.0755448,149.910607 18.2520163,142.953692 9.88291895,135.003176 C4.90351995,130.272821 1.65191076,125.006509 0.476476948,119.177053 C-0.76419548,113.024052 0.445556656,106.852434 3.78402002,101.063457 C9.28982045,91.5162659 19.4133646,83.9864941 33.8356726,78.0223691 C39.7992613,75.556218 46.5700659,73.3296382 54.1560449,71.3342936 C53.8857623,70.6726423 53.6723366,69.9769434 53.5228243,69.2519666 Z" fill="#0C0D0E"></path>
                      <path d="M189.647082,161.332552 C191.588117,160.988559 193.448154,162.232965 193.881519,164.142164 L193.905355,164.25523 L194.112185,165.329619 C200.82206,200.606276 196.095493,218.244604 179.932483,218.244604 C164.118603,218.244604 143.987753,203.193799 119.539933,173.09219 C118.999764,172.427101 118.70835,171.594508 118.715576,170.737729 C118.733331,168.741874 120.335,167.130688 122.316684,167.087425 L122.431425,167.086678 L123.718886,167.095808 C134.00664,167.151581 144.007879,166.792879 153.722602,166.019701 C165.1903,165.107007 177.165126,163.544623 189.647082,161.332552 Z M78.6458633,134.666898 L78.7078446,134.771519 L79.3538232,135.898918 C84.5306616,144.89904 89.9242479,153.441244 95.5345809,161.52553 C102.141724,171.04618 109.571769,180.684341 117.824717,190.440012 C119.101455,191.949222 118.955699,194.189372 117.515334,195.521636 L117.421639,195.605425 L116.591258,196.320149 C89.2852865,219.716955 71.5374632,224.387736 63.3477884,210.332492 C55.3313515,196.574563 58.2377577,171.558816 72.0670066,135.285251 C72.3708961,134.488162 72.9420247,133.821259 73.6828929,133.398394 C75.4143371,132.410139 77.6096238,132.980798 78.6458633,134.666898 Z M203.503403,82.6131343 L203.615296,82.6495484 L204.643048,83.0044846 C238.347807,94.729024 251.153123,107.613829 243.058996,121.658899 C235.142689,135.395415 212.128983,145.396769 174.017881,151.66296 C173.167999,151.802697 172.296021,151.640191 171.553528,151.203694 C169.79981,150.172718 169.213912,147.915277 170.244889,146.16156 C175.703461,136.876387 180.619696,127.637538 184.993594,118.445014 C189.954111,108.019605 194.609306,96.8294082 198.959178,84.8744237 C199.618683,83.061871 201.556008,82.0774197 203.391185,82.580471 L203.503403,82.6131343 Z M84.4464723,76.7099745 C86.2001901,77.740951 86.7860876,79.9983917 85.7551111,81.7521091 C80.2965391,91.0372816 75.3803041,100.27613 71.006406,109.468655 C66.0458889,119.894064 61.3906942,131.084261 57.0408219,143.039245 C56.3678577,144.888789 54.3643854,145.876086 52.4965968,145.300535 L52.384704,145.264121 L51.3569514,144.909184 C17.6521928,133.184645 4.84687687,120.29984 12.9410033,106.25477 C20.8573114,92.5182536 43.8710165,82.5168999 81.9821186,76.2507092 C82.8320004,76.1109723 83.7039793,76.2734775 84.4464723,76.7099745 Z M192.652212,18.9624716 C200.668648,32.7204007 197.762242,57.7361478 183.932993,94.0097128 C183.629104,94.8068024 183.057975,95.4737045 182.317107,95.8965695 C180.585663,96.8848251 178.390376,96.3141662 177.354137,94.6280655 L177.292155,94.5234449 L176.646177,93.396046 C171.469338,84.3959235 166.075752,75.8537196 160.465419,67.7694342 C153.858276,58.2487836 146.428231,48.6106226 138.175283,38.8549521 C136.898545,37.3457421 137.044301,35.1055922 138.484666,33.7733281 L138.578361,33.6895387 L139.408742,32.9748146 C166.714713,9.5780092 184.462537,4.90722821 192.652212,18.9624716 Z M77.4488122,10.5899281 C93.2626919,10.5899281 113.393541,25.6407329 137.841362,55.7423424 C138.381531,56.4074313 138.672945,57.2400244 138.665719,58.0968034 C138.647964,60.0926579 137.046295,61.7038447 135.064611,61.7471068 L134.94987,61.7478547 L133.662408,61.7387247 C123.374654,61.6829511 113.373416,62.0416532 103.658693,62.8148314 C92.1909953,63.7275257 80.2161685,65.2899089 67.7342126,67.5019801 C65.7931775,67.8459735 63.933141,66.601567 63.4997758,64.6923678 L63.4759394,64.5793022 L63.2691102,63.5049136 C56.5592347,28.2282565 61.285802,10.5899281 77.4488122,10.5899281 Z" fill="#FF4154"></path>
                      <g transform="translate(80.575540, 73.669065)" fill="#FFD94C">
                        <path d="M30.7189861,-1.39989681e-23 L62.2949309,-1.39989681e-23 C66.9127505,-1.39989681e-23 71.1778947,2.46984572 73.4764482,6.47495629 L89.3310931,34.1008556 C91.6118515,38.0749594 91.6118515,42.9610118 89.3310931,46.9351155 L73.4764482,74.5610148 C71.1778947,78.5661256 66.9127505,81.0359712 62.2949309,81.0359712 L30.7189861,81.0359712 C26.1011664,81.0359712 21.8360221,78.5661256 19.5374686,74.5610148 L3.68282375,46.9351155 C1.40206522,42.9610118 1.40206522,38.0749594 3.68282375,34.1008556 L19.5374686,6.47495629 C21.8360221,2.46984572 26.1011664,-1.39989681e-23 30.7189861,-1.39989681e-23 Z M57.4824555,8.33810638 C62.102714,8.33810638 66.369722,10.8105395 68.667368,14.818982 L79.7231631,34.106775 C81.999395,38.0778585 81.999395,42.9581127 79.7231631,46.9291962 L68.667368,66.216989 C66.369722,70.2254319 62.102714,72.6978647 57.4824555,72.6978647 L35.5314612,72.6978647 C30.9112026,72.6978647 26.6441947,70.2254319 24.3465487,66.216989 L13.2907533,46.9291962 C11.0145216,42.9581127 11.0145216,38.0778585 13.2907533,34.106775 L24.3465487,14.818982 C26.6441947,10.8105395 30.9112026,8.33810638 35.5314612,8.33810638 L57.4824555,8.33810638 Z M52.295383,17.4579102 L40.7185336,17.4579102 C36.1030177,17.4579102 31.8396344,19.925313 29.5402263,23.9272762 L29.5402263,23.9272762 L23.6980045,34.0952652 C21.4129658,38.0722196 21.4129658,42.9637516 23.6980045,46.9407061 L23.6980045,46.9407061 L29.5402263,57.108695 C31.8396344,61.1106583 36.1030177,63.5780609 40.7185336,63.5780609 L40.7185336,63.5780609 L52.295383,63.5780609 C56.9108991,63.5780609 61.1742821,61.1106583 63.4736902,57.108695 L63.4736902,57.108695 L69.3159123,46.9407061 C71.6009508,42.9637516 71.6009508,38.0722196 69.3159123,34.0952652 L69.3159123,34.0952652 L63.4736902,23.9272762 C61.1742821,19.925313 56.9108991,17.4579102 52.295383,17.4579102 L52.295383,17.4579102 Z M47.3007539,26.1868653 C51.9128126,26.1868653 56.1735523,28.6506045 58.4742386,32.6478447 L59.3025013,34.0868787 C61.5939706,38.0681056 61.5939706,42.9678656 59.3025013,46.9490924 L58.4742386,48.3881264 C56.1735523,52.3853665 51.9128126,54.8491059 47.3007539,54.8491059 L45.7131627,54.8491059 C41.101104,54.8491059 36.8403644,52.3853665 34.5396783,48.3881264 L33.7114156,46.9490924 C31.4199463,42.9678656 31.4199463,38.0681056 33.7114156,34.0868787 L34.5396783,32.6478447 C36.8403644,28.6506045 41.101104,26.1868653 45.7131627,26.1868653 L47.3007539,26.1868653 Z M46.5090408,34.7855375 C44.4563249,34.7855375 42.5632677,35.8780363 41.5383478,37.6517615 C40.5136007,39.4251878 40.5136007,41.6107834 41.5383478,43.3842097 C42.5632677,45.1579349 44.4563249,46.2504338 46.5048762,46.2504338 L46.5048762,46.2504338 C48.5575919,46.2504338 50.4506488,45.1579349 51.4755688,43.3842097 C52.5003161,41.6107834 52.5003161,39.4251878 51.4755688,37.6517615 C50.4506488,35.8780363 48.5575919,34.7855375 46.5090408,34.7855375 L46.5090408,34.7855375 Z M2.01124849e-22,40.5179856 L10.3208271,40.5179856"></path>
                      </g>
                    </g>
                  </svg>
                  React Query
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14" fill="#fff"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 20.334h7V27z" fill="#05F"></path>
                    <path d="M16 13.667H9v6.666h14z" fill="#0AF"></path>
                    <path d="m9 7 7 6.667h7V7z" fill="#8DF"></path>
                  </svg>
                  Motion.dev
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 248 248" aria-hidden="true" style={{ height: "10px", width: "10px" }}>
                    <path fill="url(#gsap-gradient)" fillRule="evenodd" d="M62 124c-34.242 0-62 27.759-62 62s27.759 62 62 62 62-27.758 62-62c0 34.242 27.758 62 62 62s62-27.758 62-62c0-34.241-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.241-27.758-62-62-62s-62 27.759-62 62c0-34.24-27.758-62-62-62S0 27.76 0 62c0 34.242 27.759 62 62 62" clipRule="evenodd"></path>
                    <defs>
                      <radialGradient id="gsap-gradient" cx="0" cy="0" r="1" gradientTransform="rotate(-48.289 195.768 87.754)scale(235.103 157.04)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ABFF83"></stop>
                        <stop offset="0.807" stopColor="#4EEF60"></stop>
                        <stop offset="1" stopColor="#01E447"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                  GSAP
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg className="pointer-events-none" fill="none" height="32" viewBox="3 3.5 25 25" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24.456 24.485c.778-.778.925-1.83.839-2.739-.087-.92-.425-1.92-.905-2.917A19.4 19.4 0 0 0 22.682 16a19.4 19.4 0 0 0 1.708-2.829c.48-.997.818-1.996.905-2.917.085-.909-.061-1.961-.84-2.74-.777-.777-1.83-.924-2.738-.838-.921.087-1.92.425-2.918.905a19.3 19.3 0 0 0-2.828 1.707 19.4 19.4 0 0 0-2.83-1.707c-.996-.48-1.996-.818-2.916-.905-.91-.086-1.962.06-2.74.839s-.924 1.83-.839 2.739c.087.92.425 1.92.906 2.917.432.899 1.009 1.854 1.707 2.829a19.4 19.4 0 0 0-1.708 2.829c-.48.997-.818 1.996-.905 2.917-.085.909.061 1.961.84 2.74.777.777 1.83.924 2.739.838.92-.087 1.92-.425 2.917-.905a19.4 19.4 0 0 0 2.829-1.707c.974.698 1.93 1.274 2.828 1.707.997.48 1.997.818 2.918.905.909.086 1.96-.06 2.739-.839Zm-8.485-3.537a29 29 0 0 0 2.62-2.328A29 29 0 0 0 20.919 16a29 29 0 0 0-2.328-2.62 29 29 0 0 0-2.62-2.328c-.87.68-1.754 1.46-2.62 2.328A29 29 0 0 0 11.022 16c.68.87 1.46 1.753 2.327 2.62a29 29 0 0 0 2.62 2.328Zm1.179.866a31 31 0 0 0 2.44-2.195c.8-.801 1.536-1.622 2.195-2.44 1.934 2.813 2.678 5.303 1.673 6.308-1.006 1.005-3.495.261-6.308-1.672Zm-6.994-4.635a31 31 0 0 0 2.196 2.44c.8.8 1.621 1.537 2.44 2.195-2.813 1.934-5.303 2.678-6.308 1.673-1.006-1.005-.262-3.495 1.672-6.308Zm0-2.358a31 31 0 0 1 2.196-2.44c.8-.8 1.621-1.537 2.44-2.196-2.813-1.933-5.303-2.677-6.308-1.672-1.006 1.005-.262 3.495 1.672 6.308Zm6.994-4.635a31 31 0 0 1 2.44 2.195c.8.801 1.536 1.622 2.195 2.44 1.934-2.813 2.678-5.303 1.673-6.308-1.006-1.005-3.495-.261-6.308 1.672Z" fill="#fff" fillRule="evenodd" stroke="#fff" strokeWidth="0.5"></path>
                  </svg>
                  React Email
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.068 20.94a1.868 1.868 0 1 1-3.737 0 1.868 1.868 0 0 1 3.737 0M11.464 29l4.536-15.652L20.536 29z"></path>
                  </svg>
                  Framer Motion
                </button>
              </div>
            </div>

            {/* TOOLS SECTION */}
<div className="flex flex-col gap-2">
  <div className="carrois-gothic-sc text-sm text-muted-foreground/70">
    &lt;tools/&gt;
  </div>
  <div className="flex flex-row flex-wrap gap-2">
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 22.7l-6.91-.01z" fill="#CB3837"/></svg>
      npm
    </button>
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.766 2.08L7.143 10.15 2.126 5.86 0 6.64v10.51l2.126.85 5.017-4.29 10.623 8.07 4.108-1.54V3.62l-4.108-1.54zm.64 15.65l-8.625-6.55 8.625-6.55v13.1z" fill="#0065A9"/></svg>
      VS Code
    </button>
              
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 24 24" fill="#8B5CF6" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
      Antigravity
    </button>
              </div>
</div>

{/* PLATFORMS SECTION */}
<div className="flex flex-col gap-2">
  <div className="carrois-gothic-sc text-sm text-muted-foreground/70">
    &lt;platforms/&gt;
  </div>
  <div className="flex flex-row flex-wrap gap-2">


    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
      </svg>
      Github
    </button>


    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M24 22.525H0l12-21.05z"></path>
      </svg>
      Vercel
    </button>


    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg width="256" height="256" viewBox="0 -70 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path d="m202.357 49.394-5.311-2.124C172.085 103.434 72.786 69.289 66.81 85.997c-.996 11.286 54.227 2.146 93.706 4.059 12.039.583 18.076 9.671 12.964 24.484l10.069.031c11.615-36.209 48.683-17.73 50.232-29.68-2.545-7.857-42.601 0-31.425-35.497" fill="#FFF"></path>
        <path d="M176.332 108.348c1.593-5.31 1.062-10.622-1.593-13.809s-6.374-5.31-11.154-5.842L71.17 87.634c-.531 0-1.062-.53-1.593-.53q-.797-.798 0-1.594c.531-1.062 1.062-1.594 2.124-1.594l92.946-1.062c11.154-.53 22.839-9.56 27.087-20.182l5.312-13.809c0-.532.531-1.063 0-1.594C191.203 20.182 166.772 0 138.091 0 111.535 0 88.697 16.995 80.73 40.896c-5.311-3.718-11.684-5.843-19.12-5.31-12.747 1.061-22.838 11.683-24.432 24.43-.531 3.187 0 6.374.532 9.56C16.996 70.107 0 87.103 0 108.348c0 2.124 0 3.718.531 5.842 0 1.063 1.062 1.594 1.594 1.594h170.489c1.062 0 2.125-.53 2.125-1.594z" fill="#F4811F"></path>
        <path d="M205.544 48.863h-2.656c-.531 0-1.062.53-1.593 1.062l-3.718 12.747c-1.593 5.31-1.062 10.623 1.594 13.809 2.655 3.187 6.373 5.31 11.153 5.843l19.652 1.062c.53 0 1.062.53 1.593.53q.795.798 0 1.594c-.531 1.063-1.062 1.594-2.125 1.594l-20.182 1.062c-11.154.53-22.838 9.56-27.087 20.182l-1.063 4.78c-.531.532 0 1.594 1.063 1.594h70.108q1.593 0 1.593-1.593c1.062-4.25 2.124-9.03 2.124-13.81 0-27.618-22.838-50.456-50.456-50.456" fill="#FAAD3F"></path>
      </svg>
      Cloudflare
    </button>


    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#FF6C2C" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/></svg>
      cPanel
    </button>

    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#024D63" d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm0 2.228L20.063 6.9l-8.063 4.654L3.937 6.9 12 2.228zM3.504 8.016l8.031 4.636v9.27L3.504 17.288V8.016zm16.992 0v9.272l-8.031 4.636v-9.27l8.031-4.638z"/></svg>
      Plesk
    </button>
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#673DE6" d="M3.702 12.002c0 4.582 3.714 8.298 8.296 8.298s8.298-3.716 8.298-8.298c0-4.584-3.716-8.3-8.298-8.3a8.3 8.3 0 0 0-8.296 8.3zm3.503-3.666h2.15v2.548h5.292V8.336h2.15v7.332h-2.15v-2.76H9.355v2.76h-2.15v-7.332z"/></svg>
      Hostinger
    </button>
              </div>
</div>

{/* SOFTWARES SECTION */}
<div className="flex flex-col gap-2">
  <div className="carrois-gothic-sc text-sm text-muted-foreground/70">
    &lt;softwares/&gt;
  </div>
  <div className="flex flex-row flex-wrap gap-2">

    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" style={{ flex: "0 0 auto", lineHeight: "1" }}>
        <path d="m11.925 24 10.425-6-10.425-6L1.5 18z" fill="url(#cursor-a)"></path>
        <path d="M22.35 18V6L11.925 0v12z" fill="url(#cursor-b)"></path>
        <path d="M11.925 0 1.5 6v12l10.425-6z" fill="url(#cursor-c)"></path>
        <path d="M22.35 6 11.925 24V12z" fill="#555"></path>
        <path d="m22.35 6-10.425 6L1.5 6z"></path>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="cursor-a" x1="11.925" x2="11.925" y1="12" y2="24">
            <stop offset="0.16" stopOpacity="0.39"></stop>
            <stop offset="0.658" stopOpacity="0.8"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="cursor-b" x1="22.35" x2="11.925" y1="6.037" y2="12.15">
            <stop offset="0.182" stopOpacity="0.31"></stop>
            <stop offset="0.715" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="cursor-c" x1="11.925" x2="1.5" y1="0" y2="18">
            <stop stopOpacity="0.6"></stop>
            <stop offset="0.667" stopOpacity="0.22"></stop>
          </linearGradient>
        </defs>
      </svg>
      Cursor
    </button>

    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334 70.131 8.959 134.248-40.569 143.334-110.7" fill="#FF6C37"></path>
        <path d="m174.199 82.184-54.006 54.007-15.23-15.23c53.111-53.11 58.358-48.503 69.236-38.777" fill="#FFF"></path>
        <path d="m135.678 151.676-14.717-14.718 54.006-54.006c14.462 14.59-7.166 38.265-39.289 68.724" fill="#FFF"></path>
        <path d="m105.22 121.345 10.878 10.878q.384.384 0 .768c-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.176-.64-2.432-1.791-.128-.64.128-1.28.512-1.664l13.054-13.054c.256-.256.64-.384.768-.128" fill="#FFF"></path>
        <path d="M202.738 52.238c-8.19-7.935-21.372-7.679-29.306.64-7.935 8.318-7.679 21.372.64 29.306A20.68 20.68 0 0 0 199.155 85l-14.59-14.59z" fill="#FFF"></path>
      </svg>
      Postman
    </button>

    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path fill="#1ABCFE" d="M8.55 8c0-1.289 1.019-2.333 2.275-2.333S13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8"></path>
        <path fill="#0ACF83" d="M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667"></path>
        <path fill="#FF7262" d="M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1z"></path>
        <path fill="#F24E1E" d="M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333"></path>
        <path fill="#A259FF" d="M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8"></path>
      </svg>
      Figma
    </button>

    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.167 3.517h25.666v24.966H3.167Z" style={{ fill: "rgb(12, 8, 36)" }}></path>
        <path d="M3.167 3.517h25.666v24.966H3.167ZM2 29.65h28V2.35H2Zm18.877-16.1c-.922 0-1.237.467-1.237.852 0 .42.21.712 1.447 1.353 1.832.887 2.4 1.738 2.4 2.987 0 1.867-1.423 2.87-3.348 2.87a5.1 5.1 0 0 1-2.392-.5c-.082-.035-.093-.093-.093-.187v-1.717c0-.117.058-.152.14-.093a4.33 4.33 0 0 0 2.345.688c.922 0 1.307-.385 1.307-.91 0-.42-.268-.793-1.447-1.4-1.657-.793-2.345-1.6-2.345-2.94 0-1.505 1.178-2.753 3.22-2.753a5.4 5.4 0 0 1 2.088.327.26.26 0 0 1 .117.233v1.6c0 .093-.058.152-.175.117a3.94 3.94 0 0 0-2.03-.525Zm-10.034 1.388c.268.023.478.023.945.023 1.365 0 2.648-.478 2.648-2.333 0-1.482-.922-2.228-2.473-2.228-.467 0-.91.023-1.12.035Zm-2.077-6.2c0-.082.163-.14.257-.14a70 70 0 0 1 3.01-.058c3.232 0 4.492 1.773 4.492 4.037 0 2.963-2.147 4.235-4.783 4.235-.443 0-.595-.023-.91-.023v4.48c0 .093-.035.14-.14.14H8.907c-.093 0-.14-.035-.14-.14V8.743Z" style={{ fill: "rgb(49, 197, 240)" }}></path>
      </svg>
      Photoshop
    </button>

              
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.743 14.86c-1.127 0-1.896-.708-1.896-1.815 0-1.229.851-1.854 2.148-1.854h.473v3.669h-.725zm.725-5.321h-1.341v.788c-.611-.532-1.301-.828-2.208-.828-2.188 0-3.647 1.636-3.647 3.548 0 1.952 1.42 3.45 3.548 3.45 1.045 0 1.794-.374 2.346-.946v.847h1.302V9.539zM8.28 16.398h1.4V9.539h-1.4v6.859zm.7-8.121c.513 0 .907-.394.907-.907 0-.533-.394-.927-.907-.927-.513 0-.907.394-.907.927 0 .513.394.907.907.907zM2.4 2.4v19.2h19.2V2.4H2.4zm10.702 13.998c-1.36 0-2.405-.71-2.938-1.795v1.795H8.28V9.539h1.884v1.754c.533-1.045 1.557-1.814 2.938-1.814 2.228 0 3.765 1.774 3.765 3.51 0 1.754-1.537 3.409-3.765 3.409z" fill="#FF9A00"/></svg>
      Illustrator
    </button>
              </div>
</div>

{/* DEV OPS SECTION */}
{/*
<div className="flex flex-col gap-2">
  <div className="carrois-gothic-sc text-sm text-muted-foreground/70">
    &lt;dev ops/&gt;
  </div>
  <div className="flex flex-row flex-wrap gap-2">
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none">
        <rect width="512" height="512" rx="150" fill="#398CCB"></rect>
        <path fillRule="evenodd" clipRule="evenodd" d="m255.446 75 71.077 41.008v22.548l86.031 49.682v84.986l23.077 13.322v82.062L364.6 409.615l-31.535-18.237-76.673 44.268-76.214-44.012-31.093 17.981-71.031-41.077v-81.992l22.177-12.803v-85.505l84.184-48.6.047-.002v-23.628zm71.077 84.879v38.144l-71.031 41.008-71.03-41.008v-37.087l-.047.002-65.723 37.962v64.184l30.393-17.546 71.03 41.008v81.992l-21.489 12.427 57.766 33.358 58.226-33.611-21.049-12.174v-81.992l71.031-41.008 29.492 17.027V198.9zm-14.492 198.09v-50.054l43.338 25.016v50.054zm105.138-50.123-43.338 25.016v50.123l43.338-25.085zM96.515 357.9v-50.054l43.339 25.016v50.053zm105.139-50.054-43.339 25.016v50.053l43.339-25.015zm119.608-15.923 43.338-25.015 43.338 25.015-43.338 25.039zm-172.177-25.085-43.339 25.085 43.339 24.969 43.338-24.969zm53.838-79.476v-50.054l43.292 25.038v50.031zm105.092-50.054-43.292 25.038v50.008l43.292-24.992zm-95.861-15.97 43.292-25.015 43.339 25.015-43.339 25.016z" fill="#fff"></path>
      </svg>
      TRPC
    </button>
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
      </svg>
      Github Actions (CI/CD)
    </button>
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-[22px] cursor-default gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key p-px">
        <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
        <path d="m21 2-9.6 9.6"></path>
        <circle cx="7.5" cy="15.5" r="5.5"></circle>
      </svg>
      Authentication (OAuth, JWT)
    </button>
  </div>
</div>
*/}

{/* SECRET LINE */}
<span className="mt-4 text-sm text-muted-foreground/70">
  Few more ... but secret hehehe :3
</span>
          </div>
        </div>
      </div>
      <NavigationMenu />
    </>
  );
}
