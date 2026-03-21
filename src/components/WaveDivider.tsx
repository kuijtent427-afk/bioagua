interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

const WaveDivider = ({ from = "bg-background", to = "bg-light-bg", flip = false }: WaveDividerProps) => (
  <div className={`relative ${from} -mb-1`} style={flip ? { transform: "rotate(180deg)" } : {}}>
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-20">
      <path
        d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
        className={`${to === "bg-light-bg" ? "fill-light-bg" : to === "bg-primary" ? "fill-primary" : "fill-background"}`}
      />
    </svg>
  </div>
);

export default WaveDivider;
