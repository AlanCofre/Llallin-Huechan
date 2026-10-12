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
          src="/images/logo-navbar.png"
          alt=""
        />
      </span>
    </a>
  );
}