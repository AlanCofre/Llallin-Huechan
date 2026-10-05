export default function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-heading__copy">{children}</div> : null}
    </div>
  );
}