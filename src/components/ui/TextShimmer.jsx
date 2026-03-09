export default function TextShimmer({
  children,
  as: Tag = "span",
  className = "",
  duration = 2.5,
}) {
  return (
    <Tag
      className={`inline-block bg-clip-text text-transparent bg-[length:250%_100%] animate-shimmer ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(110deg, #f97316 35%, #fbbf24 50%, #f97316 65%)",
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </Tag>
  );
}
