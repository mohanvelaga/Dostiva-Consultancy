export default function WaveBackground({
  back = "#e0edff",
  front = "#dbeafe"
}) {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">

      {/* Back wave */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-[200%] h-48 animate-wave-slow"
      >
        <path
          fill={back}
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,197.3C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L0,320Z"
        />
      </svg>

      {/* Front wave */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-[200%] h-40 -mt-28 animate-wave-fast"
      >
        <path
          fill={front}
          d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
}
