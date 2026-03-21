const WaveDivider = ({ flip = false, className = "" }: { flip?: boolean; className?: string }) => (
  <div className={`w-full overflow-hidden leading-none ${className}`} style={flip ? { transform: "scaleY(-1)" } : {}}>
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
      <path
        d="M0 50C180 90 360 10 540 50C720 90 900 10 1080 50C1260 90 1440 50 1440 50V100H0V50Z"
        className="fill-light-bg"
      />
    </svg>
  </div>
);

export default WaveDivider;
