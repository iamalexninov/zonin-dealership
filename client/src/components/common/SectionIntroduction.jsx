export const SectionIntroduction = ({ content }) => {
  const subtitleStyle = {
    color: "var(--light-gray)",
    textTransform: "uppercase",
  };

  return (
    <div style={content.container.style}>
      {!!content.subtitle && <h4 style={subtitleStyle}>{content.subtitle.text}</h4>}
      {content.title.type === "h1" ? (
        <h1 style={content.title.style}>{content.title.text}</h1>
      ) : content.title.type === "h2" ? (
        <h2 style={content.title.style}>{content.title.text}</h2>
      ) : content.title.type === "h3" ? (
        <h3 style={content.title.style}>{content.title.text}</h3>
      ) : content.title.type === "h4" ? (
        <h4 style={content.title.style}>{content.title.text}</h4>
      ) : null}
      {!!content.paragraph && <p className={content.paragraph.style}>{content.paragraph.text}</p>}
    </div>
  );
};
