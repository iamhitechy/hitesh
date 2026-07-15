export default function Hero() {
  return (
    <div
      id="hero-section"
      className="page-col"
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        filter: "none",
        transform: "translate(0px, 0px)",
      }}
    >
      <div>
        <div className="jetbrains-mono flex items-center gap-1.5 text-xs tracking-tighter text-muted-foreground/60">
          <span>Hey It's me</span>
          <svg
            height="1em"
            width="1em"
            className="opacity-50"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>heart hand</title>
            <g fill="#737373">
              <path
                d="M6.074 10.969L5.549 9.84899C5.143 8.98099 5.14 7.98499 5.539 7.11499C5.937 6.24599 6.698 5.59799 7.624 5.33799C7.898 5.26099 8.181 5.22199 8.465 5.22199C9.598 5.22199 10.657 5.83499 11.271 6.80899C11.71 5.98999 12.001 5.058 12.001 4.008C12.008 2.085 10.447 0.510993 8.508 0.498993C7.668 0.509993 6.871 0.818996 6.251 1.355C5.63 0.818996 4.83 0.508993 3.98 0.498993C2.055 0.510993 0.494 2.08499 0.501 4.00499C0.501 7.87899 4.379 10.202 5.567 10.822C5.727 10.905 5.9 10.948 6.074 10.969Z"
                fill="#737373"
              ></path>
              <path
                d="M16.554 10.604C15.565 9.84798 13.332 9.68199 11.231 10.181L10.12 7.81799C9.74901 7.02899 8.86801 6.54698 8.02901 6.78298C6.96101 7.08298 6.45701 8.24998 6.90701 9.21298L9.05401 13.789L7.38401 13.482C6.65501 13.348 5.87201 13.631 5.49601 14.27C5.19701 14.779 5.17101 15.373 5.41301 15.89C5.60801 16.308 5.95601 16.624 6.39301 16.782L8.50201 17.525C9.39701 17.84 10.339 18.001 11.288 18.001H13.905C16.54 18.001 17.827 15.642 17.696 13.721C17.585 12.083 17.201 11.1 16.552 10.605L16.554 10.604Z"
                fill="#737373"
                opacity="0.4"
              ></path>
            </g>
          </svg>
        </div>
        <h1 className="doto-font text-2xl font-bold">
          <span className="relative">
            <span>HITESH</span>
          </span>{" "}
          <a className="group" target="_blank" href="#" rel="noreferrer">
            <span className="jetbrains-mono h-fit text-xs font-light tracking-tight text-muted-foreground duration-200 group-hover:text-black dark:group-hover:text-white ml-2">
              <span>/ </span>
              <span className="text-xxs">@</span>
              <span>hitesh.im</span>
            </span>
          </a>
        </h1>
      </div>
      <div>
        <span className="text-sm text-muted-foreground">
          Yup! I'm a{" "}
          <span className="font-medium text-black dark:text-white">Design Engineer</span>. Big
          deal, right? But wait — there's more! I'm not just any developer,{" "}
          <br /> I'm a{" "}
          <span className="font-medium text-black dark:text-white">Full Stack Developer</span>.
          And if that wasn't enough, guess what? <br /> maybe{" "}
          <span className="font-medium text-black dark:text-white">Creator? </span> Oh yeah,
          I've got that badge too!
        </span>
      </div>
      <div className="z-20 max-w-sm">
        <span className="text-sm text-muted-foreground">
          I love both <span className="font-medium text-black dark:text-white">Design</span>{" "}
          &amp; <span className="font-medium text-black dark:text-white">Development</span>. so,
          That means I can create beautiful and functional websites. I'm always
          looking for new opportunities to learn and grow.
        </span>
        <div className="mt-5 flex items-center gap-2">
          <a target="_blank" href="#" rel="noreferrer">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-cardColor text-black dark:text-white hover:bg-cardColorForeground py-2 shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] h-6 px-2.5 text-xs hover:text-brand">
              <svg
                height="1em"
                width="1em"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>saved items</title>
                <g fill="#737373">
                  <path
                    d="M13.25 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.2334 3.2334 2 4.75 2H13.25C14.7666 2 16 3.2334 16 4.75V13.25C16 14.7666 14.7666 16 13.25 16Z"
                    fill="#737373"
                    opacity="0.4"
                  ></path>
                  <path
                    d="M11.75 11C11.5942 11 11.4395 10.9517 11.3091 10.8564L9 9.1772L6.6909 10.8564C6.4638 11.0229 6.1616 11.0468 5.9097 10.9184C5.6582 10.7905 5.5 10.5322 5.5 10.2499V3.24989C5.5 2.28509 6.2852 1.49989 7.25 1.49989H10.75C11.7148 1.49989 12.5 2.28509 12.5 3.24989V10.2499C12.5 10.5321 12.3418 10.7904 12.0903 10.9184C11.9829 10.9731 11.8662 11 11.75 11Z"
                    fill="#737373"
                  ></path>
                </g>
              </svg>
              Twitter DM
            </button>
          </a>
          <span className="text-xxs text-muted-foreground/60">OR</span>
          <a target="_blank" href="#" rel="noreferrer">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-cardColor text-black dark:text-white hover:bg-cardColorForeground py-2 shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] h-6 px-2.5 text-xs hover:text-brand">
              <svg
                height="1em"
                width="1em"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#737373">
                  <path
                    d="M14.75 6H3.25C2.8359 6 2.5 6.3359 2.5 6.75V13.25C2.5 14.7666 3.7334 16 5.25 16H12.75C14.2666 16 15.5 14.7666 15.5 13.25V6.75C15.5 6.3359 15.1641 6 14.75 6Z"
                    fill="#737373"
                    opacity="0.4"
                  ></path>
                  <path
                    d="M2.58841 6.86181C1.73781 6.86181 0.989809 6.23921 0.858909 5.37351L0.634311 3.89061C0.490311 2.93601 1.14941 2.04251 2.10311 1.89791L14.4624 0.0288128C15.4238 -0.111287 16.3105 0.543913 16.4546 1.49801L16.6792 2.98041C16.8232 3.93501 16.1641 4.82811 15.2104 4.97261L2.85101 6.84221C2.76261 6.85541 2.67481 6.86181 2.58841 6.86181Z"
                    fill="#737373"
                  ></path>
                  <path
                    d="M11.7803 11.0303L9.53029 13.2803C9.38379 13.4268 9.19189 13.5 8.99999 13.5C8.80809 13.5 8.61619 13.4268 8.46969 13.2803L6.21969 11.0303C5.92669 10.7373 5.92669 10.2627 6.21969 9.9698C6.51269 9.6769 6.98729 9.6768 7.28019 9.9698L8.24989 10.9395V8.25C8.24989 7.8359 8.58579 7.5 8.99989 7.5C9.41399 7.5 9.74989 7.8359 9.74989 8.25V10.9395L10.7196 9.9698C11.0126 9.6768 11.4872 9.6768 11.7801 9.9698C12.073 10.2628 12.0733 10.7374 11.7803 11.0303Z"
                    fill="#737373"
                  ></path>
                </g>
              </svg>
              Email Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
