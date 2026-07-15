import React from "react";
import NavigationMenu from "../components/NavigationMenu";

{
  /* 
// Uncomment this array in the future to restore the videos
const videos = [
  { videoUrl: "https://assets.invoicely.gg/mail0-generating.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1941839027453534602" },
  { videoUrl: "https://assets.invoicely.gg/dev-animation.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1938077259304517718" },
  { videoUrl: "https://assets.invoicely.gg/profoundbento4.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1935700905812193388" },
  { videoUrl: "https://assets.invoicely.gg/profoundbento3.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1935700905812193388" },
  { videoUrl: "https://assets.invoicely.gg/profoundbento2.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1935700905812193388" },
  { videoUrl: "https://assets.invoicely.gg/profoundbento1.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1935700905812193388" },
  { videoUrl: "https://assets.invoicely.gg/compai7.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1934308316777206025" },
  { videoUrl: "https://assets.invoicely.gg/compai6.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1934308316777206025" },
  { videoUrl: "https://assets.invoicely.gg/compai5.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1934308316777206025" },
  { videoUrl: "https://assets.invoicely.gg/compai4.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1934308316777206025" },
  { videoUrl: "https://assets.invoicely.gg/compai3.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1935147954484170982" },
  { videoUrl: "https://assets.invoicely.gg/compai2.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1935147954484170982" },
  { videoUrl: "https://assets.invoicely.gg/compai1.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1935147954484170982" },
  { videoUrl: "https://assets.invoicely.gg/moving-electric-bento.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1928418442719453652" },
  { videoUrl: "https://assets.invoicely.gg/cloudflare-animation.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1927690795248767178" },
  { videoUrl: "https://assets.invoicely.gg/vercel-animation.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1927276754193764509" },
  { videoUrl: "https://assets.invoicely.gg/hovering-keyboard.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1875159284658659651" },
  { videoUrl: "https://assets.invoicely.gg/shadcn-ui.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1876561715225374818" },
  { videoUrl: "https://assets.invoicely.gg/database-rest.mp4", tweetUrl: "https://x.com/LegionWebDev/status/1896896842581049822" }
];
*/
}

export default function Arts() {
  return (
    <>
      <div className="art-page mb-24 md:mb-0">
        <div className="page-col">
          <h1 className="doto-font text-2xl font-bold mb-6">
            <span className="relative">
              <span>ARTs</span>
            </span>{" "}
            <a
              className="group"
              target="_blank"
              href="#"
              rel="noreferrer"
            >
              <span className="jetbrains-mono h-fit text-xs font-light tracking-tight text-muted-foreground duration-200 group-hover:text-black dark:group-hover:text-white ml-2">
                <span>Private Projects</span>
              </span>
            </a>
          </h1>
          <div className="flex flex-col gap-6">
            {/* 
            Uncomment this block to restore the video mappings
            {videos.map((item, index) => (
              <div key={index} className="flex w-full flex-col">
                <div className="relative h-auto max-h-[340px] overflow-hidden rounded-[12px] border border-border/50 p-2">
                  <a
                    target="_blank"
                    className="absolute bottom-4 right-4 z-10 text-xs text-muted-foreground"
                    href={item.tweetUrl}
                    rel="noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cardColor text-black dark:text-white hover:bg-cardColorForeground py-2 border border-border h-5 gap-1 px-1.5 text-[10px] hover:text-brand [&_svg]:size-3">
                      <svg
                        height="1em"
                        width="1em"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#737373">
                          <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                        </g>
                      </svg>
                      <span>View</span>
                    </button>
                  </a>
                  <video
                    className="h-auto w-full rounded-[8px] transition-opacity duration-300"
                    src={item.videoUrl}
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    muted
                  ></video>
                </div>
              </div>
            ))}
          */}

            {/* Card 1 */}
            <div className="flex flex-col max-w-xl mt-4 mb-24 mx-auto">
              <div className="relative h-auto overflow-hidden rounded-[12px] border border-border/50 p-8 flex flex-col gap-8">
                <div className="art-message-block mt-2 w-full px-6 py-5 text-[13px] font-light mb-12">
                  <span className="tracking-tight text-muted-foreground block">
                    I can't publicly share my company's projects due to privacy guidelines 🤫.
                    But I'd love to show you my work! Drop me a quick message on WhatsApp,
                    and I'll gladly share my private designs with you.
                    <a target="_blank" href="#" rel="noreferrer" className="inline-flex items-center ml-2 text-foreground hover:text-brand transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1.2em"
                        width="1.2em"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationMenu />
    </>
  );
}
