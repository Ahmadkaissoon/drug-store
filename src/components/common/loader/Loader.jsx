function Loader() {
  return (
    <svg
      className={`w-12 h-12 animate-spin  text-hover-color inline-block`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="animate-loader-circle">
        <circle
          cx="24"
          cy="24"
          r="20"
          className={`stroke-current text-hover-color`}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Loader;
