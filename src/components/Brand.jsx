export default function Brand({ compact = false, light = false }) {
  return (
    <a
      className={`brand${compact ? ' brand--compact' : ''}${light ? ' brand--light' : ''}`}
      href="#inicio"
      aria-label="Llallin Huechan, inicio"
    >
      <span className="brand__logo-frame" aria-hidden="true">
        <img
          className="brand__logo"
          src="/images/Logo%20Llalin%20PNG-02%20(2)%20(1)%20-%20lidia%20huechan%20cavieres.png"
          alt=""
        />
      </span>
    </a>
  );
}