export default function Marquee({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
  className = "",
}) {
  return (
    <div
      className={`flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] ${className}`}
    >
      <div
        className={`flex shrink-0 gap-8 items-center ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `marquee ${speed}s linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        {children}
        {children}
      </div>
      <div
        className={`flex shrink-0 gap-8 items-center ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `marquee ${speed}s linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
