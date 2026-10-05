export default function Brand({ compact = false, light = false }) {
  return (
    <a
      className={`brand${compact ? ' brand--compact' : ''}${light ? ' brand--light' : ''}`}
      href="#inicio"
      aria-label="Llallin Huechan, inicio"
    >
      <span className="brand__mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="brand__wordmark">
        <span>LLALLIN</span>
        <span>HUECHAN</span>
      </span>
    </a>
  );
}