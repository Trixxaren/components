import PropTypes from "prop-types";

const clamp = (n) => Math.max(0, Math.min(n ?? 0, 100));

const ProgressBar = ({ value = 0, showLabel = true }) => {
  const v = clamp(Number(value));
  console.log("[ProgressBar props]", { value, v, showLabel });

  // Välj färg baserat på värdet (trafikljus-logik)
  const getColor = () => {
    if (v < 33) return "#ef4444";   // Röd
    if (v < 66) return "#f59e0b";   // Gul
    return "#10b981";               // Grön
  };

  const barColor = getColor();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {/* Glaset */}
      <div
        role="progressbar"
        aria-label="Förlopp"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={v}
        aria-valuetext={`${v} procent`}
        style={{
          width: 320,
          height: 20,
          background: "#e5e7eb",
          borderRadius: 9999,
          overflow: "hidden",
          boxShadow: "inset 0 0 0 1px #d1d5db",
        }}
      >
        {/* Vätskan (fyllda delen) */}
        <div
          style={{
            width: `${v}%`,
            height: "100%",
            background: barColor,
            transition: "width 300ms ease-in-out, background 200ms linear",
          }}
        />
      </div>

      {showLabel && (
        <span style={{ fontSize: 14, width: 40, textAlign: "right" }} aria-hidden="true">
          {v}%
        </span>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  showLabel: PropTypes.bool,
};

export default ProgressBar;
